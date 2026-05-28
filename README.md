# 🚀 Documentación del Proyecto: Wishlist App (Arquitectura Monolítica MVC)

Este es un proyecto educativo diseñado para aprender el desarrollo web utilizando Express como un servidor monolítico (renderizado del lado del servidor con EJS), persistencia de datos con Mongoose y contenedorización con Docker.

---

## 🛠️ Stack Tecnológico

* **Backend y Renderizado (Servidor Unificado):**
    * **Node.js & Express.js:** Motor principal del servidor y enrutamiento.
    * **EJS (Embedded JavaScript templates):** Motor de plantillas para generar el HTML dinámicamente desde el servidor.
    * **Mongoose:** ODM para interactuar con MongoDB de forma estructurada.
* **Base de Datos:**
    * **MongoDB:** Base de datos NoSQL basada en documentos.
* **DevOps / Despliegue:**
    * **Docker & Docker Compose:** Para empaquetar la aplicación y la base de datos de manera aislada.

---

## 📁 Organización de Carpetas Adaptada

Siguiendo el modelo de tu arquitectura, el árbol del proyecto se organizará de la siguiente manera para alojar la base de datos:

```text
wishlist-app/
├── models/
│   └── Deseo.js             # Nuevo: Modelo de Mongoose (Schema del objeto)
├── public/                  # Archivos estáticos
│   ├── css/
│   │   └── style.css        # Diseños y estilos visuales
│   └── js/
│       └── main.js          # JS del navegador 
├── routes/
│   └── index.js             # Manejador y lógica de las rutas (GET, POST, DELETE)
├── views/
│   └── index.ejs            # Plantilla principal que pintará la lista de deseos
├── .gitignore               # Archivos ignorados por Git (ej. node_modules)
├── app.js                   # Configuración de Express, middlewares y motor EJS
├── index.js                 # Punto de entrada y arranque del servidor (con la función main)
├── package.json             # Dependencias del proyecto
├── Dockerfile               # Instrucciones de Docker para toda la aplicación
└── docker-compose.yml       # Orquestador para levantar App + MongoDB