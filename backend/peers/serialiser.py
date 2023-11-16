from rest_framework import serializers
from .models import PublicCompany

class PublicCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = PublicCompany
        fields = ['company_name', 'country', 'ev_sales', 'ev_ebit', 'ev_ebitda', 'p_e', 'financial_structure', 'beta']
