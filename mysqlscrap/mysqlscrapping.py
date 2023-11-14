import re
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import TimeoutException
import mysql.connector
from mysql.connector import Error

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

connection = mysql.connector.connect(
    host='localhost',
    database='bse_financials',
    user='user',
    password='12345',
)
cursor = connection.cursor()

cursor.execute("""
    CREATE TABLE IF NOT EXISTS company_financials (
        id INT AUTO_INCREMENT PRIMARY KEY,
        company_name VARCHAR(255),
        date_of_entry DATE,
        revenue DECIMAL(20, 2),
        other_income DECIMAL(20, 2),
        total_income DECIMAL(20, 2),
        expenditure DECIMAL(20, 2),
        interest DECIMAL(20, 2),
        pbdt DECIMAL(20, 2),
        depreciation DECIMAL(20, 2),
        pbt DECIMAL(20, 2),
        tax DECIMAL(20, 2),
        net_profit DECIMAL(20, 2),
        equity DECIMAL(20, 2),
        eps DECIMAL(10, 2),
        ceps DECIMAL(10, 2),
        opm_percentage DECIMAL(5, 2),
        npm_percentage DECIMAL(5, 2)
    )
""")

try:
    driver.get("https://www.bseindia.com/stock-share-price/tata-motors-ltd/tatamotors/500570/financials-results/")

    headers = WebDriverWait(driver, TIMEOUT_VALUE).until(
        EC.presence_of_all_elements_located((By.CSS_SELECTOR, "table thead th"))
    )
    header_titles = [header.text.lower().replace(' ', '_') for header in headers]

    rows = WebDriverWait(driver, TIMEOUT_VALUE).until(
        EC.presence_of_all_elements_located((By.CSS_SELECTOR, "tbody tr"))
    )

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
    print("MySQL Error: ", e)
except Exception as e:
    print("General Error: ", e)
finally:
    driver.quit()
    if connection.is_connected():
        cursor.close()
        connection.close()