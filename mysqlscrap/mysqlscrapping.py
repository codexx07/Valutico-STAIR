import re
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import TimeoutException
import psycopg2  # Import the psycopg2 library for PostgreSQL
from psycopg2 import Error

TIMEOUT_VALUE = 10

def convert_financial_string(s):
    try:
        match = re.search(r'-?\d+,\d+\.?\d*|-?\d+\.?\d*', s.replace(',', ''))
        return float(match.group()) if match else None
    except ValueError:
        return None

options = webdriver.ChromeOptions()
options.add_argument("--headless")
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)

# Initialize connection with None
connection = None

try:
    driver.get("https://www.bseindia.com/stock-share-price/tata-motors-ltd/tatamotors/500570/financials-results/")

    headers = WebDriverWait(driver, TIMEOUT_VALUE).until(
        EC.presence_of_all_elements_located((By.CSS_SELECTOR, "table thead th"))
    )
    header_titles = [header.text.lower().replace(' ', '_') for header in headers]

    rows = WebDriverWait(driver, TIMEOUT_VALUE).until(
        EC.presence_of_all_elements_located((By.CSS_SELECTOR, "tbody tr"))
    )

    # Establish a PostgreSQL connection
    connection = psycopg2.connect(
        host='localhost',
        database='bse_financials',
        user='user',
        password='12345'
    )
    cursor = connection.cursor()

    for row in rows:
        cells = row.find_elements(By.CSS_SELECTOR, "td")
        if cells:
            financial_data = [convert_financial_string(cell.text) for cell in cells]

            if len(financial_data) != len(header_titles):
                print(f"Skipping row due to column count mismatch: {financial_data}")
                continue

            insert_query = f"INSERT INTO company_financials ({', '.join(header_titles)}) VALUES ({', '.join(['%s'] * len(financial_data))})"
            cursor.execute(insert_query, tuple(financial_data))

    connection.commit()

except TimeoutException:
    print("Timed out waiting for page to load. Consider increasing the timeout value or checking your CSS selectors.")
    driver.save_screenshot('timeout_screenshot.png')
    print("Current URL:", driver.current_url)
    print("Page title:", driver.title)
except Error as e:
    print("PostgreSQL Error: ", e)
except Exception as e:
    print("General Error: ", e)
finally:
    driver.quit()
    if connection:
        cursor.close()
        connection.close()

