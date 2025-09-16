from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import About, Collaborate

@admin.register(About)
class AboutAdmin(SummernoteModelAdmin):
    list_display = ("title", "slug", "updated_on")
    search_fields = ("title", "content")
    prepopulated_fields = {"slug": ("title",)}
    summernote_fields = ("content",)

@admin.register(Collaborate)
class CollaborateAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "read", "created_on")
    list_filter = ("read", "created_on")
    search_fields = ("name", "email", "message")