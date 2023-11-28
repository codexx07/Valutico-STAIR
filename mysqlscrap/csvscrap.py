import requests
import pandas as pd
from io import StringIO

res = requests.get('https://www.bseindia.com/stock-share-price/tata-motors-ltd/tatamotors/500570/financials-results/')

# Wrap the HTML content in StringIO before passing to read_html
html_content = StringIO(res.text)
df_list = pd.read_html(html_content, skiprows=[0])

# Concatenate all found DataFrames (if there are multiple tables)
df = pd.concat(df_list)

# Save the DataFrame to a CSV file
df.to_csv("data.csv", index=False)

# Print the DataFrame
print(df)

        
        







