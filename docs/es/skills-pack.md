[English](../skills-pack.md) · **Español**

# Skills de agentes de Mr. Mak

Este paquete contiene 20 flujos de trabajo locales de proyecto para Codex CLI y Claude Code.
Se pueden usar en un proyecto de juego o creativo sin instalar la app de escritorio
de Mr. Mak. Primero inicia sesión en al menos una de esas CLI.

Lee `docs/skills.md` para ver el índice completo. Los seis nuevos flujos de juego cubren
VFX, UI, integración de animaciones, niveles, audio y revisión visual nativa. Las skills
existentes cubren planificación, traspasos, producción de imágenes/3D, animación en Blender, inspección
de video, informes del Workspace y configuración del dictado local.

## Agregar skills seleccionadas a un proyecto

1. Extrae el ZIP en una carpeta temporal. Deja los archivos del proyecto donde están.
2. Pide a tu agente que revise el índice y elija las skills útiles para este
   proyecto. Copia cada carpeta completa de `.agents/skills/` para Codex o de
   `.claude/skills/` para Claude. Usa ambas si usas los dos agentes.
3. Incorpora los archivos de soporte requeridos que se listan abajo. Conserva tus propias instrucciones,
   skills editadas y estilos de informes. No reemplaces `AGENTS.md`, `CLAUDE.md`,
   el contexto, la configuración MCP ni las tarjetas existentes del Workspace.
4. Inicia una nueva sesión de CLI en el proyecto si las skills recién agregadas no aparecen.
   Pide al agente que lea el `SKILL.md` elegido y revise tu proyecto real
   antes de hacer cambios.

Ejemplo de solicitud:

> Lee la skill game-vfx-workflow, revisa nuestros eventos de combate y la cámara
> del juego, y prepara una pequeña propuesta de impacto en el escudo. No cambies la jugabilidad.
> Muestra las capas elegidas, el anclaje, las reglas de cancelación y el plan de revisión nativa.

## Archivos de soporte

| Skill | Archivos o herramientas adicionales |
| --- | --- |
| Seis flujos de juego, animación en Blender, referencias de movimiento | Conserva las referencias propias de la skill. Aporta los assets fuente del proyecto y una conexión disponible al motor/editor para la implementación. |
| Flujos de imagen y generación | Conserva cualquier skill hermana de proveedor que se referencie. Configura tu propio proveedor opcional y lee sus capacidades actuales. |
| img2threejs | Copia su carpeta completa, incluidos código, recursos y licencia Apache-2.0. Las integraciones upstream opcionales son independientes. |
| workspace-authoring | `processes/workspace-authoring.md` y `workspace/_shared/{report.css,report.js,examples.css}`. Combínalos con tus propios estilos si hace falta. Un visor/app de informes es independiente. |
| video-watch | `knowledge/video-watch.md`, `scripts/video-watch/` y los assets compartidos de informes. Instala los requisitos opcionales de Python en un entorno virtual local. |
| voice-dictation-setup | `knowledge/voice-dictation.md`. La aplicación de dictado y su modelo son instalaciones separadas. |
| Production routing | Elige y copia las skills hermanas relevantes del índice; el nombre de una ruta no instala ese flujo. |

No se requiere generar nada para instalar el paquete. Las herramientas, cuentas, acceso a API,
Blender y Unity no están incluidos. Revisa los requisitos de dependencias antes de ejecutar
un helper. Para una primera prueba sin conexión, revisa un asset local proporcionado y prepara
un plan sin enviar un trabajo pago.

## Qué incluye

Copias completas de las skills para Codex y Claude, los archivos de soporte anteriores, avisos de licencia
y `manifest.json` con sumas SHA-256 de cada archivo del contenido. No hay
proyectos privados, assets originales de juegos, conversaciones, credenciales ni recibos de trabajos.
El paquete no cambia los ajustes globales de los agentes.

La aplicación y los proyectos de ejemplo están disponibles por separado en
[Mr. Mak Workspace](https://github.com/witnesstodark/mr-mak-workspace).
