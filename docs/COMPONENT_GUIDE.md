# Guía para componentes

Esta guía define cómo deben construirse y documentarse los componentes del proyecto.

## Objetivo
Cada componente debe ser:
- reutilizable
- fácil de probar
- legible para otro desarrollador o agente de IA
- independiente de lógica de negocio compleja

## Requisitos mínimos para cada componente

### 1. Documentación inicial
Cada archivo de componente debe empezar con un bloque de documentación que responda:
- qué hace el componente
- qué props recibe
- qué dependencias tiene
- qué casos de uso cubre

Ejemplo de plantilla:

/**
 * Componente: ProductCard
 * Descripción: muestra una tarjeta de producto con imagen, precio y botón de acción.
 * Props:
 *  - product: objeto de producto
 *  - onSelect?: callback al pulsar la tarjeta
 * Notas:
 *  - debe ser reutilizable en listado y en dashboard
 *  - mantener accesibilidad y diseño responsive
 */

### 2. Tipado explícito
- Usar interfaces o tipos para props.
- Evitar cualquier prop sin definir claramente su estructura.

### 3. Responsabilidad única
Un componente debe concentrarse en una sola responsabilidad visual o de interacción.
Si hace demasiado, conviene dividirlo.

### 4. Diseño responsive
Todos los componentes visibles deben pensarse para funcionar en móvil, tablet y escritorio.

### 5. Accesibilidad
- usar etiquetas y roles apropiados
- mantener contraste suficiente
- facilitar navegación por teclado
- definir estados de carga y error de forma clara

## Convenciones de nombres
- Componentes: PascalCase
- Hooks: useNombre
- Servicios: nombre.service.ts
- Tipos: types.ts o feature.types.ts

## Cómo documentar un componente nuevo
Al crear un componente, añadir al menos:
1. una descripción breve,
2. la lista de props,
3. la lógica principal,
4. el contexto de uso,
5. una nota sobre accesibilidad y responsividad.

## Recomendación de mantenimiento
Si un componente cambia de propósito o deja de ser reusable, actualizar su documentación en el mismo cambio.
