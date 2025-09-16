from django.shortcuts import render
from django.contrib import messages
from django.http import HttpResponseRedirect
from .models import About
from .forms import CollaborateForm


def about_me(request):
    if request.method == "POST":
        collaborate_form = CollaborateForm(data=request.POST)
        if collaborate_form.is_valid():
            collaborate_form.save()
            messages.add_message(request, messages.SUCCESS, "Collaboration request received! I endeavour to respond within 2 working days.")
    """
    Renders the About page with a collaboration form.
    """
    page = About.objects.order_by("-updated_on").first()
    form = CollaborateForm()  # blank form
    return render(
        request,
        "about/index.html",
        {"about": page, "form": form},
    )
