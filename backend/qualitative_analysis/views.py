from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Qualitative_Analysis
from .serializers import QASerializer


@api_view(['GET'])
def getQA(request):
    company_name = request.GET.get('company_name', '')
    # print(company_name)
    company = Qualitative_Analysis.objects.get(company_id__name=company_name)
    print(company)
    serialiser = QASerializer(company, many=False)
    return Response(serialiser.data)
    
@api_view(['POST'])
def postQA(request):
    print(request.data)
    serialiser = QASerializer(data=request.data)
    if serialiser.is_valid():
        serialiser.save()
    return Response(serialiser.data)


# Create your views here.
