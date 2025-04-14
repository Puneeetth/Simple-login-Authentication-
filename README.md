Full Stack Auth App (React + Vite + TailwindCSS + Django + DRF + JWT + PostgreSQL)

This project is a simple full-stack authentication app with light/dark theme toggle. It features:

Frontend: React + Vite + TailwindCSS

Backend: Django + Django REST Framework + JWT Authentication

Database: PostgreSQL

🔧 Project Structure

project-root/
├── backend/               # Django + DRF backend
│   ├── manage.py
│   ├── backend/           # Django project settings
│   ├── accounts/          # Custom user app (signup, login)
│   └── requirements.txt   # Python dependencies
│
└── frontend/              # React app using Vite + TailwindCSS
    ├── index.html
    ├── src/
    │   ├── App.jsx        # Entry point with routing
    │   ├── main.jsx       # Renders App.jsx
    │   ├── index.css      # TailwindCSS styles
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Login.jsx
    │   │   └── Signup.jsx
    └── tailwind.config.js

    🚀 Frontend Setup (React + Vite + TailwindCSS)

1. Navigate to frontend directory:

cd frontend

2. Install dependencies:

npm install

3. TailwindCSS Setup:

Ensure tailwind.config.js has:

  darkMode: 'class'

index.css should contain:

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  @apply bg-white text-black dark:bg-gray-900 dark:text-white;
}

4. Run React App:
npm run dev

🔐 Backend Setup (Django + DRF + JWT + PostgreSQL)

1. Navigate to backend directory:

cd backend

2. Create virtual environment:

python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate

3. Install dependencies:

pip install -r requirements.txt

4. Setup .env or settings.py for PostgreSQL:

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'yourdbname',
        'USER': 'youruser',
        'PASSWORD': 'yourpassword',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

5. Run migrations:

python manage.py makemigrations
python manage.py migrate

6. Run Django Server:

python manage.py runserver

Backend runs at: http://127.0.0.1:8000/

🔄 API Routes (DRF + JWT)

POST /api/auth/register/ → Register new user

POST /api/auth/login/ → Get JWT token

GET /api/auth/user/ → Get user profile

Ensure SimpleJWT is added in settings:

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ]
}

🔗 Connecting Frontend to Backend

Use axios or fetch in React

Backend base URL: http://127.0.0.1:8000/

Set proxy in vite.config.js (optional)

server: {
  proxy: {
    '/api': 'http://127.0.0.1:8000',
  },
}

🌗 Light/Dark Mode Toggle

Implemented in a global Navbar component

Uses document.documentElement.classList to toggle dark

State stored in localStorage for persistence

✅ To-Do



🤝 Contributing

Pull requests are welcome. Let’s build something cool together!
