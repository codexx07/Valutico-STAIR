import sys

def Asset_Based_Valuation():
    try:
        asset_value = float(input("Enter the asset value: "))
        debt_ratio = float(input("Enter the debt ratio: "))
        return asset_value / (1 - debt_ratio)
    except ValueError:
        print("Invalid input. Please ensure all inputs are numerical values.")
        return None

def Income_Based_Valuation():
    try:
        annual_income = float(input("Enter the annual income: "))
        discount_rate = float(input("Enter the discount rate: "))
        number_of_years = int(input("Enter the number of years: "))
        return annual_income / (1 + discount_rate) ** number_of_years
    except ValueError:
        print("Invalid input. Please ensure all inputs are numerical values.")
        return None

def Market_Based_Valuation():
    try:
        EBITDA = float(input("Enter the EBITDA: "))
        current_liabilities = float(input("Enter the current liabilities: "))
        revenue = float(input("Enter the revenue: "))
        cogs = float(input("Enter the cost of goods sold (COGS): "))
        option = input("Enter the option ('service' or 'trading'): ")
        if option == 'service':
            return (EBITDA * 1.5) - (current_liabilities * 0.5)
        elif option == 'trading':
            return (EBITDA * 1.3) / (revenue - cogs)
        else:
            print("Invalid option. Please choose 'service' or 'trading'.")
            return None
    except ValueError:
        print("Invalid input. Please ensure all inputs are numerical values.")
        return None

def Discounted_Cash_Flow_Valuation():
    try:
        future_cash_flow = float(input("Enter the future cash flow: ")) 
        discount_rate = float(input("Enter the discount rate: "))
        n = int(input("Enter the number of periods (n): "))
        return (future_cash_flow * discount_rate) / ((1 + discount_rate) ** n)
    except ValueError:
        print("Invalid input. Please ensure all inputs are numerical values.")
        return None

def Equity_Multiplier_Valuation():
    try:
        current_value = float(input("Enter the current value: "))
        ebitda = float(input("Enter the EBITDA: "))
        return current_value / ebitda
    except ValueError:
        print("Invalid input. Please ensure all inputs are numerical values.")
        return None

def Book_Value_Valuation():
    try:
        beginning_assets = float(input("Enter the beginning of year assets: "))
        end_assets = float(input("Enter the end of year assets: "))
        end_liabilities = float(input("Enter the end of year liabilities: "))
        beginning_liabilities = float(input("Enter the beginning of year liabilities: "))
        return (beginning_assets - end_assets) / (end_liabilities - beginning_liabilities)
    except ValueError:
        print("Invalid input. Please ensure all inputs are numerical values.")
        return None

def Liquidation_Value():
    try:
        current_liabilities = float(input("Enter the current liabilities: "))
        value_of_assets = float(input("Enter the value of assets: "))
        return current_liabilities - value_of_assets
    except ValueError:
        print("Invalid input. Please ensure all inputs are numerical values.")
        return None

def Break_Up_Value():
    try:
        asset_value = float(input("Enter the asset value: "))
        liability_value = float(input("Enter the liability value: "))
        total_debt = float(input("Enter the total debt: "))
        return (asset_value + liability_value) - total_debt
    except ValueError:
        print("Invalid input. Please ensure all inputs are numerical values.")
        return None

def Peer_Group_Analysis():
    try:
        N = int(input("Enter the number of companies (N): "))
        market_capitalizations = []
        values = []
        for i in range(N):
            market_capitalizations.append(float(input(f"Enter the market capitalization for company {i+1}: ")))
            values.append(float(input(f"Enter the value for company {i+1}: ")))
        total_sum = sum(Pi * Vi for Pi, Vi in zip(market_capitalizations, values))
        return total_sum / N
    except ValueError:
        print("Invalid input. Please ensure all inputs are numerical values.")
        return None

def Precedent_Transaction_Analysis():
    try:
        WACC = float(input("Enter the Weighted Average Cost of Capital (WACC): "))
        t = float(input("Enter the time period (t): "))
        C = float(input("Enter the constant (C): "))
        return (1 + WACC) ** (t / 2) - C
    except ValueError:
        print("Invalid input. Please ensure all inputs are numerical values.")
        return None

def calculate_custom_valuation_with_input():
    print("Select a valuation method:")
    print("1. Asset-Based Valuation")
    print("2. Income-Based Valuation")
    print("3. Market-Based Valuation")
    print("4. Discounted Cash Flow Valuation")
    print("5. Equity Multiplier Valuation")
    print("6. Book Value Valuation")
    print("7. Liquidation Value")
    print("8. Break-Up Value")
    print("9. Peer Group Analysis")
    print("10. Precedent Transaction Analysis")

    try:
        user_choice = int(input("Enter your choice (1-10): "))
        if user_choice < 1 or user_choice > 10:
            print("Invalid choice. Please select a valid valuation method (1-10).")
            sys.exit(1)

        valuation_methods = {
            1: Asset_Based_Valuation,
            2: Income_Based_Valuation,
            3: Market_Based_Valuation,
            4: Discounted_Cash_Flow_Valuation,
            5: Equity_Multiplier_Valuation,
            6: Book_Value_Valuation,
            7: Liquidation_Value,
            8: Break_Up_Value,
            9: Peer_Group_Analysis,
            10: Precedent_Transaction_Analysis
        }

        result = valuation_methods[user_choice]()
        if result is not None:
            print(f"The result of the valuation is: {result}")
        else:
            print("An error occurred during the valuation.")

    except ValueError:
        print("Invalid input. Please enter a numerical choice (1-10).")

if __name__ == "__main__":
    calculate_custom_valuation_with_input()
