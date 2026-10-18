[English](README.md) · **Español**

# Mr. Mak Workspace

Tus agentes CLI, un Workspace visual y acceso desde el teléfono.

Mr. Mak tiene **dos ventanas de escritorio conectadas**:

- **Chats** es donde se encargan tareas a Codex, Claude Code, Antigravity, OpenCode o Kimi. Cada
  conversación corre en una terminal CLI real, con su propia pestaña e historial guardado.
- **Workspace** es donde se revisan los resultados: páginas de proyecto, investigación, imágenes,
  prompts guardados e informes. Archivos, skills, conexiones MCP y ajustes están
  junto al trabajo.

Las ventanas pueden estar lado a lado o minimizarse cada una por separado. Chats
puede quedar a la vista mientras se trabaja en Blender, un motor de juego o el navegador.

La interfaz también está disponible en español: se cambia en **Ajustes → Apariencia → Idioma**
(Sistema / English / Español).

**Novedad en 0.5: [conecta tu teléfono](#en-tu-teléfono)** para seguir los mismos chats,
enviar ideas y dictar mensajes mientras los agentes siguen trabajando en la computadora.

![Las dos ventanas de Mr. Mak lado a lado: chats CLI a la izquierda y el proyecto My Dream Game en Workspace a la derecha](docs/assets/desktop-chats-workspace.png)

*Chats a la izquierda, Workspace a la derecha. Vistas de la app lado a lado
con conversaciones de ejemplo y el proyecto incluido My Dream Game.*

## Leer y responder un chat como conversación

Los chats de Claude Code y Codex tienen un selector **Conversación | Terminal**. La
vista Conversación lee la transcripción propia de la CLI y la muestra como mensajes, con
Markdown, imágenes y la actividad reciente de herramientas. Su editor envía texto, adjuntos
y dictado a la misma terminal, y **Detener** (Esc) interrumpe al agente.

![Un chat de Claude Code en la vista Conversación: mensajes con Markdown, el selector Conversación y Terminal, y Leer en voz alta bajo la última respuesta](docs/assets/conversation-view.png)

Un chat nuevo se abre en Terminal hasta que tiene una conversación, así las preguntas de
confianza en la carpeta e inicio de sesión nunca quedan ocultas. Los enlaces a archivos locales en una
respuesta abren una vista previa en Workspace, resueltos respecto de la carpeta del chat.

- **Responder menús de permisos con un clic.** Cuando la CLI pide permiso,
  el menú numerado al pie de la terminal aparece como botones. Antes de
  enviar cualquier tecla, Mr. Mak vuelve a leer la pantalla y comprueba que sigue siendo el
  mismo prompt, así un clic tardío no puede responder una pregunta más nueva.
- **Autocompletar comandos.** Escribe `/` al inicio de un mensaje, o `$` antes de una
  palabra en un chat de Codex, para listar los comandos integrados de esa CLI más los comandos y
  skills de proyecto, de usuario y de plugins. Un comando que abre un selector, como
  `/model`, cambia el chat a Terminal después de enviarlo.
- **Editar un mensaje enviado.** En un chat de Claude Code, el lápiz de tu mensaje
  abre un editor, como Esc Esc en Claude Code. Al enviar, la conversación vuelve
  a antes de ese mensaje (los archivos no cambian) y se envía el
  texto editado. Después de un retroceso, incluso uno hecho en la terminal, la vista muestra
  solo la rama actual.
- **Los eventos de la CLI se mantienen compactos.** Resultados de agentes en segundo plano, comandos slash y su
  salida aparecen como eventos breves en lugar de etiquetas crudas; los hallazgos de una revisión se convierten en una
  lista con enlaces a archivos. Elige Compacto, Expandido u Oculto en las opciones del chat.
- **Ver qué sigue en ejecución.** En los chats de Claude Code, una línea sobre el editor
  cuenta los subagentes y comandos de terminal en segundo plano que siguen trabajando.
  Al expandirla se ve la tarea y el paso actual de cada agente, cada comando y quién
  lo inició, y cuánto tiempo lleva cada uno.
- **Conocer el modelo.** La barra de estado muestra el último modelo usado por el chat, junto al
  esfuerzo de razonamiento y los permisos.
- **Leer en voz alta en el escritorio** con las mismas voces locales que el teléfono.
  *Preparando audio…* aparece mientras la computadora genera cada parte.

![Claude Code pidiendo editar combat.ts, mostrado en la vista Conversación con el diff y tres botones de respuesta](docs/assets/conversation-permission.png)

Los chats de Codex 0.163 son compatibles: Mr. Mak inicia Codex con `--no-daemon` cuando
la versión instalada lo ofrece, así cada chat sigue vinculado a su conversación,
y un chat sigue un retroceso o un `/new` hecho en su terminal.

## Proyectos y chats largos

**Nuevo chat** lista las carpetas en las que has trabajado: el Workspace, proyectos
abiertos en Claude Code, carpetas donde corrió Codex y carpetas de chats anteriores de
Mr. Mak. Fija las favoritas para mantenerlas arriba. Historial puede filtrar por proyecto, y
el coordinador de voz puede abrir un chat en un proyecto que nombres. Un teléfono vinculado solo
puede iniciar un chat en una carpeta de la lista, nunca en una ruta arbitraria.

<img src="docs/assets/new-chat-projects.png" alt="El diálogo Nuevo chat con Claude Code seleccionado y una lista de proyectos: el Workspace, arachne-lab fijado, dream-game seleccionado y otras carpetas recientes" width="420">

Después de una cantidad fija de tus mensajes (40 por defecto; opciones del chat **⋯**), un chat
ofrece **Resumir y continuar**. Mr. Mak pide al agente un traspaso, lo guarda
en `inbox/handoffs` y abre "*nombre* · continued" en la misma carpeta con el
mismo agente y ajustes. El chat nuevo empieza leyendo ese traspaso. Elige
**Más tarde** o **No en este chat** para descartarlo.

![La oferta de chat nuevo en una conversación larga, con Resumir y continuar, Más tarde y No en este chat](docs/assets/handoff-offer.png)

Elige un grupo en **Nuevo chat**, o haz clic derecho en una pestaña para crear uno o unirte.
Los encabezados de grupo se pueden arrastrar, contraer, renombrar y colorear. Eliminar un grupo
conserva sus chats, incluidos los del Historial. Las pestañas fijadas quedan delante de las demás.
Doble clic en una pestaña, o F2, renombra su chat.

## En tu teléfono

Lee respuestas, envía seguimientos o imágenes y abre informes del Workspace desde una
app web móvil que se puede agregar a la pantalla de inicio. El teléfono se conecta a Mr. Mak en
la computadora mediante **Tailscale**. Los agentes siguen corriendo en la computadora con
sus cuentas CLI existentes.

<a href="docs/assets/mobile-overview.png"><img src="docs/assets/mobile-overview.png" alt="Mr. Mak en un teléfono: lista de chats, conversación y entrada de voz lado a lado" width="720"></a>

*Tus chats, una conversación y la entrada de voz en una sola vista. Toca la imagen
para verla en tamaño completo. Se muestran conversaciones de ejemplo.*

- **Vincular desde Chats.** Pulsa el botón del teléfono en la computadora, activa el acceso
  móvil, escanea el código QR y confirma el código coincidente en el escritorio.
- **Retomar donde lo dejaste.** Vincula una vez y luego vuelve a abrir el mismo acceso directo del teléfono.
  Teléfono y escritorio pueden mostrar chats distintos mientras comparten la conversación.
- **Dictar un borrador.** Toca el micrófono, graba el mensaje y detén para
  transcribirlo. Revisa el texto antes de pulsar Enviar.
- **Revisar el resultado.** Amplía imágenes compartidas, reproduce videos o vuelve a abrir un informe
  en su posición guardada. Voces locales opcionales pueden leer una respuesta en voz alta.
- **Moverse como en una app.** Desliza hacia abajo desde arriba del Workspace para
  actualizarlo; un informe abierto se recarga en la misma página y sección. El gesto
  atrás vuelve a la pantalla anterior en lugar de salir de la app (Chrome y
  Edge en Android).
- **Leer la terminal.** La vista Terminal se abre en modo Wrap, así el texto en vivo
  se ajusta a la pantalla y se puede seleccionar. Fit y Actual siguen disponibles.

<img src="docs/assets/mobile-terminal-wrap.png" alt="La vista Terminal del teléfono en modo Wrap, con la salida de la CLI ajustada al ancho de la pantalla" width="320">

Mantén la computadora encendida con Mr. Mak en ejecución y Tailscale conectado en ambos
dispositivos. El dictado puede correr localmente con Whisper después de la configuración opcional de Python,
o usar crédito de API de OpenRouter/OpenAI facturado aparte. Las actualizaciones conservan el
proveedor actual. El dictado local y Leer en voz alta no requieren clave de API de transcripción;
el coordinador de voz Live opcional sigue usando facturación de la API de OpenAI.

[Configurar el acceso móvil y la entrada de voz](docs/es/mobile-access.md)

## Herramientas de uso diario

- **Tus archivos a mano.** Recorre un árbol de carpetas con Carpetas principales o Todos los
  archivos, salta a `inbox`, `projects`, `workspace`, `knowledge` y `processes`,
  y abre cualquier carpeta en el Explorador de Windows, el Finder de macOS o tu gestor de archivos.
- **Notas legibles y editables.** Abre Markdown como documento con formato, cambia
  a Editar y guarda los cambios en la misma ventana. Previsualiza imágenes, video y audio
  junto al árbol de archivos.
- **Elegir un tema de lectura.** Ajustes > Apariencia ofrece Oscuro, Claro y
  Sistema. Claro usa texto oscuro sobre blanco en Workspace y en los informes estándar.
  Las imágenes conservan sus colores originales; la apariencia de la terminal se ajusta por separado.
- **Chats a los que volver.** Fija conversaciones en el historial, reordena y colorea
  pestañas, y ve qué agentes están trabajando o tienen una respuesta que no has visto.
  Suelta archivos o carpetas en un chat para insertar sus rutas; las imágenes del portapapeles se
  guardan en `inbox/attachments`.
- **Proyectos con su trabajo adjunto.** Guarda investigación, versiones de diseño, prompts
  guardados y pruebas de movimiento en pestañas dentro de una tarjeta. Abre imágenes en tamaño completo y
  descárgalas desde la vista previa. En la app de escritorio, haz clic en el punto de estado de una tarjeta
  para cambiar su estado o categoría, fijarla o archivarla. Restaura tarjetas archivadas
  desde la búsqueda o con Mostrar archivo; sus archivos y pestañas se mantienen en su lugar.
- **Skills y herramientas al alcance.** El panel derecho abre skills del proyecto,
  conocimiento, flujos de trabajo, conexiones MCP, Ajustes y Ayuda. Muestra qué conexiones MCP
  vienen del proyecto y cuáles de la configuración global del agente.

![Workspace con el proyecto My Dream Game abierto y el árbol de Archivos mostrando el conocimiento y los flujos de trabajo del proyecto](docs/assets/workspace-files.png)

## Antes de empezar

**Requisito previo: instala y configura Codex CLI, Claude Code CLI, Antigravity, OpenCode o Kimi
antes de configurar Mr. Mak.** Se necesita al menos uno. Pueden correr en paralelo
y son instalaciones separadas, no incluidas con Mr. Mak.

- [Instalar Codex CLI](https://developers.openai.com/codex/cli)
- [Instalar Claude Code CLI](https://code.claude.com/docs/en/setup)
- [Instalar OpenCode](https://opencode.ai/docs/)
- [Instalar Antigravity CLI](https://www.antigravity.google/docs/cli/install/)
- [Instalar Kimi Code CLI](https://moonshotai.github.io/kimi-cli/)

**¿Necesito una clave de API?** No, no para chats de Claude Code o Codex si inicias
sesión con una suscripción elegible. Mr. Mak ejecuta la CLI real con su sesión
existente: Claude Pro/Max puede usar Claude Code, y Codex puede usar el acceso de la suscripción
a ChatGPT. Se siguen aplicando los límites normales del plan. La facturación por API es una alternativa, no un
requisito. Consulta [autenticación de Claude](https://code.claude.com/docs/en/authentication)
y [autenticación de Codex](https://developers.openai.com/codex/auth).

**OpenCode** usa los proveedores y la autenticación configurados en OpenCode.
Sus reglas de acceso y facturación siguen vigentes; el soporte aquí no convierte una suscripción de Claude
Code en acceso por API para OpenCode. Elige **+ > OpenCode** en Chats.

**Antigravity** ejecuta la CLI `agy` de Google en una pestaña de chat. Instálala desde la
[guía oficial](https://www.antigravity.google/docs/cli/install/), luego elige
**+ > Antigravity**, inicia sesión y usa `/model` para seleccionar un modelo disponible.
Google controla el acceso a modelos y los límites de uso. El Historial retoma la conversación
exacta registrada para esa pestaña. Por ahora Antigravity usa la vista de terminal
en teléfonos; las respuestas estructuradas y los indicadores de finalización aún no están disponibles.

El coordinador de voz opcional requiere específicamente **Codex CLI** y tu propia
**clave de API de OpenAI**. El uso de la API de voz se factura aparte. Deja la voz apagada para usar
chats CLI respaldados por suscripción sin clave de API.

## Empezar con un agente

Usa **Use this template** en GitHub para crear tu propio repositorio y luego clónalo
en una carpeta que controles. Abre esa carpeta en tu Codex CLI,
Claude Code CLI u OpenCode instalado y pega:

> Configura este repositorio de Mr. Mak Workspace en mi computadora. Lee AGENTS.md y
> docs/getting-started.md, revisa los requisitos previos y ayúdame a ejecutar la app de
> escritorio para mi sistema operativo. Usa mis propias cuentas CLI. Deja la voz opcional,
> los proveedores pagos, las conexiones MCP y el atajo para recuperar la ventana (tecla Win en
> Windows) apagados hasta que yo decida conectarlos.
> Guarda mis credenciales en el archivo .env ignorado. Muéstrame los cuatro ejemplos y
> ayúdame a reemplazarlos con mi propio proyecto.

El repositorio incluye ejemplos, instrucciones y el código fuente de la aplicación. Tú aportas
tus propias cuentas de agentes y los servicios que quieras usar.

## Ejecutar la app de escritorio

En Windows, descarga el instalador desde [Releases](https://github.com/witnesstodark/mr-mak-workspace/releases/latest),
instala **Mr. Mak Workspace** y luego abre **Start Mr. Mak.cmd** en tu repositorio
clonado. En Linux, compila el destino de escritorio Tauri después de instalar los requisitos de Node,
Rust y WebKitGTK, y luego ejecuta el AppImage/deb resultante
con `--repo /path/to/your/workspace`. En macOS (Apple Silicon), descarga el
`.dmg` desde la misma página de Releases o ejecuta `./setup.sh desktop` para compilar
`Mr. Mak Workspace.app`, y luego abre **Start Mr. Mak.command**
([notas de macOS](docs/es/getting-started.md#macos)). En todos los sistemas, usa **+** en
Chats para abrir una CLI instalada e iniciar sesión con tu propia cuenta.

El instalador incluye el servicio local de Node. No incluye Codex,
Claude Code, Antigravity, OpenCode, Kimi, Blender, Python ni cuentas de proveedores.

**¿Ya usas Mr. Mak?** Lee las [notas de actualización](CHANGELOG.md) sobre la
vista Conversación, los proyectos recientes y el traspaso a un chat nuevo, y sobre las novedades de 0.5.1:
Antigravity, mejoras en macOS, navegación móvil, opciones de voz local y
cambios de seguridad en las versiones.
Sigue la
[guía de actualización](docs/es/updating.md) para actualizar la app y agregar skills a tu repositorio
existente sin reemplazar tus proyectos.

Para compilar desde el código fuente, instala Node.js 22.20+ y los requisitos de compilación de Tauri
para tu sistema operativo y luego ejecuta en Windows:

```powershell
powershell -ExecutionPolicy Bypass -File .\Setup.ps1 -Mode Check
powershell -ExecutionPolicy Bypass -File .\Setup.ps1 -Mode Desktop
```

En macOS o Linux:

```bash
./setup.sh check
./setup.sh desktop
```

Para una vista previa de los informes en el navegador, usa `-Mode Preview` (macOS/Linux:
`./setup.sh preview`) con Node.js 22.20+ y npm. Rust y las C++ Build Tools solo se necesitan para compilar la app de
escritorio nativa; no son necesarios para Preview ni para el instalador descargado. La app de
escritorio nativa agrega terminales gestionadas, operaciones con archivos locales y voz.
Consulta [primeros pasos](docs/es/getting-started.md) para la configuración completa y la
[arquitectura](desktop/README.es.md) para la estructura del código fuente.

## Qué incluye

| Ejemplo | Qué muestra |
| --- | --- |
| **My Dream Game** | Mr. Mak 64: un hub de juego ilustrado con pantalla de introducción, estudios de personajes, locaciones y un tablero de desarrollo. |
| **Creative MCP Connections** | Una lista corta de conexiones investigada, enlaces a fuentes y una lista de verificación práctica de configuración. |
| **Make Workspace Yours** | Primeros pasos, uso diario y cambios que se le pueden pedir a un agente. |
| **Arachne Character Lab** | Versiones 1 a 9, prompts guardados expandibles, 158 imágenes y ocho estudios de movimiento. |

Los ejemplos siguen visibles hasta que los archives. Crea tus propias tarjetas junto a
ellos, o archiva los cuatro cuando estés listo.

![Dentro de My Dream Game: el proyecto incluido Mr. Mak 64](docs/assets/workspace.png)

Los ajustes de texto de la terminal permiten mejorar la legibilidad. En los chats de agentes, Ctrl+C copia
el texto seleccionado; PowerShell mantiene el comportamiento normal de la shell. En macOS, ⌘C y ⌘V copian
y pegan, y Ctrl+C llega a la CLI como en Terminal.app.
Haz clic en enlaces web de chats o tarjetas para abrir el navegador predeterminado. Los chats nuevos de Codex y
Claude empiezan con esfuerzo `xhigh`; las elecciones de esfuerzo guardadas se conservan.
OpenCode mantiene su propia configuración de modelo y razonamiento.

## Evidencia opcional de entrega de assets

Las entregas de assets pueden llevar un manifiesto SHA-256 local. La
[herramienta de entrega de assets](scripts/asset-delivery/README.md), que funciona sin conexión, registra entradas y salidas
de una tarjeta sin cambiar las tarjetas existentes. La verificación comprueba la integridad de los archivos;
la aprobación visual y la preparación para el motor siguen siendo decisiones separadas.

## Skills para conservar

Veinte skills de proyecto cubren planificación, traspasos, informes del Workspace, referencias
de imágenes, generación con fal.ai, flujos de Higgsfield, hojas de personaje, modelado procedural
con Three.js, materiales, referencias de movimiento, animación de juegos en Blender, inspección
de video y configuración del dictado. Los flujos de juego cubren **VFX, UI, integración de
animaciones, diseño de niveles, audio y revisión visual nativa**. Lee el
[índice de skills](docs/es/skills.md), o lleva el ZIP de skills separado de la versión
a otro proyecto.

Las instrucciones mantenidas viven en `.agents/skills`. Las copias completas en
`.claude/skills` incluyen las mismas instrucciones y recursos. Ambos agentes reciben las
skills completas. Ejecuta `npm run skills:sync` después de editar la fuente mantenida.
Copia una skill junto con los recursos que referencia; mantén privados `.env`, los recibos de trabajos
y la configuración de cuentas.

## Voz y conexiones opcionales

Se puede trabajar por completo con los chats CLI. La nariz flotante agrega un asistente de voz
opcional: OpenAI Live proporciona la conexión de voz por API, y el
coordinador usa tu Codex CLI con sesión iniciada. El uso de la API de voz se factura aparte
de una suscripción CLI. El coordinador usa la configuración de modelo de Codex
salvo que definas `MRMAK_COORDINATOR_MODEL` en `.env`.

fal.ai, Higgsfield y otros proveedores son opcionales y usan tus propias cuentas.
La configuración MCP empieza vacía. El panel MCP explica dónde se configuran
las conexiones, incluidas las conexiones globales que ya tengan tus agentes.
La muestra de investigación es una lista corta, no una afirmación de que esas herramientas estén instaladas.

## Hazlo tuyo

Edita los archivos de ejemplo en `context/`, guarda las lecciones reutilizables en `knowledge/`
y los flujos de trabajo en `processes/`. El inglés es el idioma por defecto del contenido guardado;
pide otro idioma cuando lo necesites. El atajo para recuperar la ventana de la app
(tecla Win en Windows) y la omisión de permisos empiezan desactivados.

Las compilaciones de escritorio desde el código fuente admiten **Windows x64, Linux y macOS**. La app de Mac tiene
firma ad-hoc (sin notarizar) y es solo para Apple Silicon; consulta la [configuración y limitaciones en macOS](docs/es/macos.md) antes de instalar.
Consulta [personalización](docs/es/customization.md) y
[compartir tu versión](docs/es/sharing.md).

El código de la aplicación y la documentación original de los flujos están bajo licencia MIT.
Los materiales de skills de terceros incluidos conservan sus licencias originales. El contenido multimedia de ejemplo
se ofrece para aprender y remezclar; consulta los [avisos de terceros](THIRD_PARTY_NOTICES.md).

---

Mr. Mak es pequeño.

<img src="docs/assets/mr-mak.png" alt="Mr. Mak, un pequeño cerdito de peluche con sombrero negro" width="420">
