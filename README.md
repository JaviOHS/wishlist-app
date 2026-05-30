# 🚀 Wishlist App: Arquitectura Monolítica con Node.js, Express y Docker

Proyecto educativo para construir una aplicación web monolítica de lista de deseos. El objetivo es aprender a integrar un backend con renderizado del lado del servidor (EJS), una base de datos NoSQL (MongoDB con Mongoose) y a empaquetar todo en contenedores con Docker para un despliegue consistente.

---

## 🛠️ Stack Tecnológico

*   **Backend y Renderizado (Servidor Unificado):**
    *   **Node.js & Express.js:** Motor principal del servidor y enrutamiento.
    *   **EJS (Embedded JavaScript templates):** Motor de plantillas para generar HTML dinámicamente.
    *   **Mongoose:** ODM para modelar y conectar con la base de datos MongoDB.
*   **Base de Datos:**
    *   **MongoDB:** Base de datos NoSQL para almacenar los deseos.
*   **Contenedorización:**
    *   **Docker & Docker Compose:** Para crear un entorno de desarrollo aislado y portable.

---

## 🏁 Cómo Empezar

Sigue estos pasos para levantar el proyecto en tu máquina local.

### Prerrequisitos

*   [Node.js](https://nodejs.org/) (v18 o superior)
*   [Docker](https://www.docker.com/get-started) y [Docker Compose](https://docs.docker.com/compose/install/)

### Opción 1: Levantar con Docker (Recomendado)

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/JaviOHS/wishlist-app.git
    cd wishlist-app
    ```

2.  **Levanta los servicios:**
    Utiliza Docker Compose para construir la imagen y arrancar los contenedores de la aplicación y la base de datos.
    ```bash
    docker compose up --build
    ```
    *Para ejecutar en segundo plano, añade la bandera `-d`.*

3.  **Accede a la aplicación:**
    Abre tu navegador y visita [http://localhost:3000](http://localhost:3000).

### Opción 2: Ejecución Local (Sin Docker)

1.  **Instala las dependencias:**
    ```bash
    npm install
    ```

2.  **Inicia una base de datos MongoDB:**
    Asegúrate de tener una instancia de MongoDB corriendo. Puedes usar una instalación local o un contenedor de Docker:
    ```bash
    docker run -d --name wishlist-mongo -p 27017:27017 -v mongo-data:/data/db mongo:6.0
    ```

3.  **Arranca la aplicación:**
    ```bash
    node index.js
    ```
    *Opcionalmente, puedes configurar un script `start` en tu `package.json`.*

---

## 🐳 Comandos Útiles de Docker

*   **Ver logs en tiempo real:**
    ```bash
    docker compose logs -f
    ```

*   **Parar y eliminar contenedores:**
    ```bash
    docker compose down
    ```
    *Para borrar también los volúmenes (¡cuidado, elimina los datos!), usa `docker compose down -v`.*

*   **Acceder a la shell de MongoDB:**
    ```bash
    docker exec -it wishlist-mongo mongosh
    ```

*   **Listar contenedores:**
    ```bash
    docker ps -a
    ```

---

## 📁 Estructura del Proyecto

```text
wishlist-app/
├── models/
│   └── Deseo.js             # Modelo de Mongoose (Schema)
├── routes/
│   └── index.js             # Rutas y controladores
├── views/
│   └── index.ejs            # Plantilla EJS para la vista
├── .gitignore
├── app.js                   # Configuración de Express y middlewares
├── index.js                 # Punto de entrada del servidor
├── package.json             # Dependencias y scripts
├── Dockerfile               # Definición de la imagen de la app
└── docker-compose.yml       # Orquestador de servicios (app + db)
```