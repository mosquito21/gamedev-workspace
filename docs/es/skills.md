[English](../skills.md) · **Español**

# Skills del proyecto

En este proyecto viven veinte skills. `.agents/skills` es la fuente mantenida
para Codex; `.claude/skills` contiene copias completas e idénticas para Claude Code,
incluidos scripts y referencias. Ambas secciones de Skills abren las instrucciones completas.
Son archivos locales del proyecto, no instalaciones globales.

Claude lee las instrucciones de su propio `SKILL.md` cuando se usa una skill; un
enlace Markdown es solo una indicación de leer otro archivo, no una herencia automática.
La plantilla incluye carpetas completas para que un clon normal en Windows no necesite symlinks.
Consulta el [formato de skills de Claude](https://code.claude.com/docs/en/skills).

Para cambios compartidos, edita `.agents/skills` y luego ejecuta `npm run skills:sync`.
Si editaste directamente una copia de Claude, primero lleva ese cambio a la
fuente mantenida. `npm run test:template` comprueba que las dos copias coincidan.

| Skill | Para qué sirve |
| --- | --- |
| [3d-production-routing](../../.agents/skills/3d-production-routing/SKILL.md) | Elegir un flujo práctico para conceptos 3D, mallas generadas, mapas de materiales, reconstrucción procedural con Three.js y animación de juegos. |
| [blender-game-animation](../../.agents/skills/blender-game-animation/SKILL.md) | Riggear y animar personajes proporcionados en Blender, revisar el movimiento a partir de referencias y entregar fuentes editables más una exportación para el juego verificada. |
| [character-sheet-pipeline](../../.agents/skills/character-sheet-pipeline/SKILL.md) | Preparar hojas de personaje estrictamente frontales, partes aisladas y referencias multivista opcionales para modelado 3D a partir de una imagen aprobada. |
| [fal-ai-generation](../../.agents/skills/fal-ai-generation/SKILL.md) | Generar y editar imágenes, crear video, audio, assets 3D o mapas de materiales mediante el MCP de fal.ai o el cliente de cola en Python. Sirve para descubrir modelos de fal, subir referencias, generar, recuperar y entregar en local. |
| [feature-handoff](../../.agents/skills/feature-handoff/SKILL.md) | Preparar un traspaso preciso para un agente o desarrollador que implementa una función, continúa una tarea o revisa un cambio terminado. |
| [game-animation-integration](../../.agents/skills/game-animation-integration/SKILL.md) | Llevar animaciones aprobadas a un juego, incluido el mapeo de clips, salidas de giro, fase de locomoción y sincronización de eventos de jugabilidad. |
| [game-audio-workflow](../../.agents/skills/game-audio-workflow/SKILL.md) | Escuchar, seleccionar e integrar sonidos con IDs de asset estables, eventos de contacto, reglas de mezcla y pruebas de escucha nativas. |
| [game-level-design](../../.agents/skills/game-level-design/SKILL.md) | Construir borradores de niveles revisables, validar escala y recorrido, y aplicar los cambios aceptados a la escena real. |
| [game-ui-workflow](../../.agents/skills/game-ui-workflow/SKILL.md) | Llevar un HUD o menú de un estudio visual a datos reales del juego, comportamiento de entrada y revisión nativa. |
| [game-vfx-workflow](../../.agents/skills/game-vfx-workflow/SKILL.md) | Desarrollar capas de efectos, sincronización de eventos, anclaje, limpieza y comparaciones visuales dentro del juego. |
| [gameplay-visual-review](../../.agents/skills/gameplay-visual-review/SKILL.md) | Verificar cambios en el juego con capturas nativas controladas y separar implementación, revisión visual y aceptación. |
| [higgsfield-workflow](../../.agents/skills/higgsfield-workflow/SKILL.md) | Usar la CLI oficial de Higgsfield o su integración con Blender para descubrir modelos, generar los assets pedidos y retomar trabajos registrados. |
| [image-reference-workflow](../../.agents/skills/image-reference-workflow/SKILL.md) | Explorar conceptos de imagen y hacer ediciones fieles de referencias aceptadas para producción 3D o creativa, con elecciones de modelo explícitas y revisión visual. |
| [img2threejs](../../.agents/skills/img2threejs/SKILL.md) | Convertir una imagen de referencia de un objeto o personaje en un modelo procedural de Three.js construido en código, con controles de calidad y listo para animar. Sirve para reconstrucción de imagen a 3D, reconstrucciones de objetos con detalle preciso, personajes humanos estilizados o de máximo parecido, especificaciones de esculpido y generación de código por etapas. |
| [materials-to-game](../../.agents/skills/materials-to-game/SKILL.md) | Crear o aplicar mapas de materiales y hornear una malla high-poly texturizada sobre una malla de juego, con comprobaciones de canales, UV y exportación. |
| [motion-reference-workflow](../../.agents/skills/motion-reference-workflow/SKILL.md) | Preparar y seleccionar referencias de movimiento de personajes, o transferir un movimiento aprobado a una referencia humana para un flujo de mocap posterior. |
| [plan](../../.agents/skills/plan/SKILL.md) | Convertir una solicitud amplia de proyecto en un plan pequeño y accionable con entregables concretos, dependencias y criterios de aceptación. |
| [video-watch](../../.agents/skills/video-watch/SKILL.md) | Revisar un video local o de acceso público mediante fotogramas de escenas muestreados, marcas de tiempo y un informe visual, sobre todo para analizar referencias de movimiento y 3D. |
| [voice-dictation-setup](../../.agents/skills/voice-dictation-setup/SKILL.md) | Ayudar a configurar el dictado local opcional con Whisper en terminales y otras apps, con comprobaciones de idioma, atajo de teclado y CPU o GPU. |
| [workspace-authoring](../../.agents/skills/workspace-authoring/SKILL.md) | Crear o mantener tarjetas del Workspace, pestañas de informes y entregables Markdown con estilo consistente, vistas previas multimedia funcionales y una organización clara del proyecto. |

## Producción de juegos en 0.4.14

Los seis nuevos flujos de juego conectan el trabajo conceptual con la implementación. Describen
cómo revisar un proyecto existente, conservar el trabajo aceptado, entregar marcadores de eventos
exactos y revisar el resultado en el motor. No contienen assets privados de juegos,
nombres de personajes, valores de balance fijos ni preferencias personales de trabajo.
Los ejemplos son ilustrativos; las reglas del proyecto receptor siguen siendo las que valen.

La animación en Blender ahora cubre varios dueños de Action, slots, comprobaciones de la base de bind
y exportaciones de clips portables. Las referencias de movimiento mantienen un registro estable de tomas y
separan la transferencia de apariencia del mocap. Los traspasos separan una propuesta elegida,
la implementación, la verificación del agente y la aceptación del usuario. La skill de enrutamiento ayuda
a un agente a elegir entre estos flujos.

Son instrucciones para agentes, no integraciones de editor incluidas. Usa tu
conexión existente con Unity o Blender y comprueba sus operaciones disponibles.
La generación es opcional. Una skill no instala un motor, no conecta un servidor MCP
ni realiza trabajo pago por sí misma.

## Usar las skills en otro proyecto

La versión incluye un archivo separado **Mr-Mak-Skills-0.4.14.zip**. Extráelo en una
carpeta temporal y luego pide a tu agente que lea `SKILLS-README.md` y copie solo
los módulos elegidos y sus dependencias a tu proyecto. Conserva las carpetas completas de las skills,
incluidos scripts, referencias y licencias. El ZIP incluye copias completas para
Codex y Claude; no se requiere instalación global ni symlinks.

Los ocho módulos creativos originales y los seis nuevos flujos de juego se pueden copiar
con sus propios recursos locales. Conserva cualquier skill hermana referenciada cuando
decidas usarla. Conserva la carpeta completa de img2threejs y sus licencias.

La autoría del Workspace, la inspección de video y la configuración del dictado también referencian
procesos, conocimiento y scripts de este repositorio. Copia esos archivos referenciados al
extraer un módulo; el ZIP incluye estos archivos de soporte y los assets compartidos de
informes. Combínalos con un proyecto existente en lugar de reemplazar sus instrucciones,
informes o estilos compartidos. Las skills de planificación y traspaso usan las convenciones
del proyecto receptor. El paquete independiente no contiene tarjetas del Workspace ni la aplicación.

Una skill no autentica a un proveedor ni instala una herramienta. Sigue sus referencias
de configuración y aporta tu propia cuenta. Las credenciales y los recibos crudos de trabajos pagos
deben quedar fuera de un paquete de skills compartido.

Para una instalación existente de Mr. Mak, consulta la
[guía de actualización](updating.md). Instalar solo la actualización
de escritorio no agrega las nuevas skills a tu repositorio.
