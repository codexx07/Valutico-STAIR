from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import FinancialProjectionsModel
from .serializer import FinancialProjectionsSerializer 
# Create your views here.

@api_view(['GET'])
def getFinancialProjections(request):
    company = request.GET.get('company', '')
    app = FinancialProjectionsModel.objects.filter(company_id__name=company)
    serialiser = FinancialProjectionsSerializer(app, many=True)
    return Response(serialiser.data)

@api_view(['GET'])
def getFinancialProjections(request):
    industry = request.GET.get('industry')
    app = FinancialProjectionsModel.objects.filter(industry=industry)
    serialiser = FinancialProjectionsSerializer(app, many=True)
    return Response(serialiser.data)