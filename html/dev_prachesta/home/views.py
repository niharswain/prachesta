from django.shortcuts import render, HttpResponse


import os

# Create your views here.
def pull_achievements():
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    project_available = os.listdir(os.path.join(BASE_DIR, 'static/images/events'))
    dirlists = []
    for item in project_available:
        abs_path_dir = os.path.join(BASE_DIR, 'static/images/events/', item)
        if os.path.isdir(abs_path_dir):
            dirlists.append(item)
    return dirlists

def home(request):
    #return HttpResponse("This is my Home Page (/)")
    dirList = pull_achievements()
    return render(request, 'index.html', {'dirLists': dirList})

def about(request):
    return HttpResponse("This is my About Page")

def our_people(request):
    #return HttpResponse("This is my service Page")
    dirList = pull_achievements()
    return render(request,'our_people.html', {'dirLists': dirList})

def know_prachesta(request):
    dirList = pull_achievements()
    return render(request, 'know_prachesta.html', {'dirLists': dirList})

def load_gallery(request):
    print("###############################")
    path = request.path
    path = path.replace("load_gallery_","")
    print(path)
    location = path.replace("/","")
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    dirlists = pull_achievements()
    base_path_for_events = os.path.join(BASE_DIR, 'static/images/events' + path)
    print(base_path_for_events)
    event_Files = os.listdir(base_path_for_events)
    fileList = []
    for item in event_Files:
        abs_path_dir = os.path.join(BASE_DIR, 'static/images/events/' + path + "/" + item)
        if os.path.isfile(abs_path_dir):
            fileList.append("/static/images/events" + path + "/" + item)
    #return HttpResponse("Path Checked, Thanks!! " + str(path) )
    return render(request, 'gallery.html', {'files': fileList, 'dirLists': dirlists, 'location':location})

def donate(request):
    dirList = pull_achievements()
    return render(request, 'test_donation_form.html', {'dirLists': dirList})
    #return render(request, 'donate.html', {'dirLists': dirList})

def joinUs(request):
    dirList = pull_achievements()
    return render(request, 'joinUs.html', {'dirLists': dirList})

def contactUs(request):
    dirList = pull_achievements()
    return render(request, 'contactUs.html', {'dirLists': dirList})

def term_condition(request):
    dirList = pull_achievements()
    return render(request, 'terms_condition.html', {'dirLists': dirList})

def joinPrachesta(request):
    pass


