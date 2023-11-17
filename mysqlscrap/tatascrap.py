import re
import json
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import TimeoutException
import psycopg2
from psycopg2 import OperationalError

TIMEOUT_VALUE = 300

def convert_financial_string(s):
    try:
        match = re.search(r'-?\d+,\d+\.?\d*|-?\d+\.?\d*', s.replace(',', ''))
        return float(match.group()) if match else None
    except ValueError:
        return None

options = webdriver.ChromeOptions()
options.add_argument("--headless")
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)

connection = psycopg2.connect(
    host='localhost',
    database='postgres',
    user='postgres',
    password='12345',
)
cursor = connection.cursor()

cursor.execute("""
    CREATE TABLE IF NOT EXISTS company_financials (
        id SERIAL PRIMARY KEY,
        data JSONB
    )
""")

try:
    driver.get("https://www.bseindia.com/stock-share-price/tata-motors-ltd/tatamotors/500570/financials-results/")
    
    headers = WebDriverWait(driver, TIMEOUT_VALUE).until(
        EC.presence_of_all_elements_located((By.CSS_SELECTOR, "table thead th"))
    )
    header_titles = [header.text.lower().replace(' ', '_') for header in headers]

    rows = WebDriverWait(driver, TIMEOUT_VALUE).until(
        EC.presence_of_all_elements_located((By.CSS_SELECTOR, "table tbody tr"))
    )

    all_rows_data = []
    
    for row in rows:
        cells = row.find_elements(By.CSS_SELECTOR, "td")
        if cells:
            financial_data = [convert_financial_string(cell.text) for cell in cells]

            if len(financial_data) == len(header_titles):
                row_data = dict(zip(header_titles, financial_data))
                all_rows_data.append(row_data)
            else:
                print(f"Skipping row due to column count mismatch: {cells}")

    # Convert all rows data to JSON
    json_data = json.dumps(all_rows_data)
    
    # Insert JSON data into the database
    insert_query = "INSERT INTO company_financials (data) VALUES (%s)"
    cursor.execute(insert_query, (json_data,))

    connection.commit()

except TimeoutException:
    print("Timed out waiting for page to load. Consider increasing the timeout value or checking your CSS selectors.")
    driver.save_screenshot('timeout_screenshot.png')
except OperationalError as e:
    print("psycopg2 Operational Error: ", e)
except Exception as e:
    print("General Error: ", e)
finally:
    driver.quit()
    if connection and not connection.closed:
        cursor.close()
        connection.close()




