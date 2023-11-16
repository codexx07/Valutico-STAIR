from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import FinancialProjectionsModel
from .serializer import FinancialProjectionsSerializer 
# Create your views here.

@api_view(['GET'])
def getFinancialProjections(request):
    company = request.GET.get('company', '')
    app = FinancialProjectionsModel.objects.filter
    serialiser = FinancialProjectionsSerializer(app, many=True)
    return Response(serialiser.data)