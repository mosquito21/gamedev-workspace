[English](README.md) · **Español**

# Arquitectura de escritorio

La app de escritorio es un shell de Tauri 2 alrededor de dos webviews. Inicia un servicio
local de Node, lo enlaza a loopback y entrega a cada ventana la URL local autenticada.
Workspace renderiza la UI de React y los archivos de informes. Chats renderiza PTY reales mediante
xterm.js. Las ventanas comparten sesiones y ajustes, pero se minimizan por separado.

| Ruta | Responsabilidad |
| --- | --- |
| `src/` | Workspace en React, vistas previas de documentos, archivos, UI de chat y de voz |
| `desktop/service/` | Servicio HTTP/WebSocket, PTY, historial de sesiones, herramientas, conexión de voz |
| `src-tauri/src/` | Integración multiplataforma con el sistema, más identidades en la barra de tareas de Windows, PATH de la shell de inicio de sesión y manejo de teclas en macOS, arrastre nativo y atajo de sistema opcional |
| `workspace/workspace.json` | Registro de tarjetas |
| `workspace/_shared/` | CSS de informes, visor de imágenes y Ayuda |
| `.mrmak/` | Estado de ejecución local; ignorado por Git |

`npm run desktop:build` ejecuta `desktop/prepare.mjs`, compila el frontend de React,
empaqueta el servicio con un ejecutable de Node y las dependencias de producción, y luego
compila el ejecutable de Tauri y los instaladores de cada plataforma. En Linux, usa
`npm run desktop:build:appimage` para el AppImage distribuible. Quien lo recibe
selecciona su propio repositorio; su contenido se sirve desde el disco en lugar de quedar incluido
en el instalador.

El servicio ejecuta las CLI como el usuario actual. Los archivos y permisos disponibles para ellas
dependen de sus opciones de inicio y de los ajustes nativos de la cuenta. La omisión de permisos
está desactivada por defecto. No expongas el servicio local como servidor web público.

El frontend de voz opcional usa OpenAI Live. Las acciones rutinarias llaman a herramientas locales;
el coordinador app-server de Codex se encarga de la orquestación más amplia con el modelo
configurado por el usuario. Las tareas de ejecución más grandes van a terminales worker visibles. El
ID de conversación nativo del proveedor se registra cuando está disponible para retomarla después.
El descubrimiento de Codex revisa tanto las carpetas de fecha local como UTC, sigue esperando cuando
el primer prompt se demora y lee registros de metadatos acotados más grandes que un búfer
pequeño. Cerrar o retomar una pestaña puede recuperar un ID faltante a partir de su marcador exacto de
origen de Mr. Mak. Compartir el directorio de trabajo no es, por sí solo, prueba de pertenencia.

Los chats nuevos de Codex y Claude usan `xhigh` por defecto; las elecciones de esfuerzo guardadas explícitamente
se conservan. Las URL de la terminal y los enlaces OSC 8 usan los manejadores de enlaces de xterm. Las solicitudes
de nueva ventana desde ambas ventanas de la app abren los enlaces HTTP(S) en el navegador predeterminado del sistema
(la asociación del shell de Windows, `open` en macOS, `xdg-open` en Linux), mientras la
vista actual de la app sigue abierta.

## Proyectos y la vista Conversación

Nuevo chat lista los proyectos recientes desde `recent-projects.mjs`: el Workspace, los favoritos
fijados, las carpetas registradas en `.claude.json` de Claude Code (se respeta `CLAUDE_CONFIG_DIR`),
los metadatos de sesiones de Codex de las últimas 60 carpetas por día (se respeta `CODEX_HOME`)
y las carpetas de chats anteriores de Mr. Mak. De esos archivos solo se leen los nombres de carpeta.
Se omiten los worktrees, las carpetas temporales, las carpetas con fecha de la app de Codex y
las carpetas que ya no existen. Los fijados se guardan en `settings.pinnedProjects`. Un teléfono
solo puede iniciar un chat en una carpeta de la lista. El coordinador de voz usa la misma lista
mediante `list_projects`.

Los chats de Claude y Codex pueden alternar entre Terminal y Conversación. Conversación
lee la misma transcripción nativa que el teléfono, envía un prompt por el PTY con
bracketed paste y Enter, y sirve el contenido multimedia mediante permisos `/media/` de corta duración
vinculados a un chat. Un chat nuevo se abre en Terminal hasta que tiene una conversación, ya que
la CLI puede preguntar primero por la confianza en la carpeta o el inicio de sesión. La última vista elegida pasa a ser
la predeterminada para los demás chats.

`terminal-prompt.mjs` reconoce un menú numerado de la CLI con una opción seleccionada al
pie de la pantalla de la terminal. Conversación lo muestra como botones. Una respuesta
nombra el menú que vio; el servicio vuelve a leer la pantalla, rechaza un menú que cambió
y luego envía flechas y Enter de a una tecla. Los enlaces locales en los mensajes abren una
vista previa del Workspace, resueltos respecto de la carpeta del chat. Leer en voz alta en el escritorio usa
las mismas voces locales que el teléfono.

## Traspaso a un chat nuevo y pestañas por proyecto

`settings.handoffAfter` (40 por defecto; 0 lo desactiva) es la cantidad de mensajes propios
del usuario tras la cual un chat de Claude o Codex ofrece un chat nuevo. El conteo
sale de la transcripción nativa. "Más tarde" y "No en este chat" se guardan por
chat en el almacenamiento local de la ventana. Al aceptar se ejecuta `handoff.mjs`: envía una solicitud
fija de traspaso por el PTY, espera a que termine el turno nativo, toma la
respuesta desde su encabezado `# Handoff` y la guarda en `inbox/handoffs/` (ignorado por
Git). El chat nuevo usa el mismo agente, carpeta, permisos y esfuerzo, y
recibe un argumento de primer mensaje que nombra ese archivo. Claude también recibe
`--add-dir` para la carpeta de traspasos. En el chat original no cambia nada.

`settings.groupTabsByProject` agrupa las pestañas abiertas por carpeta de trabajo. Un grupo mantiene
la posición de su primera pestaña; las pestañas solo se reordenan dentro de su proyecto.

Claude a pantalla completa desplaza su propia conversación. Las instantáneas de la terminal conservan
tanto el seguimiento del mouse como la codificación SGR solicitada, incluidas las pantallas guardadas,
así cambiar de pestaña o reconectar no desactiva la rueda del mouse. Claude
clásico y Codex siguen usando el historial de desplazamiento local de la terminal.

## Dictado local por micrófono

Los chats del escritorio, el editor Mak y los chats móviles vinculados admiten dictado local y gratuito
con Whisper. Sigue la [configuración y el comportamiento de revisión](../docs/es/mobile-access.md#entrada-de-voz).
El motor local es el predeterminado. Elige Free/Paid/Off en el botón del teléfono arriba a la derecha
(**Phone settings**) o en **Ajustes → Speech-to-text**. La elección se guarda
y se comparte con los teléfonos vinculados. Los proveedores pagos requieren una clave de API en la computadora.

## Apariencia de la terminal

Ajustes → Chats → Terminal appearance ofrece **Original CLI colors** (el predeterminado)
y **Mr. Mak Focus** (colores atenuados). Original conserva los colores de diff de la CLI para las líneas
agregadas y eliminadas. La elección se guarda para todos los chats del escritorio y se aplica de inmediato a las
terminales abiertas sin reiniciar las sesiones. Las preferencias guardadas existentes
se conservan. La misma opción está disponible en el menú de opciones de cada chat.

## Terminales de OpenCode

El servicio detecta OpenCode 1.x o 2.x instalado y lanza su TUI real.
OpenCode controla la elección de modelo, la autenticación del proveedor y la configuración de razonamiento.
El flag opcional `--auto` mantiene intactas las denegaciones de permisos explícitas de OpenCode.

`desktop/service/opencode/` contiene observadores de eventos sin dependencias para ambas
APIs de plugins. Una configuración inline por proceso agrega el observador correspondiente
y conserva los plugins, modelos y proveedores configurados. No se edita ninguna configuración global.
OpenCode 2.x usa `--standalone` para aislar el servidor de cada terminal gestionada.

Los observadores solo guardan un ID de sesión nativo, la identidad del lanzamiento y metadatos de actividad/finalización
en `.mrmak/`. No guardan prompts ni credenciales de proveedores.
La identidad de la sesión raíz se captura a partir de un evento nativo real, no se deduce de
un directorio de trabajo compartido. Retomar pasa `--session` con ese ID registrado.
Un marcador específico del lanzamiento evita que eventos obsoletos cambien la actividad de una terminal
nueva. El historial nativo de la CLI debe seguir en disco para restaurar la conversación.

## Comprobaciones

```powershell
npm ci
npm run lint
npm test
npm run test:template
npm run build
npm run desktop:test:ui
npm run test:preview
```

Los mismos comandos funcionan en zsh o bash en macOS y Linux.

La instalación en la raíz también instala las dependencias bloqueadas de `desktop/service`. Si
usas deliberadamente `npm ci --ignore-scripts`, ejecuta
`npm --prefix desktop/service ci` antes de las pruebas o del servicio local, y en
macOS también `node scripts/fix-pty-permissions.mjs`: npm puede desempaquetar el
`spawn-helper` de node-pty sin el bit de ejecución, y entonces las terminales fallan con
`posix_spawnp failed`.

Las pruebas de UI usan un repositorio aislado y terminales falsas. Corren en el motor
de la app de cada plataforma: en Windows debe estar disponible Edge (WebView2); en macOS
usan Playwright WebKit (WKWebView), así que ejecuta `npx playwright install webkit`
una vez después de `npm ci`, como hace el job de CI de macOS. Define `MRMAK_TEST_BROWSER` como
`msedge`, `chrome`, `chromium` o `webkit` para cambiarlo; `chromium` y `webkit`
necesitan antes `npx playwright install <name>`. Las pruebas rápidas de voz Live y de suscripción
son scripts separados con flags de activación explícitos; nunca forman parte del
comando de pruebas por defecto.

OpenCode tiene una prueba de integración separada, sin cuenta, contra un modelo simulado local:

```powershell
node desktop/service/test-opencode-native.mjs --binary C:\path\to\opencode.exe --tui
```

En macOS o Linux:

```sh
node desktop/service/test-opencode-native.mjs --binary "$(command -v opencode)" --tui
```

Aísla los directorios home y de datos de la CLI, verifica dos historiales nativos
separados y luego cierra y retoma una terminal real. Probado con OpenCode 1.18.3
y 2.0.21 en Windows. No se hacen llamadas pagas a modelos.

Windows x64, Linux y macOS son destinos nativos compatibles. La app de macOS tiene
firma ad hoc (sin notarizar) y es solo para Apple Silicon; los pasos de compilación y los límites están en
[docs/es/macos.md](../docs/es/macos.md).

Leer en voz alta usa voces locales fijas y gratuitas: Michael (hombre, EE. UU.) y Emma (mujer, Reino Unido).
Ejecuta `powershell -ExecutionPolicy Bypass -File scripts/setup-local-read-aloud.ps1`
una vez en Windows. En macOS, ejecuta `brew install python@3.12` y luego
`python3.12 scripts/setup-local-voice.py read-aloud`; en Linux, usa cualquier
Python 3.10-3.12. Consulta la
[configuración de voz local](../docs/es/mobile-access.md#configuración-de-voz-local-en-la-computadora).
Los modelos y el entorno de Python para CPU quedan en la carpeta ignorada
`.cache/read-aloud`; no se necesita clave de voz en la nube ni cuenta paga.
Los ajustes del teléfono guardan la elección de voz. El servicio móvil inicia bajo demanda su
propio worker de voz y lo libera tras un tiempo inactivo; actualizar los archivos del servicio requiere
un reinicio de la aplicación aprobado por el usuario.
