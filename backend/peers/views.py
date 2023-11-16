from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import PublicCompany
from .serialiser import PublicCompanySerializer


@api_view(['GET'])
def getPublicCompanies(request):
    industry = request.GET.get('industry', '')
    comps = PublicCompany.objects.filter(industry=industry)
    serialiser = PublicCompanySerializer(comps, many=True)
    return Response(serialiser.data)