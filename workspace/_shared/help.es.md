# Bienvenido a Mr. Mak Workspace

Trabaja con tus agentes en Chats. Lee, compara y conserva sus resultados en Workspace.
Las carpetas del proyecto conectan ambos. Se puede usar el Workspace sin leer
código fuente ni mover cada conversación a la app de un solo agente.

## Cuentas y claves de API

Los chats de Claude Code y Codex usan la CLI real instalada con su sesión existente.
Una suscripción elegible de Claude Pro/Max o ChatGPT se puede usar sin agregar una
clave de API a Mr. Mak. Se aplican los límites normales del plan. Solo la conexión de voz opcional
requiere una clave de API de OpenAI; los servicios de generación opcionales usan sus propias cuentas.

OpenCode está disponible en **+ > OpenCode** después de instalarlo. Configura sus modelos
y proveedores en OpenCode; se aplican sus reglas de autenticación y facturación. El Historial
y las pestañas fijadas conservan su ID de conversación nativo. Mantén una conversación por pestaña.
Las conexiones de OpenCode se gestionan en sus propios controles MCP, aparte del
inspector MCP del Workspace.

## Empezar con una tarea

1. En Chats, pulsa **+**, elige el agente y su carpeta de trabajo, y ponle a la
   conversación un nombre claro en inglés.
2. Describe el resultado que quieres. Suelta archivos o carpetas de referencia en el chat
   cuando ayuden: "Compara estos conceptos y pon las conclusiones en una tarjeta del Workspace."
3. Deja trabajar al agente. Un logo brillante indica actividad; un marcador de finalización sin leer
   ayuda a encontrar un resultado que aún no revisaste.
4. Abre la tarjeta del Workspace, compara sus pestañas e imágenes y luego devuelve tu decisión
   al chat: "Usa la versión B. Mantén su forma y cambia solo el material."
5. Guarda las revisiones relacionadas como pestañas en la misma tarjeta. Archiva la tarjeta cuando ya
   no la necesites en la lista activa. Archivar una tarjeta conserva sus archivos.

## Dos ventanas, un proyecto

**Chats** contiene sesiones de terminal reales de los agentes CLI elegidos. **Workspace**
contiene las tarjetas, informes, vistas previas y archivos que producen. Cualquiera de las dos ventanas
se puede minimizar por separado mientras sigues en un navegador, Blender u otra app.

Arrastra las pestañas de chat para reordenarlas. Las pestañas fijadas quedan delante de las comunes y se
pueden reordenar entre sí. Agrupa pestañas por proyecto: elige un grupo en Nuevo chat,
o haz clic derecho en una pestaña para agregarla a un grupo existente o crear uno nuevo. Las pestañas
agrupadas quedan juntas detrás de una etiqueta de encabezado; haz clic en la etiqueta para contraer o expandir el
grupo, arrástrala para mover el grupo completo, haz clic derecho para renombrar o eliminar el
grupo o elegir su color, y suelta una pestaña sobre una etiqueta para moverla allí. Los filtros de grupo
del Historial encuentran un grupo antiguo y lo eliminan; los chats se conservan. El menú contextual de una pestaña también incluye renombrar, fijar, color de pestaña y cerrar. Usa el Historial para encontrar y fijar
las conversaciones a las que quieras volver. Cerrar una pestaña y eliminar los archivos de un proyecto son acciones
separadas. La recuperación de conversaciones también depende del historial nativo de la CLI elegida.

## Archivos y vistas previas

**Archivos** muestra las carpetas reales del proyecto. Carpetas principales es una vista enfocada;
Todos los archivos muestra el árbol más amplio. Pasa el cursor sobre una carpeta para ver su acceso al Explorador
(el Finder en macOS, tu gestor de archivos en Linux).
Selecciona un archivo para previsualizarlo. Las imágenes se pueden ampliar y descargar, y el Markdown
se abre con los modos **Vista previa** y **Editar**. Guarda solo cuando quieras cambiar el archivo.

| Carpeta | Qué va aquí |
| --- | --- |
| `inbox/` | Referencias, capturas del portapapeles y material entrante |
| `projects/` | Contexto de proyectos en curso y especificaciones de trabajo |
| `workspace/` | Tarjetas, informes, vistas previas y entregables de tareas |
| `knowledge/` | Lecciones que deben guiar el trabajo futuro |
| `processes/` | Flujos de trabajo repetibles y listas de verificación |
| `.claude/skills/`, `.agents/skills/` | Skills locales del proyecto para los agentes |

Soltar archivos o carpetas en Chats inserta sus rutas. Pegar una imagen del
portapapeles la guarda en `inbox/` e inserta esa ruta. Esto le da al agente una entrada;
no la publica ni la sube automáticamente a ningún servicio.

Dentro de Archivos, arrastrar un archivo a otra carpeta del proyecto lo mueve; soltarlo
de nuevo en el mismo lugar no hace nada. Supr (⌘⌫ en macOS) mueve el elemento seleccionado
a la Papelera de reciclaje de Windows (la Papelera en macOS y Linux). Usa el Explorador, el Finder
o tu gestor de archivos para mover carpetas y otras operaciones completas del sistema de archivos.

## Skills y MCP: ¿cuál es la diferencia?

Una **skill** explica cómo hacer una tarea recurrente: decisiones, prompts, comprobaciones y
a veces scripts auxiliares. **MCP** conecta a un agente con una herramienta o servicio. Por
ejemplo, el MCP de fal.ai puede ejecutar un modelo; la skill de fal.ai explica cómo descubrir modelos,
las entradas de referencia, la recuperación de trabajos, la revisión y la entrega.

Abre **Skills** para leer las skills de Claude y de Codex, el conocimiento y los
procesos del proyecto. Son archivos reales. Haz que los agentes relacionados apunten a una única
implementación mantenida en lugar de editar dos copias independientes.

Abre **MCP** para ver los orígenes de las conexiones y comprobar su disponibilidad. Una entrada activada
significa que está configurada. Una comprobación de conexión exitosa significa que el inspector pudo
alcanzarla en ese momento; el agente correspondiente igual necesita su propia conexión activa
y sesión iniciada en la cuenta. Algunas herramientas también requieren que una aplicación como Blender esté en ejecución.

Al recibir un paquete de skills, lee su guía de primeros pasos, copia los módulos completos
elegidos a tu proyecto e instala solo sus dependencias necesarias.
Usa tus propias cuentas y claves de proveedores. Una skill no incluye la suscripción,
la terminal en ejecución, el saldo de API ni la aplicación con sesión iniciada de otra persona.

## Hablar con Mr. Mak

Pulsa el botón de la nariz para iniciar o detener una conversación por voz. Pide acciones rápidas
como abrir un chat, encontrar una tarjeta, revisar el trabajo reciente o cambiar el estado
de una tarjeta. Para una tarea más grande, pide a Mr. Mak que cree una conversación con un agente y siga
su resultado. Puedes seguir trabajando directamente en cualquier terminal.

La voz usa la conexión de API configurada. Los agentes de terminal usan su propia CLI instalada
y su autenticación; los servicios de generación de proveedores usan sus propias cuentas.
Las elecciones actuales se ven en Ajustes y en la configuración del agente o del proveedor.

## Controles útiles

| Control | Comportamiento |
| --- | --- |
| Ctrl+C en un chat de agente (Windows, Linux) | Copia el texto seleccionado de la terminal; no interrumpe al agente |
| Ctrl+Shift+C (Windows, Linux) | Copia el texto seleccionado de la terminal |
| Ctrl+C en un chat de PowerShell o de shell de Linux | Interrupción normal de la shell |
| ⌘C en cualquier chat (macOS) | Copia el texto seleccionado de la terminal |
| Ctrl+C en cualquier chat (macOS) | Se envía a la CLI, como en Terminal.app: interrumpe al agente o a la shell |
| Ctrl+V en un chat (⌘V en macOS) | Pega texto o una captura del portapapeles |
| Ctrl+S al editar Markdown (⌘S o Ctrl+S en macOS) | Guarda el documento |
| Escape en una vista previa de imagen | Cierra la imagen ampliada |
| Recuperación opcional con la tecla Win (Windows) | Trae de vuelta las ventanas abiertas de Mr. Mak; se configura en Ajustes. macOS tiene su propio atajo de recuperación en Ajustes > Atajo |
| Ctrl+Esc (Windows) | Abre el menú Inicio de Windows |

Ajustes también incluye el tamaño y la apariencia del texto de la terminal, el agente por defecto,
los permisos por defecto de los chats nuevos y las opciones de voz. En macOS, Option escribe los
caracteres de tu distribución de teclado en los chats; Ajustes > Chats > Use Option as Meta
key la convierte en una tecla Meta. El idioma de la interfaz se cambia en Ajustes > Apariencia > Idioma.
Un ajuste de permisos de la CLI afecta lo que ese agente puede hacer en tu equipo; elígelo
con cuidado según tu forma de trabajar.

## Mantener el Workspace comprensible

- Usa títulos de tarjetas y nombres de chats claros en inglés.
- Mantén la información del Workspace en inglés por defecto. Otro idioma se usa
  solo cuando se pide explícitamente para ese resultado concreto.
- Pon las revisiones de una misma tarea en una sola tarjeta, con nombres de pestaña legibles.
- Haz que las imágenes se puedan abrir y descargar. Guarda las fuentes editables junto a los resultados.
- Registra qué se comprobó y qué sigue pendiente de decisión. No marques una
  generación técnicamente completada como aprobada visualmente sin revisarla.
- Archiva el trabajo terminado en lugar de mezclarlo con la lista de tareas actual.

## Llevar el flujo de trabajo a otra computadora

El repositorio del proyecto contiene sus tarjetas, skills, conocimiento y flujos de trabajo.
La aplicación de escritorio, los agentes CLI, las herramientas creativas y las sesiones de cuentas
se instalan o configuran en esa computadora. Lee la guía de instalación del paquete;
copiar solo un repositorio no recrea todas las aplicaciones externas.

Comparte un paquete de skills limpio o una plantilla preparada a propósito, no una copia del
estado de tu cuenta de trabajo. Deja fuera de un traspaso `.env`, las credenciales, las conversaciones privadas, los recibos
crudos de trabajos y los archivos de clientes no relacionados. El paquete de skills incluido
contiene ejemplos e instrucciones genéricos; cada destinatario aporta sus propias entradas.
