import pandas as pd
from sqlalchemy import create_engine
from selenium import webdriver
from selenium.webdriver.common.by import By

# Scrape the data using Selenium
driver = webdriver.Chrome()
driver.get('https://www.bseindia.com/stock-share-price/tata-motors-ltd/tatamotors/500570/financials-results/')
xpath = '//*[@id="qtly"]/table/tbody/tr/td/table[1]'
table = driver.find_element(By.XPATH, xpath)

data = []
for row in table.find_elements(By.XPATH, './/tr'):
    row_data = [cell.text for cell in row.find_elements(By.XPATH, './/td')]
    if row_data:
        data.append(row_data)

driver.quit()

# Assuming the first row of scraped data is the header
headers = data.pop(0)
df = pd.DataFrame(data, columns=headers)

# Save the data to a CSV file
csv_file_path = 'table_data.csv'
df.to_csv(csv_file_path, index=False)

# Database connection parameters
db_username = 'postgres'
db_password = '12345'
db_name = 'postgres'
db_host = 'localhost'

# Creating a SQLAlchemy engine
engine = create_engine(f'postgresql+psycopg2://{db_username}:{db_password}@{db_host}/{db_name}')

# Reading the CSV file
df = pd.read_csv(csv_file_path)

# Infer the data types for SQL Alchemy
df.to_sql('financial_data', engine, if_exists='replace', index=False, method='multi')

print("Table created and data inserted into PostgreSQL database.")



