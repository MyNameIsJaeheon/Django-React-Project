# Development Instructions

Create a virtual environment:
'python3 -m venv env'
Activate the virtual environment:
'source env/bin/activate'


install all dependencies (requirements.txt)
pip install -r requirements.txt

create new Django project
"django-admin startproject backend"

in /backend/myapp/ we write a lot of custom Django code - to organize logic out, authentication
"python3 manage.py startapp myapp"

"python3 manage.py migrate" will connect to the remote database, create the tables, and apply the migrations
"python3 manage.py runserver" to run the application

git init
git add .
git commit -m "first commit"
git branch -M main
create a new repository on GitHub

add the origin,
"git remote add origin https://github.com/MyNameIsJaeheon/Django-React-Project.git"
change the origin - "git remote set-url origin https://github.com/MyNameIsJaeheon/Django-React-Project.git"
check the Remote Origin - "git remote -v"
and push code.
"git push -u origin main --force" ..

Choreo
connect to my GitHub
add a Service component for REST API Backend
add a Web component for Frontend
build, and deploy the Backend
add the secret Environment Variables

deploy - after removing all API Key Credentials (just for now)
Bad Request is printed - means API can be accessed

Connect Frontend to Backend
Dependencies - Connections
/frontend/src/api.js/
const apiUrl = Service URL ('https://7b1e8a9a-ca73-43d4-a750-9aa53cc03d3e-dev.e1-us-east-azure.choreoapis.dev/djangoreactpostgresql/backend/v1')
