# Mi Lista de Tareas

**Evaluación de Programación Front End – Semana 4**

**Institución:** Instituto Profesional IPG

## 1. Descripción del proyecto

Mi Lista de Tareas es una aplicación web desarrollada utilizando React y Vite, cuyo objetivo es permitir que los usuarios organicen sus actividades pendientes de manera sencilla e interactiva.

Este proyecto fue desarrollado como parte de la evaluación de Programación Front End, aplicando conocimientos relacionados con componentes, manejo de estados, eventos y personalización de interfaces.

## 2. Funcionalidades

La aplicación permite:

- Agregar nuevas tareas mediante un formulario.
- Visualizar las tareas ingresadas.
- Eliminar tareas que ya no sean necesarias.
- Mostrar un contador de tareas pendientes.
- Evitar el ingreso de tareas vacías.
- Mostrar un mensaje cuando no existen tareas pendientes.

## 3. Tecnologías utilizadas

- **HTML5:** estructura de la aplicación.
- **CSS3:** diseño y personalización visual.
- **JavaScript:** lógica de funcionamiento.
- **React:** creación de componentes e interfaces interactivas.
- **Vite:** configuración y ejecución del proyecto.

## 4. Componentes de React

La aplicación está organizada en tres componentes principales.

### Aplicación.jsx

Es el componente principal. Administra las tareas mediante el hook `useState` y contiene las funciones necesarias para agregar y eliminar elementos.

### FormularioTareas.jsx

Contiene el formulario donde el usuario escribe nuevas tareas. Recibe propiedades desde el componente principal para gestionar el texto ingresado y agregar tareas.

### ListaTareas.jsx

Se encarga de mostrar las tareas registradas, el contador de tareas pendientes y los botones que permiten eliminar cada elemento.

## 5. Funcionamiento

1. El usuario escribe una actividad en el campo de texto.
2. Presiona el botón «Agregar tarea».
3. React actualiza el estado de la aplicación.
4. La nueva tarea aparece en la lista.
5. El contador de tareas pendientes se actualiza automáticamente.
6. El usuario puede eliminar una tarea mediante el botón correspondiente.

Las tareas se almacenan temporalmente en el estado de React. Por esta razón, al actualizar la página, la lista vuelve a su estado inicial.

## 6. Diseño de la interfaz

Se implementó una interfaz sencilla, utilizando colores claros, botones diferenciados y una distribución organizada.

Además, se incorporó el logo institucional del Instituto Profesional IPG en la esquina superior izquierda de la aplicación, con el propósito de personalizar su presentación académica.

La interfaz incluye estilos adaptables a diferentes tamaños de pantalla.

## 7. Instalación y ejecución

Para ejecutar el proyecto es necesario tener Node.js instalado.

Primero, se deben instalar las dependencias desde la carpeta del proyecto:

`npm install`

Posteriormente, se inicia el servidor de desarrollo mediante:

`npm run dev`

Finalmente, se abre en el navegador la dirección local indicada por Vite, normalmente:

`http://localhost:5173/`

## 8. Conclusión

El desarrollo de esta aplicación permitió aplicar conocimientos fundamentales de React, especialmente la creación de componentes reutilizables, el uso de propiedades, la gestión de estados mediante `useState` y el manejo de eventos.

También permitió reforzar el uso de CSS para personalizar interfaces y comprender cómo se organiza un proyecto Front End utilizando Vite.

Este trabajo representa una experiencia práctica para continuar desarrollando aplicaciones web más completas en el futuro.