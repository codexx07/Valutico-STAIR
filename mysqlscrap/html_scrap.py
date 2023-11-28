import requests

# URL of the webpage to scrape
url = 'https://www.bseindia.com/stock-share-price/tata-motors-ltd/tatamotors/500570/financials-results/'

# Set a user-agent to mimic a browser request
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}

# Send a GET request to the URL
response = requests.get(url, headers=headers)

# Check if the request was successful
if response.status_code == 200:
    # Get the HTML content of the page
    html_content = response.text

    # Write the HTML content to a text file
    with open('page_content.txt', 'w', encoding='utf-8') as file:
        file.write(html_content)

    print("HTML content saved to 'page_content.txt'")
else:
    print(f"Failed to retrieve the webpage. Status code: {response.status_code}")


