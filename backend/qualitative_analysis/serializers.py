from rest_framework import serializers
from .models import Qualitative_Analysis

class QASerializer(serializers.ModelSerializer):
    class Meta:
        model = Qualitative_Analysis
        fields = ['company_id']