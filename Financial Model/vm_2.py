def dcf_valuation():
    try:
        discount_rate = float(input("Enter the discount rate: "))
        number_of_years = int(input("Enter the number of years: "))
        cash_flows = []
        for i in range(number_of_years):
            cash_flow = float(input(f"Enter the cash flow for year {i+1}: "))
            cash_flows.append(cash_flow)
        
        dcf_value = sum(cf / (1 + discount_rate) ** (i + 1) for i, cf in enumerate(cash_flows))
        return dcf_value

    except ValueError:
        print("Invalid input. Please ensure all inputs are numerical values.")
        return None

def calculate_apv():
    try:
        # Inputs for calculating NPV
        initial_investment = float(input("Enter the initial investment outflow: "))
        number_of_periods = int(input("Enter the number of periods: "))
        cash_flows = []
        for i in range(number_of_periods):
            cash_flow = float(input(f"Enter the cash flow for period {i+1}: "))
            cash_flows.append(cash_flow)
        discount_rate = float(input("Enter the discount rate: "))

        # Calculating NPV
        npv_value = -initial_investment
        for i in range(number_of_periods):
            npv_value += cash_flows[i] / (1 + discount_rate) ** (i + 1)
        print(f"Calculated NPV: {npv_value}")

        # Inputs for calculating PV of debt benefits
        tax_rate = float(input("Enter the tax rate: "))
        debt_value = float(input("Enter the debt value: "))
        interest_on_debt = float(input("Enter the interest rate on debt: "))

        # Calculating PV of debt benefits (assuming constant tax shield each year)
        pv_debt_benefits = tax_rate * debt_value * interest_on_debt / interest_on_debt  # Simplifies to tax_rate * debt_value
        print(f"Calculated PV of Debt Benefits: {pv_debt_benefits}")

        # Calculating APV
        apv = npv_value + pv_debt_benefits
        return apv

    except ValueError:
        print("Invalid input. Please ensure all inputs are numerical values.")
        return None

def npv():
    try:
        initial_investment = float(input("Enter the initial investment outflow: "))
        number_of_periods = int(input("Enter the number of periods: "))
        cash_flows = []
        for i in range(number_of_periods):
            cash_flow = float(input(f"Enter the cash flow for period {i+1}: "))
            cash_flows.append(cash_flow)
        discount_rate = float(input("Enter the discount rate: "))

        npv_value = -initial_investment
        for i in range(number_of_periods):
            npv_value += cash_flows[i] / (1 + discount_rate) ** (i + 1)

        return npv_value

    except ValueError:
        print("Invalid input. Please ensure all inputs are numerical values.")
        return None

def Dividend_Discount_Model():
    try:
        expected_dividend = float(input("Enter the expected dividend per share: "))
        cost_of_equity = float(input("Enter the cost of equity capital (discount rate): "))
        dividend_growth_rate = float(input("Enter the dividend growth rate: "))

        if cost_of_equity <= dividend_growth_rate:
            raise ValueError("Cost of equity must be greater than the dividend growth rate for the model to be valid.")

        stock_value = expected_dividend / (cost_of_equity - dividend_growth_rate)

        return stock_value

    except ValueError as e:
        print(f"Invalid input: {e}")
        return None

def valuation_interface():
    while True:
        print("\nValuation Models Menu:")
        print("1. Discounted Cash Flow (DCF)")
        print("2. Adjusted Present Value (APV)")
        print("3. Net Present Value (NPV)")
        print("4. Dividend Discount Model (DDM)")
        print("5. Exit")

        choice = input("Enter the number of the valuation model you want to use (1-5): ")

        if choice == '1':
            print("\nDiscounted Cash Flow Valuation")
            result = dcf_valuation()
            if result is not None:
                print(f"The calculated DCF value is: {result}")
        
        elif choice == '2':
            print("\nAdjusted Present Value (APV) Valuation")
            result = calculate_apv()  # Changed to the correct function name
            if result is not None:
                print(f"The calculated APV value is: {result}")
        
        elif choice == '3':
            print("\nNet Present Value (NPV) Calculation")
            result = npv()
            if result is not None:
                print(f"The calculated NPV value is: {result}")
        
        elif choice == '4':
            print("\nDividend Discount Model (DDM) Stock Valuation")
            result = Dividend_Discount_Model()
            if result is not None:
                print(f"The calculated value of the stock is: {result}")
        
        elif choice == '5':
            print("Exiting the valuation models menu.")
            break
        else:
            print("Invalid choice. Please enter a number between 1 and 5.")

valuation_interface()
