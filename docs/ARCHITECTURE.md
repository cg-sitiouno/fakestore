# Arquitectura del proyecto

## Visión general
La aplicación debe organizarse en capas claras para que cualquier agente de IA pueda entenderla rápidamente y continuar sin necesidad de inferir decisiones arbitrarias.

## Capas recomendadas

### 1. App shell
Responsable del arranque de la aplicación:
- rutas principales
- providers globales
- layout base
- configuración de tema e idioma

### 2. Features
Cada funcionalidad principal vive en su propio módulo:
- auth
- products
- cart
- profile
- dashboard

Cada feature debe tener:
- componentes propios
- hooks propios si son reutilizables
- servicios o adaptadores de API
- tipos específicos

### 3. Components
Los componentes deben ser pequeños, reutilizables y sin lógica de negocio compleja.

Ejemplos:
- Button
- Input
- Card
- Modal
- EmptyState
- Loader
- ThemeSwitcher

### 4. Hooks
Los hooks personalizados encapsulan lógica compartida:
- uso de API
- persistencia local
- parsing de preferencias
- validación de formularios
- control de sesión

### 5. Services
Todos los accesos a datos deben pasar por servicios centralizados.
Esto evita mezclar lógica de fetch con componentes visuales.

## Flujo de datos recomendado
1. UI dispara una acción o evento.
2. El hook o servicio obtiene o actualiza datos.
3. El provider o estado global mantiene la coherencia.
4. Los componentes renderizan el estado resultante.

## Reglas de diseño
- Usar TypeScript para todos los tipos públicos.
- Evitar lógica de negocio dentro de componentes visuales simples.
- Mantener los props tipados y explícitos.
- Separar la vista de la lógica de datos.
- Usar nombres descriptivos y consistentes.

## Documentación obligatoria
Cada nueva pieza del proyecto debe estar documentada en uno de estos niveles:
- README.md: visión general del proyecto
- docs/ARCHITECTURE.md: decisiones estructurales
- docs/COMPONENT_GUIDE.md: convenciones para componentes
- comentarios dentro del archivo: finalidad, props, dependencias

## Recomendación de implementación inicial
1. Crear la base de rutas públicas y privadas.
2. Añadir autenticación con provider.
3. Implementar listado de productos y detalle.
4. Añadir tema e idioma.
5. Introducir CRUD con formularios reutilizables.
6. Refactorizar hacia módulos por features.

## Criterio de aceptación para la arquitectura
La arquitectura será considerada correcta cuando:
- un agente nuevo pueda entenderla sin leer todo el proyecto,
- las dependencias fluyan de forma clara,
- los componentes sean fáciles de reutilizar,
- la lógica de negocio no esté dispersa en la interfaz.
