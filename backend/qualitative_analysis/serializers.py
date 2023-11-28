from rest_framework import serializers
from .models import Qualitative_Analysis

class QASerializer(serializers.ModelSerializer):
    class Meta:
        model = Qualitative_Analysis
        # fields = ['company_id']
        fields = ['company_id', 'risk_factor', 'discount_to_trading_mults', 'cost_of_equity']