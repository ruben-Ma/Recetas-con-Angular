# Recetas con Angular

Este proyecto es una aplicación web de página única (SPA) desarrollada con Angular que permite gestionar un recetario de cocina sencillo. Los usuarios pueden ver una lista de recetas predefinidas, añadir nuevas recetas a través de un formulario y eliminar las existentes.

> **Nota:** La aplicación utiliza persistencia en memoria durante la sesión activa. Si se recarga la página completa (F5), los cambios se perderán y volverán a aparecer las recetas originales.

## Características

* **Listado de Recetas**: Visualización de todas las recetas disponibles en tarjetas con su imagen e ingredientes.
* **Añadir Receta**: Formulario dedicado para crear nuevas recetas indicando nombre, ingredientes (separados por comas) y URL de una imagen.
* **Eliminar Receta**: Posibilidad de borrar recetas individuales con un cuadro de confirmación de seguridad.
* **Navegación Fluida**: Uso de Angular Router para navegar entre el listado (`/recetas`) y el formulario (`/formulario`) sin recargar la página.
* **Diseño Responsivo**: Interfaz adaptada a diferentes dispositivos utilizando Bootstrap 5.

## Tecnologías Utilizadas

* **Angular** (v20.3.5)
* **TypeScript**
* **Bootstrap 5** (para estilos y rejilla responsive)
* **SCSS** (Sass para estilos personalizados)

## Estructura del Proyecto

Los componentes principales de la aplicación son:

* **`Recetas`** (`src/app/recetas`): Componente principal que muestra la rejilla de recetas. Gestiona el estado de las recetas en memoria usando una variable estática para mantener los cambios mientras se navega por la aplicación.
* **`Formulario`** (`src/app/formulario`): Vista encargada de la creación de nuevas recetas. Procesa la entrada de ingredientes separándolos por comas.
* **`Receta`** (`src/app/receta`): Componente de presentación que renderiza una tarjeta individual con la información de una receta.
* **`BtnEli`** (`src/app/btn-eli`): Botón reutilizable encargado de emitir la acción de eliminar, incluyendo una confirmación nativa del navegador antes de ejecutar la acción.
* **`Navbar`** y **`Footer`**: Componentes estructurales para la navegación y el pie de página.

## Instalación y Despliegue Local

Para ejecutar este proyecto en tu máquina local, necesitas tener instalado [Node.js](https://nodejs.org/) y [Angular CLI](https://github.com/angular/angular-cli).

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-de-tu-repositorio>
    cd recetas-con-angular
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    ng serve
    ```

4.  **Abrir la aplicación:**
    Navega a `http://localhost:4200/` en tu navegador web. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Autor

Desarrollado por Rubén Marañón.