from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Qualitative_Analysis
from .serializers import QASerializer


@api_view(['GET'])
def getQA(requesst):
    app = Qualitative_Analysis.objects.all()
    serialiser = QASerializer(app, many=True)
    return Response(serialiser.data)
    
@api_view(['POST'])
def postQA(request):
    print(request.data)
    serialiser = QASerializer(data=request.data)
    if serialiser.is_valid():
        serialiser.save()
    return Response(serialiser.data)


# Create your views here.
