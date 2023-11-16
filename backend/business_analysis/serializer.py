from rest_framework import serializers
from .models import FinancialProjectionsModel

class FinancialProjectionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancialProjectionsModel
        fields = ['sales', 'growth_percentage', 'ebita', 'depreciation', 'ebit', 'net_income', 'capex', 'account_receivable', 'inventories', 'account_payable', 'cash_n_investments', 'debt', 'book_equity', 'fixed_assets']