[English](../updating.md) · **Español**

# Actualizar un Workspace existente

La aplicación y la carpeta del proyecto están separadas. El instalador de Windows
(o, en macOS y Linux, una compilación nueva) actualiza la app y su servicio local.
No reemplaza tus tarjetas, skills, contexto, credenciales ni conversaciones
con los agentes.

## Aplicación

1. Termina las tareas activas de los agentes y luego elige Quit en el menú de bandeja de Mr. Mak.
2. Descarga el instalador más reciente de **Mr. Mak Workspace** para Windows x64 desde
   [Releases](https://github.com/witnesstodark/mr-mak-workspace/releases/latest)
   y ejecútalo.
3. Abre el mismo repositorio que usabas antes. Tus tarjetas, ajustes e
   Historial siguen en esa carpeta.

Para una compilación de escritorio desde el código fuente, ejecuta `Setup.ps1 -Mode Update` en una
ventana externa de Windows PowerShell abierta desde Inicio, fuera de Mr. Mak. Reemplaza estos pasos:
compila el código fuente actual, espera a que cierres Mr. Mak, instala la compilación
en silencio y vuelve a iniciar Mr. Mak. Consulta [primeros pasos](getting-started.md).
El modo Update es solo para Windows.

### macOS (compilación desde código fuente)

macOS no tiene instalador ni modo Update. Ejecuta estos pasos en Terminal, fuera de
Mr. Mak, desde la carpeta del repositorio:

1. Incorpora los cambios del código fuente, por ejemplo con `git pull`.
2. Ejecuta `./setup.sh desktop`. Mr. Mak puede seguir abierto mientras compila.
3. Termina las tareas activas de los agentes y luego elige **Quit Mr. Mak and stop terminals**
   en el ícono de la barra de menús.
4. Reemplaza la app instalada con la nueva compilación:

   ```bash
   rm -rf "/Applications/Mr. Mak Workspace.app"
   ditto "src-tauri/target/release/bundle/macos/Mr. Mak Workspace.app" "/Applications/Mr. Mak Workspace.app"
   ```

   La compilación ya tiene firma ad hoc. Solo si macOS sigue sin abrir la
   copia, fírmala de nuevo: `codesign --force --deep --sign - "/Applications/Mr. Mak Workspace.app"`.
5. Haz doble clic en **Start Mr. Mak.command**. Prefiere la copia de Aplicaciones,
   así que omitir el paso 4 inicia la versión anterior; avisa cuando la carpeta de compilación
   tiene una app más nueva e imprime el comando de reemplazo del paso 4.

Si en cambio usas un `.dmg` descargado, cierra Mr. Mak de la misma forma, arrastra la nueva app
desde la imagen de disco sobre la de Aplicaciones y elige Reemplazar.

macOS vuelve a pedir permisos, como el acceso al micrófono, después de cada recompilación,
porque la firma ad hoc cambia. Consulta las [notas de macOS](macos.md).

La versión 0.5.2 agrega grupos de chats con nombre y una vista opcional **Conversación** para
Claude Code y Codex. Haz clic derecho en una pestaña de chat para gestionar su grupo, o usa el
selector Conversación / Terminal para elegir cómo leer ese chat. Los chats existentes
y las vinculaciones de teléfonos siguen disponibles. También incluye compatibilidad con macOS,
correcciones en el reinicio de terminales y en el actualizador de Windows. Consulta el [registro de cambios](../../CHANGELOG.md).

La actualización del código fuente 0.5.1 conserva el proveedor de dictado seleccionado, el modelo personalizado
y la apariencia de la terminal. Las configuraciones nuevas usan por defecto Whisper local, que requiere
la [configuración de voz local](mobile-access.md#configuración-de-voz-local-en-la-computadora) opcional.
OpenAI y OpenRouter siguen siendo opciones pagas explícitas; la falta de un modelo local nunca
provoca una solicitud automática a la nube. También se incluyen nuevas vistas previas multimedia en el móvil, la restauración
de la posición en informes y el dictado en el escritorio, junto con el port a macOS.

La versión 0.5.0 agrega el [acceso móvil](mobile-access.md) opcional. Después de actualizar,
usa el botón del teléfono en Chats para conectar tus propios dispositivos mediante Tailscale.
Las vinculaciones existentes sobreviven a las actualizaciones de la aplicación. El dictado móvil usa una
clave de transcripción de OpenRouter u OpenAI en la computadora; los mensajes escritos usan
tu cuenta CLI existente. Los enlaces y rutas largos se mantienen dentro de las tarjetas de chat móviles.
El AppImage de Linux también incluye una corrección de permisos del lanzador.

La corrección del Historial puede reconectar una conversación de Codex cuyo registro nativo original
todavía existe pero cuyo ID Mr. Mak no guardó. Si ese historial nativo se
borró o pertenece a otra cuenta, la actualización no puede recrearlo. Usa
Nuevo chat > Resume con un ID nativo conocido al importar un chat CLI existente.
Las pantallas de terminal guardadas se conservan cuando la recuperación automática no es posible.

La versión 0.4.18 agrega empaquetado para Linux y las bases para proveedores de proyectos y conocimiento.
Windows mantiene su comportamiento nativo de terminal y las sesiones de cuenta existentes.
Ninguna integración externa se conecta automáticamente.

La versión 0.4.17 agregó **Ajustes > Apariencia > Workspace theme**. Elige Claro
para texto oscuro sobre blanco, o Sistema para seguir al dispositivo. Oscuro sigue siendo el valor por defecto.
Los informes HTML estándar siguen esta preferencia. Para un informe con un diseño visual
propio, incorpora su código fuente actualizado o agrega `data-mak-theme="custom"` al
elemento raíz para conservar su paleta. Consulta [personalización](customization.md).

La versión 0.4.16 agregó **OpenCode** a Nuevo chat, al Historial y al ajuste de agente
por defecto. Instala y configura OpenCode por separado y luego vuelve a abrir Mr. Mak si el
comando se acaba de agregar al PATH. Los chats existentes de Codex y Claude conservan su sesión
y ajustes. No se necesita clave de API para sus chats CLI respaldados por suscripción;
la voz sigue siendo opcional y usa una conexión a la API de OpenAI facturada aparte.

## Skills y código fuente

Para una vista previa solo en el navegador, incorpora las correcciones del código fuente, detén el servidor de Preview
y luego ejecuta `Setup.ps1 -Mode Preview` (macOS/Linux: `./setup.sh preview`) y
recarga el navegador. Setup ejecuta `npm ci`
e inicia Vite. Rust no es necesario para este modo. El `npm ci` de la raíz también instala
las dependencias del servicio local.

El código fuente más reciente incluye un complemento a la corrección de preview de 0.4.15: una hoja de estilos
compartida podía impedir que el visor de tarjetas cargara después de la configuración normal.
Los enlaces HTML directos seguían funcionando en ese caso. Actualizar el código fuente corrige el
visor incrustado; descargar solo un instalador no actualiza Preview.

Un instalador por sí solo no puede agregar las nuevas skills. Para un clon que sigue este
repositorio, pide a tu agente que revise e incorpore los cambios del código fuente de la versión.
Haz commit o respaldo del trabajo local, resuelve los conflictos con cuidado y
conserva tu propio `workspace/workspace.json`, tarjetas, contexto y conexiones.
No restablezcas un repositorio personalizado a la plantilla para obtener una actualización.

Para un repositorio derivado de la plantilla con historial no relacionado, usa el archivo separado
**Mr-Mak-Skills-0.4.14.zip** para los flujos de trabajo. Extráelo fuera del proyecto,
lee `SKILLS-README.md` y luego incorpora las carpetas que quieras. No incluye proyectos personales,
claves, sesiones de CLI ni definiciones MCP. El paquete no reemplaza tu
`AGENTS.md` ni tu `CLAUDE.md`.

Las skills mantenidas viven en `.agents/skills`; las copias completas para Claude viven en
`.claude/skills`. Mantén ambas sincronizadas si usas los dos agentes. Las dependencias
figuran en [el índice de skills](skills.md) y en cada skill. Sigue siendo necesario un Codex CLI, Claude
Code CLI u OpenCode configurado; los proveedores opcionales usan tus propias credenciales.

Si compilas el escritorio desde el código fuente, vuelve a compilar después de incorporar los cambios de la aplicación.
Usa la [guía de configuración](getting-started.md) para los requisitos previos.
