import logging
import requests
from bs4 import BeautifulSoup
import psycopg2

def getSENSEXCompanyList():
    logger = logging.getLogger('financeMacroFactors.companies.companyLists.getSENSEXCompanyList')

    try:
        logger.debug('Downloading data from the Wikipedia page ...')
        website_url = 'https://en.wikipedia.org/wiki/List_of_BSE_SENSEX_companies'
        website = requests.get(website_url).text
        logger.debug(f'Downloaded data from: {website_url}')

        logger.debug('Parsing the web data...')
        soup = BeautifulSoup(website, 'html.parser')
        companyTable = soup.find('table', {'id':'constituents'})

        if not companyTable:
            raise Exception('No table found with the specified ID.')

        rows = companyTable.find_all('tr')

        if not rows or len(rows) < 2:
            raise Exception('No rows found in the table or insufficient rows.')

        # Adjusting to the specified columns
        header_columns = ['Serial_No', 'Ticker_Number', 'Symbol', 'Companies', 'Sector', 'Date']

        results = []
        for row in rows[1:]:
            cells = row.find_all('td')
            if cells and len(cells) >= len(header_columns):
                data = {header_columns[i]: cells[i].getText().strip() for i in range(len(header_columns))}
                results.append(data)

        logger.debug(f'{len(results)} rows of data generated ...')

        # PostgreSQL connection
        connection = psycopg2.connect(
            host='localhost',
            database='postgres',
            user='postgres',
            password='12345'
        )
        cursor = connection.cursor()

        # Create table in PostgreSQL
        column_definitions = ', '.join([f"{col} TEXT" for col in header_columns])
        create_table_query = f"CREATE TABLE IF NOT EXISTS sensex_companies ({column_definitions});"
        cursor.execute(create_table_query)
        logger.debug('Table created in PostgreSQL')

        # Insert data into PostgreSQL
        for data_row in results:
            columns = ', '.join(data_row.keys())
            placeholders = ', '.join(['%s'] * len(data_row))
            insert_query = f"INSERT INTO sensex_companies ({columns}) VALUES ({placeholders});"
            cursor.execute(insert_query, list(data_row.values()))

        connection.commit()
        logger.debug(f'Data inserted into PostgreSQL')

    except Exception as e:
        logger.error('Error while attempting to get SENSEX company listings or inserting data into PostgreSQL')
        logger.error(f'{e}')
    finally:
        if 'connection' in locals():
            cursor.close()
            connection.close()

    return results

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Call the function to get the company list
company_list = getSENSEXCompanyList()
connection=(host="locsl")