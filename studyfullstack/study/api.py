from study.models import Question
from rest_framework import viewsets, permissions 
from .serializers import QuestionSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    queryset=Question.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=QuestionSerializer

    