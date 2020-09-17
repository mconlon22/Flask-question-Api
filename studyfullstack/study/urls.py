from rest_framework import routers
from .api import QuestionViewSet
from django.contrib import admin



router = routers.DefaultRouter()
router.register('api/questions', QuestionViewSet, 'Questions')
urlpatterns = router.urls
