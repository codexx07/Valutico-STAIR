from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from .models import Company
from .serializers import CompanySerializer


@api_view(['GET'])
def getCompany(request):
    
    app = Company.objects.all()
    serialiser = CompanySerializer(app, many=True)
    return Response(serialiser.data)
    
@api_view(['POST'])
def postCompany(request):
    print(request.data)
    serialiser = CompanySerializer(data=request.data)
    if serialiser.is_valid():
        serialiser.save()
    return Response(serialiser.data)

