# ShopAmiduciel

![Logo de Amiduciel](amiduciel-front/src/assets/amilogo.png)

Plataforma de comercio electrónico para Amiduciel, con un frontend moderno en React y un backend en Strapi (CMS headless).

## 🚀 Características

- **Interfaz Moderna**: Desarrollada con React 19 y Tailwind CSS para una interfaz atractiva y responsiva
- **Sistema de Gestión de Contenidos**: Backend en Strapi para una administración sencilla
- **Gestión de Productos**: Operaciones CRUD completas para productos
- **Sistema de Categorías**: Catálogo de productos organizado por categorías
- **Sistema de Reseñas**: Valoraciones y comentarios de clientes
- **Autenticación de Usuarios**: Registro e inicio de sesión seguros
- **Diseño Responsive**: Funciona en todos los dispositivos

## 🛠 Tecnologías Utilizadas

### Frontend
- React 19
- React Router DOM v7
- Axios para llamadas API
- Tailwind CSS para estilos
- Swiper para carruseles y deslizadores
- React Icons

### Backend
- Strapi v5 (CMS Headless)
- Base de datos SQLite
- API RESTful
- Gestión de permisos y roles de usuario
- Manejo de carga de archivos

## 📂 Estructura del Proyecto

```
ShopAmiduciel/
├── amiduciel-back/           # Backend en Strapi
│   ├── config/              # Archivos de configuración
│   ├── database/            # Migraciones y semillas de la base de datos
│   ├── public/              # Archivos de acceso público
│   └── src/                 # Código fuente
│       ├── api/             # Puntos finales de la API
│       │   ├── category/    # API de Categorías
│       │   ├── product/     # API de Productos
│       │   └── review/      # API de Reseñas
│       └── admin/           # Panel de administración
│
└── amiduciel-front/        # Frontend en React
    ├── public/             # Archivos estáticos
    └── src/
        ├── assets/         # Imágenes y fuentes
        ├── components/      # Componentes reutilizables
        ├── contexts/        # Contextos de React
        ├── hooks/           # Hooks personalizados
        ├── pages/           # Componentes de páginas
        └── services/        # Servicios de API
```

## 🚀 Comenzando

### Requisitos Previos

- Node.js (versión 18 o superior)
- npm (versión 6 o superior) o Yarn
- Git

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/JuanchiFranco/Shop-Amiduciel.git
   cd Shop-Amiduciel
   ```

2. **Configuración del Backend**
   ```bash
   cd amiduciel-back
   npm install
   npm run develop
   ```
   El panel de administración de Strapi estará disponible en `http://localhost:1337/admin`

3. **Configuración del Frontend**
   ```bash
   cd ../amiduciel-front
   npm install
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`

## 🌟 Características en Detalle

### Gestión de Productos
- Navegación por categorías
- Detalles de productos con imágenes y descripciones
- Funcionalidad de búsqueda
- Ordenamiento y filtrado de productos

### Experiencia de Usuario
- Registro y autenticación de usuarios
- Reseñas y valoraciones de productos

### Panel de Administración
- Gestión de productos, categorías y reseñas
- Administración de usuarios
- Procesamiento de pedidos
- Gestión de contenidos

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Cómo Contribuir

1. Haz un fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/CaracteristicaIncreible`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir una característica increíble'`)
4. Sube tus cambios a la rama (`git push origin feature/CaracteristicaIncreible`)
5. Abre una solicitud de extracción (Pull Request)

## 📧 Contacto

Para consultas, por favor contáctanos en [francovargasjuandario@gmail.com](mailto:francovargasjuandario@gmail.com)

---

Hecho con ❤️ por Juan Franco
