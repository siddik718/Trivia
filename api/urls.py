from django.urls import path
from .views import quiz_questions_api, upload_file

urlpatterns = [
    path('quiz-questions/', quiz_questions_api, name='quiz_questions_api'),
    path('upload_file/', upload_file, name='upload_file'),
]
