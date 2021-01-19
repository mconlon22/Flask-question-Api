  
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .api import QuestionViewSet,CreateQuestionsAPI
urlpatterns=[

path('api/<topic>/', QuestionViewSet.as_view()),
path('api/create/', CreateQuestionsAPI.as_view())


]
urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)


