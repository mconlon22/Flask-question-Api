  
from django.urls import path
from .api import QuestionViewSet,CreateQuestionsAPI
urlpatterns=[

path('api/<topic>/', QuestionViewSet.as_view()),
path('api/create/', CreateQuestionsAPI.as_view())

]

