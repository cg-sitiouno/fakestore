# Fakestore Learning App

Este repositorio está pensado como una app React realista para consumir la FakeStore API y, al mismo tiempo, como un espacio de estudio para aprender React con buenas prácticas.

## Objetivo
- Mostrar una arquitectura modular y mantenible.
- Implementar un CRUD completo con una base de código clara.
- Servir como referencia útil para otros agentes de IA y para futuros desarrolladores.

## Principios del proyecto
1. Modularidad: cada funcionalidad vive en su propia capa.
2. Reutilización: los componentes básicos se reutilizan en varias vistas.
3. Documentación obligatoria: cada componente y cada módulo debe explicarse de forma clara.
4. Escalabilidad: la arquitectura debe permitir crecer sin reescribir la base.
5. Experiencia de estudio: el código debe ser legible, bien nominado y fácil de seguir.

## Stack previsto
- React + TypeScript
- Vite
- React Router
- Context / Providers para autenticación y tema
- Hooks personalizados para lógica reutilizable
- Tailwind o CSS modular (según se decida en la implementación)

## Estructura propuesta
src/
  app/              # rutas, providers, layouts, bootstrap
  components/       # componentes UI reutilizables
  features/         # módulos funcionales (auth, products, profile)
  hooks/            # hooks personalizados
  services/         # consumo de API, adaptadores y helpers
  types/            # definiciones de tipos compartidos
  utils/            # funciones auxiliares y validaciones
  styles/           # temas, tokens, variables, utilidades
  docs/             # documentación de desarrollo y arquitectura

## Reglas de documentación
- Cada componente debe incluir un bloque de documentación inicial.
- Cada feature debe explicar su responsabilidad, dependencias y flujo principal.
- Si se introduce un nuevo hook o provider, debe documentarse en la carpeta correspondiente.
- Las decisiones de arquitectura deben reflejarse en este README y en docs/ARCHITECTURE.md.

## Cómo continuar el proyecto
1. Leer primero README.md.
2. Revisar docs/ARCHITECTURE.md.
3. Consultar docs/COMPONENT_GUIDE.md antes de crear nuevos componentes.
4. Mantener la documentación sincronizada con cualquier cambio estructural.

## Estado actual
Este es el punto de partida documental del proyecto. La implementación funcional se añadirá sobre esta base.
