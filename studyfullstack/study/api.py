from django.http import JsonResponse

import json
from .models import Question
from rest_framework import viewsets
from rest_framework.response import Response
from django.http import HttpResponse
from .serializers import QuestionSerializer
from rest_framework import generics, permissions



class QuestionViewSet(generics.ListCreateAPIView):
    serializer_class = QuestionSerializer
    def get(self, *args, **kwargs):

        queryset = Question.objects.all().filter(topic=kwargs.get('topic'))
        print(queryset)
        serializer = QuestionSerializer(queryset, many=True)
        print(json.dumps(serializer.data))
        return JsonResponse(serializer.data,safe=False)
class CreateQuestionsAPI(generics.ListCreateAPIView):
    serializer_class = QuestionSerializer
    def post(self,request, *args, **kwargs):
        question = request.FILES["question"]
        markingScheme= question = request.FILES["marking_scheme"]
        data = json.loads(request.data)
        permission_classes=[
        permissions.AllowAny
        ]

        print(request.data)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        Question.objects.create(year=request.data['year'])        
        return HttpResponse({'hello':'hello'})
    