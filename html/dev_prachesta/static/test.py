import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
project_available = os.listdir(os.path.join(BASE_DIR, 'static/images/events'))
dirlists = ''
context = {}
print(project_available)
for item in project_available:
    #print(item)
    abs_path_dir = os.path.join(BASE_DIR,'static/images/events/',item)

    if os.path.isdir(abs_path_dir):
        print("############", str(item))
        dirlists += '<a class ="dropdown-item" href="#" >' + item + '</a>'
        print("DIRECTORY: ", str(dirlists))