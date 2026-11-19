# Memoria del Proyecto Entregable UT2

Este documento irá creciendo con las decisiones y explicaciones del proyecto
durante su desarrollo.

## 1. Estructura del proyecto

El proyecto Angular se ha creado con módulos tradicionales y rutas activadas.
Se ha organizado la aplicación en componentes reutilizables y componentes de
funcionalidades:

- `shared/components/navbar`: barra de navegación reutilizada en la aplicación.
- `shared/components/footer`: pie de página reutilizado en la aplicación.
- `features/home/pages/home-page`: página principal adaptada de la U1.

El proyecto también incluye una carpeta `documentacion` para guardar el
checklist, la memoria y las capturas.

## 2. Componentes adaptados de la U1

Del proyecto anterior se ha adaptado la estructura de la liga:

- La barra de navegación se ha convertido en `Navbar`.
- El pie de página se ha convertido en `Footer`.
- La presentación principal y las competiciones se han colocado en
  `HomePage`.

El diseño mantiene el color azul de la liga y los enlaces usados en la U1.
Las rutas todavía no llevan a todas las páginas hasta que se creen sus
componentes.

## 3. Diseño responsive

Bootstrap se ha instalado y cargado en `angular.json`. La aplicación compila
con sus estilos.

Las siguientes capturas corresponden al estado actual:

- `03-navbar-footer-inicio.png`: versión de escritorio.
- `17-responsive-movil.png`: versión móvil.
- `02-estructura-proyecto.png`: estructura de componentes creada.

## 4. Login y registro

Pendiente de completar.

Aquí se explicará el funcionamiento del inicio de sesión y el registro.

## 5. MongoDB y servicio

Pendiente de completar.

Aquí se explicará la configuración de MongoDB Cloud, la base de datos, las colecciones y el servicio.

## 6. Roles y páginas

Pendiente de completar.

Aquí se explicará la redirección y la funcionalidad de cada tipo de usuario.

## 7. Backend

Pendiente de completar.

Aquí se explicará `server.js` y la comunicación con Angular.

## 8. Capturas

Las capturas se guardarán en la carpeta `capturas`.
