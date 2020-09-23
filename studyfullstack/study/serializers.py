from rest_framework import serializers
from .models import Question


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = (
            'year', 
            'question_num',
            'question',
            'marking_scheme',
            'subject',
            'topic',
            'outOf'
        )
