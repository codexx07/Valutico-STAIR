from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import FinancialProjectionsModel
# Create your views here.

@api_view(['GET'])
def getCompany(request):
    
    app = FinancialProjectionsModel.objects.all()
    serialiser = (app, many=True)
    return Response(serialiser.data)