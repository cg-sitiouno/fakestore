# Guía de handoff para agentes de IA

Este documento garantiza que cualquier agente pueda retomar el proyecto sin perder contexto.

## Qué leer primero
1. README.md
2. docs/ARCHITECTURE.md
3. docs/COMPONENT_GUIDE.md

## Qué hacer antes de modificar código
- Identificar si el cambio afecta a una feature, a un hook, a un servicio o a un componente visual.
- Revisar si existe documentación previa para esa zona.
- Mantener la arquitectura modular y no introducir lógica dispersa.

## Qué no hacer
- No crear componentes sin una finalidad clara.
- No mezclar fetch, estado visual y lógica de negocio en el mismo archivo.
- No alterar rutas o providers sin actualizar la documentación relacionada.

## Criterio de finalización
Un cambio está completo cuando:
- el código refleja la arquitectura descrita,
- la documentación correspondiente está actualizada,
- el componente o feature mantiene una responsabilidad clara,
- el siguiente agente puede seguir el hilo del proyecto sin preguntas innecesarias.
