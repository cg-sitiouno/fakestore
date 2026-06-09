# Fakestore Learning App

Aplicación educativa construida con React, TypeScript y Vite para estudiar el desarrollo frontend con datos reales de FakeStore API.

## Propósito del proyecto

Esta app sirve como recurso de aprendizaje para practicar:

- Arquitectura modular en React.
- Rutas públicas y privadas.
- Context API para autenticación, tema e idioma.
- Hooks personalizados para cargar y gestionar productos.
- Integración con una API externa.
- Flujo básico de carrito y checkout.
- Diseño de interfaces con una base de componentes reutilizable.

El objetivo no es solo mostrar una tienda, sino comprender cómo organizar una aplicación React de forma clara, mantenible y didáctica.

## Qué incluye

- Catálogo de productos desde FakeStore API.
- Página de detalle de cada producto.
- CRUD de productos en el panel privado.
- Login simulado para explorar un flujo protegido.
- Selector de tema y lenguaje.
- Carrito y checkout como ejemplo de flujo de compra.

## Guía de uso como recurso educativo

### 1. Iniciar el proyecto

```bash
npm install
npm run dev
```

La app quedará disponible en el puerto de Vite (por defecto http://localhost:5173).

### 2. Explorar la arquitectura

Revisa los módulos principales:

- src/components: componentes reutilizables y vistas específicas.
- src/hooks: lógica de estado y efectos reutilizables.
- src/providers: contexto para auth, tema, idioma y carrito.
- src/pages: páginas principales de la aplicación.
- src/services: integración con FakeStore API.

### 3. Practicar con los flujos

- Navega por el catálogo y abre un producto para ver cómo se consume la API.
- Entra al panel privado para observar el CRUD.
- Usa el carrito y el checkout para entender cómo se pasa estado entre vistas.
- Cambia tema e idioma para ver cómo interactúan los providers.

### 4. Extender el proyecto

Puedes usar esta base como punto de partida para:

- añadir filtros y búsqueda,
- implementar persistencia más avanzada,
- mejorar la validación del formulario,
- refactorizar la UI con nuevas librerías o patrones.

## Convenciones de aprendizaje

- Mantén la lógica separada por responsabilidades.
- Documenta componentes y flujos importantes.
- Reutiliza hooks y providers en lugar de duplicar lógica.
- Prioriza claridad sobre complejidad.

## Ruta de aprendizaje recomendada

1. Comprende la estructura base: rutas, providers y páginas principales.
2. Analiza cómo se carga la información desde FakeStore API.
3. Revisa el flujo de carrito y checkout para entender el paso de estado entre vistas.
4. Experimenta con el CRUD del panel privado para practicar formularios y actualización de lista.
5. Refactoriza o mejora un componente para reforzar buenas prácticas de React.

## Comandos útiles

```bash
npm run build
npm run lint
```