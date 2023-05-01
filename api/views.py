from .serializers import QuizQuestionSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import QuizQuestion
import csv

@api_view(['POST'])
def upload_file(request):
    if request.method == 'POST' and request.FILES.get('file'):
        csv_file = request.FILES['file']
        decoded_file = csv_file.read().decode('utf-8').splitlines()

        # Use Python's CSV module to parse the CSV data
        data = list(csv.reader(decoded_file))

        # Convert the list of lists data into a list of dictionaries, where each dictionary corresponds to a row in the CSV file
        headers = data[0]
        rows = data[1:]
        data_dicts = [dict(zip(headers, row)) for row in rows]


        # Use the QuizQuestionSerializer to validate and convert the data into model instances
        serializer = QuizQuestionSerializer(data=data_dicts, many=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response({'error': 'File not found in request'}, status=status.HTTP_400_BAD_REQUEST)





@api_view(['GET'])
def quiz_questions_api(request):
    quiz_questions = QuizQuestion.objects.all()
    serializer = QuizQuestionSerializer(quiz_questions, many=True)
    return Response(serializer.data)
