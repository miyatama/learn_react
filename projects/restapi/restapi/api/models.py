from django.db import models

# 1. add model class
# 2. eval python manage.py makemigrations
# 3. eval python manage.py migrate
# Create your models here.
class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Task(models.Model):
    title = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    tag = models.ForeignKey(Tag, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.title