from rest_framework import serializers
from .models import QuizQuestion

class QuizQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizQuestion
        fields = ('question_text', 'answer_text', 'distractor_1_text', 'distractor_2_text', 'distractor_3_text')
