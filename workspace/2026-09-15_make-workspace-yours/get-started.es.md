# Primeros pasos

Mr. Mak es un espacio de trabajo de escritorio local para trabajar con varios agentes. Sus archivos
son archivos de proyecto comunes, y sus chats son sesiones CLI comunes. Los mismos agentes
se pueden seguir usando fuera de la app.

**Requisito antes de configurar: Codex CLI, Claude Code CLI u OpenCode, instalado y
configurado con tu propia cuenta.** Usa al menos uno para guiar la configuración siguiente.
El coordinador de voz opcional requiere específicamente Codex; Kimi es otra
integración de terminal disponible.

## Elegir una carpeta

Crea un repositorio a partir de la plantilla de GitHub y clona tu copia. La carpeta
seleccionada debe contener `workspace/workspace.json`. Al principio, mantén juntos el código fuente de la aplicación y
el contenido de tu proyecto; así la configuración y los traspasos entre agentes son sencillos.
La plantilla no tiene proyectos, cuentas ni historial de conversaciones de un dueño anterior.

## Instalar la app de escritorio

En Windows x64, usa el instalador de GitHub Releases. Incluye el runtime de Node
y el servicio local, y se instala para el usuario actual de Windows. WebView2
se instala con su bootstrapper si hace falta. No se necesita una terminal de administrador
para el uso normal de la app.

Ejecuta **Start Mr. Mak.cmd** desde la carpeta clonada. La app recuerda el repositorio
seleccionado. Abre Workspace y Chats como ventanas separadas, con identidades separadas en la
barra de tareas. Cerrar un chat lo guarda en el Historial; restaurar la conversación
completa también depende de los archivos de sesión nativos de esa CLI.

En una Mac con Apple Silicon, descarga el `.dmg` de macOS desde GitHub Releases, o compila
la app desde el código fuente con Node.js 22.20+, Rust y las Xcode Command Line Tools:

```bash
./setup.sh check      # report prerequisites
./setup.sh desktop    # build Mr. Mak Workspace.app and a .dmg
```

Arrastra **Mr. Mak Workspace.app** a Aplicaciones y luego haz doble clic en
**Start Mr. Mak.command** en la carpeta clonada. La app tiene firma ad hoc pero
no está notarizada; una copia compilada por ti se abre sin aviso. Los atajos usan
⌘ en lugar de Ctrl, y ⌘C/⌘V copian y pegan en las terminales. Consulta las [notas de macOS](../../docs/es/macos.md).

## Conectar un agente

Instala al menos una de las CLI requeridas siguiendo sus instrucciones oficiales actuales para
tu sistema operativo:

- [Codex CLI](https://developers.openai.com/codex/cli)
- [Claude Code](https://code.claude.com/docs/en/setup)
- [OpenCode](https://opencode.ai/docs/)

[Kimi Code CLI](https://moonshotai.github.io/kimi-cli/en/) está disponible como
integración de terminal adicional después de la configuración base.

Completa el inicio de sesión de la CLI con tu propia cuenta. En Chats, pulsa **+**, elige
el proveedor y un título descriptivo en inglés. Empieza con una tarea como
`Dream Game Plan`. Elige el repositorio como carpeta de trabajo. El flujo normal de permisos
de la CLI está activado por defecto; omitirlo es una elección deliberada por chat.

Prueba: “Lee el ejemplo My Dream Game y conviértelo en un pequeño plan de proyecto para
mi juego. Pregúntame la idea de juego que falta antes de reemplazar el ejemplo.”

## Suscripciones, claves de API y OpenCode

Claude Code puede usar una sesión de Claude Pro o Max. Codex puede usar una sesión de
suscripción elegible de ChatGPT. No hace falta agregar una clave de API a Mr. Mak para esos chats:
inicia la CLI real instalada y mantiene su autenticación y límites normales.
Consulta [autenticación de Claude](https://code.claude.com/docs/en/authentication) y
[autenticación de Codex](https://developers.openai.com/codex/auth).

Para OpenCode, primero instálalo y configúralo con su propia configuración de proveedores. Comprueba
que `opencode` se ejecuta desde una terminal y luego elige **+ > OpenCode** en Mr. Mak.
El proveedor elegido determina la autenticación y la facturación. Una suscripción nativa de Claude Code
no da acceso automáticamente a través de clientes de terceros.

Los chats de OpenCode admiten Historial, pestañas fijadas, archivos y capturas desde el portapapeles.
La app observa los eventos de sesión nativos para mantener el ID de conversación correcto;
los datos nativos de OpenCode deben seguir disponibles para retomar. Mantén una conversación
por pestaña de Mr. Mak. Usa una pestaña nueva para una tarea nueva. OpenCode controla sus ajustes de modelo y
razonamiento. La aprobación automática está desactivada por defecto, y las reglas de denegación explícitas siguen
aplicándose cuando se activa.

OpenCode 1.x y 2.x usan APIs de plugins distintas. Mr. Mak selecciona el pequeño
observador de sesión correspondiente al iniciar, sin escribir configuración global. OpenCode
2.x ejecuta un servidor privado por terminal para que los historiales de las pestañas sigan separados.
El inspector MCP lista por ahora las configuraciones de Claude, Codex, Kimi y Cursor;
usa los controles MCP nativos de OpenCode para revisar sus propias conexiones.

## Explorar los ejemplos

La tarjeta fijada del juego es un hub del proyecto. Research es un informe legible con enlaces
a fuentes. Dev contiene esta guía e ideas de personalización. Image Gen muestra las
iteraciones de diseño de Arachne y las referencias de movimiento. Todas están marcadas como ejemplos para
que no desaparezcan en el archivo automático por fecha. Archívalas cuando ya no
las necesites. Archivar cambia los metadatos; no borra sus archivos multimedia.

Usa Archivos para revisar `projects`, `inbox`, `knowledge`, `processes` y las carpetas de
skills. Un archivo Markdown se abre en vista previa; cambia a Editar y guarda para modificarlo.
El botón Ayuda abre una guía rápida sin crear un chat nuevo.

## Voz opcional

Copia `.env.example` a `.env` y agrega tu propia `OPENAI_API_KEY` para activar la
conexión OpenAI Live. Nunca hagas commit de ese archivo. Inicia sesión en Codex para el
coordinador. Su modelo sigue la configuración de tu cuenta; la variable opcional
`MRMAK_COORDINATOR_MODEL` la reemplaza. El acceso a modelos depende de tu cuenta.

Las solicitudes de voz pueden enfocar un chat, revisar un informe, actualizar una tarjeta o pasar una tarea
más grande a un worker. Las acciones directas son rápidas; un worker visible se encarga de los entregables.
Medium es el esfuerzo mínimo por defecto; el trabajo difícil puede usar high o xhigh.
Max requiere una solicitud explícita. La app informa los resultados de las herramientas antes de dar
una acción por completada.

La facturación de la cuenta CLI y la de la API de voz de OpenAI son independientes. No hace falta generar nada por API
para recorrer los ejemplos o usar una CLI con sesión iniciada. El dictado opcional en
terminales se describe en [dictado por voz](../../knowledge/voice-dictation.md).

## Compilar desde el código fuente

Instala [Node.js](https://nodejs.org/en/download), la toolchain MSVC de Rust y los
[requisitos de Tauri para Windows](https://v2.tauri.app/start/prerequisites/#windows):
Microsoft C++ Build Tools y WebView2. Esta plantilla requiere Node.js 22.20+.

```powershell
powershell -ExecutionPolicy Bypass -File .\Setup.ps1 -Mode Check
powershell -ExecutionPolicy Bypass -File .\Setup.ps1 -Mode Desktop
```

En macOS y Linux, `./setup.sh check` y `./setup.sh desktop` hacen lo mismo.

Check solo informa los requisitos previos. Desktop instala las dependencias del proyecto y
compila un instalador en `src-tauri/target/release/bundle/nsis`. No instala
ni reinicia la app por ti. Un agente debe preparar las actualizaciones y luego preguntar antes de
interrumpir chats activos con una instalación o un reinicio.

Para una vista previa de informes en el navegador:

```powershell
powershell -ExecutionPolicy Bypass -File .\Setup.ps1 -Mode Preview
```

En macOS o Linux, ejecuta `./setup.sh preview`.

Eso inicia Vite y enlaza `public/workspace` con la carpeta real del Workspace.
No inicia terminales gestionadas ni el servicio de voz.

## En otra computadora

Clona tu propio repositorio, instala la app, selecciona la carpeta y vuelve a iniciar sesión en
tus CLI. Vuelve a crear `.env` localmente. El contenido viaja por Git; las credenciales,
el estado local de la app y los historiales nativos de las CLI no. Un clon nuevo no puede recuperar
conversaciones cuyo historial nativo solo existe en la computadora anterior.
