from django.db import models

# Create your models here.

class QuizQuestion(models.Model):
    question_text = models.CharField(max_length=200)
    answer_text = models.CharField(max_length=200)
    distractor_1_text = models.CharField(max_length=200)
    distractor_2_text = models.CharField(max_length=200)
    distractor_3_text = models.CharField(max_length=200)

    def __str__(self):
        return self.question_text[:40]