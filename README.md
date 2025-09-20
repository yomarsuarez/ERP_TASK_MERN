📋 Task Manager MERN

Aplicación web para la gestión de proyectos y tareas, desarrollada con el stack MERN (MongoDB, Express, React, Node.js).
Permite registrar usuarios, iniciar sesión, crear proyectos y administrar las tareas de forma sencilla e intuitiva.

🔗 Demo en Producción: Task Manager MERN
https://app-task-mern-frontend.vercel.app/

🚀 Características

🔑 Autenticación de usuarios con JWT.

👤 Registro e inicio de sesión.

📂 Creación y administración de proyectos.

✅ Gestión de tareas por proyecto.

👥 Asignación de roles (ej. Manager).

🌐 Despliegue en Vercel (Frontend) y Railway (Backend).

🎨 UI moderna con TailwindCSS y Shadcn UI.

🛠️ Tecnologías utilizadas
Frontend

⚛️ React con Vite

🎨 TailwindCSS

🧩 Shadcn UI

🔄 Axios para consumo de API

Backend

🟢 Node.js + Express

🍃 MongoDB con Mongoose

🔐 JWT (JSON Web Tokens) para autenticación

🌐 CORS configurado para producción

Infraestructura

☁️ Frontend → Vercel

☁️ Backend → Railway

☁️ Base de Datos → MongoDB Atlas

⚙️ Instalación y Ejecución en Local

Clonar el repositorio:

git clone https://github.com/tu-usuario/task-manager-mern.git
cd task-manager-mern

Instalar dependencias en frontend y backend:

cd frontend
npm install
cd ../backend
npm install

Crear archivo .env en el backend con:

MONGO_URI=tu_conexion_mongo
JWT_SECRET=tu_secreto_jwt

Iniciar el backend:

cd backend
npm run dev

Iniciar el frontend:

cd frontend
npm run dev

Abrir en el navegador:

http://localhost:5173

👤 Usuario de prueba

📧 Email: yomaralveiro.suarez@gmail.com

🔑 Password: 12345678

📌 Próximas mejoras

 Notificaciones en tiempo real (Socket.io).

 Permitir asignar tareas a usuarios específicos.

 Dashboard con estadísticas de proyectos.

 Modo oscuro 🌙.

