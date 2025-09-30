# 📋 Task Manager MERN

Aplicación web para la **gestión de proyectos y tareas**, desarrollada con el stack **MERN** (MongoDB, Express, React, Node.js).  
Permite **registrar usuarios, iniciar sesión, crear proyectos y administrar tareas** de forma sencilla e intuitiva.  

---

## 👤 Usuario de prueba

Puedes usar tu propio registro o iniciar sesión con este usuario de prueba:

- 📧 **Email:** yomaralveiro.suarez@gmail.com  
- 🔑 **Password:** 12345678  

🔗 **Demo en Producción:** [Task Manager MERN](https://app-task-mern-frontend.vercel.app/)

---

## 🚀 Características

- 🔑 Autenticación de usuarios con **JWT**.  
- 👤 Registro e inicio de sesión.  
- 📂 Creación y administración de proyectos.  
- ✅ Gestión de tareas por proyecto.  
- 👥 Asignación de roles (ej. Manager).  
- 📧 **Notificaciones por correo electrónico con Brevo (antes Sendinblue)**.  
- 🎨 Interfaz moderna con **TailwindCSS** y **Shadcn UI**.  
- 🌐 Despliegue en **Vercel (Frontend)** y **Railway (Backend)**.  

---

## 🛠️ Tecnologías utilizadas

### 🔹 Frontend
- ⚛️ React con Vite  
- 🎨 TailwindCSS  
- 🧩 Shadcn UI  
- 🔄 Axios para consumo de API  

### 🔹 Backend
- 🟢 Node.js + Express  
- 🍃 MongoDB con Mongoose  
- 🔐 JWT (JSON Web Tokens) para autenticación  
- 🌐 CORS configurado para producción  

### 🔹 Infraestructura
- ☁️ **Frontend** → Vercel  
- ☁️ **Backend** → Railway  
- ☁️ **Base de Datos** → MongoDB Atlas  

---

## ⚙️ Instalación y Ejecución en Local

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/task-manager-mern.git
   cd task-manager-mern

2. Instalar dependencias en frontend y backend:
cd frontend
npm install
cd ../backend
npm install

3. Crear archivo .env en el backend con: 
MONGO_URI=tu_conexion_mongo
JWT_SECRET=tu_secreto_jwt
BREVO_API_KEY=tu_api_key_brevo

4. Iniciar el backend:
cd backend
npm run dev

5. Iniciar el frontend:
cd frontend
npm run dev

6. Abrir en el navegador:
👉 http://localhost:5173





