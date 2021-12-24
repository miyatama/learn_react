from django.contrib import admin
from .models import Tag, Task

# eval python manage.py createsuperuser
# access: http://localhost:8000/admin
# access: http://localhost:8000/admin


# Register your models here.
admin.site.register(Task)
admin.site.register(Tag)