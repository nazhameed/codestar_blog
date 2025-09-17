from django.db import models
from django.utils import timezone
from cloudinary.models import CloudinaryField
from django.contrib.auth.models import User


# Create your models here.


class About(models.Model):
    """
    Stores information about the blog/site owner, including profile image,
    title, content, and timestamps for creation and updates.
    """
    title = models.CharField(max_length=200, unique=True)
    profile_image = CloudinaryField('image', default='placeholder')
    slug = models.SlugField(max_length=200, unique=True)
    content = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Collaborate(models.Model):
    """
    Stores collaboration requests submitted by users, including name, email,
    message, read status, and creation timestamp.
    """
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    read = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"


class Comment(models.Model):
    """
    Stores comments related to a blog post.
    ForeignKey:
        post -- the Post this comment is associated with.
        author -- the User who wrote the comment.
    """
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.author} on {self.post}"