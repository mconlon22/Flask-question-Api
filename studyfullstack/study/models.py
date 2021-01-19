from django.db import models
from django.contrib.auth.models import User

class Question(models.Model):
    
    year = models.IntegerField()
    question_num = models.CharField(max_length=10)
    question = models.ImageField(upload_to='images/questions/',null=True)
    marking_scheme = models.ImageField(upload_to='images/marking/',null=True)
    subject = models.CharField(max_length=50)
    topic = models.CharField(max_length=100)
    outOf=models.CharField(max_length=4,null=True)