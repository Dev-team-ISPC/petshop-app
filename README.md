# 🐾 Programador web - Sistema de Gestión - PetShop App
Proyecto grupal para el módulo "programador web" de la tecnicatura en desarrollo web y aplicaciones digitales del ISPC . Está compuesto por tres espacios curriculares: Programación Web II, Programación II y Desarrollo de Software.

##  Equipo de Desarrollo
* LAUTARO NAHUEL ANCILLOTTI   | http://github.com/lnancillotti
* CLAUDIO NICOLAS AUDICIO  | http://github.com/NicolasAudicio
* ELIZABETH NORMA J. CHIALVA  | http://github.com/ElizabethChialva-22
* LAURA MOLINA  | http://github.com/lauritam7
* ADRIAN NICOLAS TELLO  | http://github.com/ANIKO4
* MATIAS IBARRA  | http://github.com/MatiasRaulIbarra
* FRANCISCO JUNCO  | http://github.com/FranJL075

##  Descripción del proyecto
Muchos dueños de mascotas enfrentan dificultades para organizar las vacunas, turnos y compras de sus animales. Por otro lado, las veterinarias pequeñas suelen llevar sus registros en papel, lo que genera pérdida de datos. Esta aplicación busca centralizar la gestión de mascotas y productos en una sola plataforma web.

##  Tecnologías Utilizadas
* **Frontend:** Angular 21 - Boostrap 5
* **Backend:** Django 6 - Django REST Framework
* **Base de Datos:** MySQL 
* **Gestión de Entorno:** Python-dotenv para seguridad de credenciales.

## Requerimientos 

### Requerimientos Funcionales
1. **Registro de Mascotas:** El sistema debe permitir al usuario registrar una mascota con nombre, especie, raza, edad y peso, y mostrar un mensaje de confirmación tras el registro exitoso.
2. **Catálogo de Productos:** Permitir al usuario gestionar la selección de artículos en un carrito de compras y calcular el monto total de la operación según el stock disponible. 
3. **Registro de Usuarios:** El sistema debe permitir al usuario registrar una cuenta con nombre, email único y contraseña de al menos 8 caracteres, rechazando el registro si el email ya existe.
4. **Contacto:** El sistema debe permitir al usuario enviar un mensaje de contacto con nombre, email válido y texto de al menos 10 caracteres, confirmando el envío mediante un mensaje visible en pantalla.
5. **Quiénes Somos:** El sistema deberá permitir al usuario consultar la información institucional de la Pet Shop mediante la sección “Quiénes Somos” disponible en la barra de navegación.
6. **Acceso por Roles:** El sistema debe mostrar al usuario autenticado un panel personalizado según su rol (administrador, cliente o veterinario), con opciones y datos distintos para cada perfil.

### Requerimientos No Funcionales
1. **Seguridad:** El sistema debe garantizar que las credenciales de la base de datos no sean accesibles en el repositorio público, almacenándolas en variables de entorno definidas en un archivo `.env` excluido del control de versiones, de modo que cualquier intento de acceso al repositorio no exponga datos sensibles.
2. **Arquitectura:** El sistema debe responder a cualquier solicitud de la API en menos de 500 milisegundos bajo condiciones normales de uso (un usuario concurrente en entorno local), medido desde el envío de la petición hasta la recepción de la respuesta.
3. **Responsive** El sistema debe adaptarse correctamente a pantallas de ancho mínimo 320px y máximo 1920px, verificable mediante pruebas, sin pérdida de contenido ni superposición de elementos.

## 🛠️ Instalación y Configuración

### Backend
1. Navegar a la carpeta `backend`.
2. Instalar dependencias: `pip install -r requirements.txt` (o manualmente las librerías mencionadas).
3. Crear un archivo `.env` basado en el `.env_modelo`.
4. Ejecutar migraciones: `python manage.py migrate`.

### Frontend
1. Navegar a la carpeta `frontend`.
2. Instalar dependencias: `npm install`.
3. Ejecutar servidor: `ng serve -o`.

🤝 Metodología de Trabajo

El desarrollo del proyecto se realizó de forma colaborativa, utilizando control de versiones con Git y GitHub, distribución de tareas por módulos y reuniones periódicas para seguimiento del avance, integración y pruebas generales del sistema.

✅ Estado del Proyecto

Actualmente la aplicación se encuentra en fase funcional inicial, cumpliendo con los requerimientos planteados en la primera etapa, con posibilidad de continuar escalando nuevas funcionalidades en futuras evidencias o versiones.
