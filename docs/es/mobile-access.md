[English](../mobile-access.md) · **Español**

# Acceso móvil

El acceso móvil conecta un teléfono con los chats de agentes que corren en Mr. Mak Desktop.
La computadora conserva los procesos CLI, sus sesiones iniciadas y los archivos del proyecto. El
teléfono puede leer conversaciones, dictar borradores, enviar mensajes e imágenes, retomar un chat guardado,
iniciar un agente instalado y leer informes del Workspace.

## Primera conexión

1. Instala [Tailscale](https://tailscale.com/download) en la computadora y en el teléfono.
   Inicia sesión en la misma cuenta de Tailscale en ambos y mantenlos conectados.
2. Abre **Chats** de Mr. Mak y selecciona el **ícono del teléfono** en la barra superior.
3. Elige **Enable & show QR code**. Si Tailscale pide permiso para HTTPS,
   sigue su [configuración de Serve](https://tailscale.com/docs/features/tailscale-serve)
   e inténtalo de nuevo. En Windows, Tailscale puede requerir permiso de administrador
   para configurar Serve. No hace falta ejecutar los chats de agentes como administrador.
4. Abre la cámara o el lector de QR del teléfono y apúntalo al código en la pantalla
   de la computadora. Toca el enlace detectado para abrir el navegador. Pon un nombre al dispositivo y
   selecciona **Request connection**.
5. Compara el código de confirmación de seis dígitos en ambas pantallas y luego elige
   **Connect phone** en Chats. Un código QR por sí solo no concede acceso.
6. Después de conectar, toca Install cuando el navegador ofrezca la instalación, o abre los ajustes del teléfono para Install Mr. Mak. Not now descarta la invitación durante esta sesión del navegador; el botón de ajustes sigue disponible. También se puede usar el menú Instalar app o Agregar a pantalla de inicio del navegador (menú Compartir de Safari en iPhone). Si la
   app web instalada pide volver a conectar, ingresa el código de conexión de ocho dígitos que aparece
   bajo un código QR nuevo en el escritorio y confírmalo en la computadora.

Cada dueño conecta sus propios dispositivos. El acceso a los chats por texto no necesita un servidor
compartido de Mr. Mak, un dominio público ni una nueva clave de API de modelos. Siguen aplicándose los límites de las cuentas CLI.
El botón opcional del micrófono usa una API de transcripción facturada aparte.
Mr. Mak configura una ruta privada de Tailscale Serve en un puerto HTTPS disponible
entre 8443 y 8446. Conserva las rutas existentes y nunca activa Funnel.

## Usar el teléfono

- **Active / History:** selecciona una conversación. Los chats fijados aparecen primero.
- **Conversación:** mensajes recientes del usuario y del asistente desde el historial local
  de Codex o Claude. La salida de herramientas queda en la terminal. La vista se limita a la
  transcripción reciente; el historial nativo de la CLI permanece en la computadora.
- **Terminal:** la pantalla real de la CLI para cualquier agente compatible, con desplazamiento,
  copia y botones para Enter, Escape, las cuatro flechas, Tab y Detener. Usa izquierda
  y derecha para cambiar opciones en los menús de la CLI, incluido el esfuerzo de razonamiento. Las líneas anchas se desplazan
  hacia los lados para que abrir el teléfono no cambie el tamaño de la terminal del escritorio.
- **Cerrar chat:** usa la cruz en el encabezado del chat y confirma. Esto también
  cierra su pestaña en el escritorio y detiene ese proceso CLI. La conversación queda
  en **Historial**, donde se puede abrir y elegir **Resume chat**. Los demás chats
  siguen corriendo; el borrador no enviado del teléfono se conserva.
- **Enviar:** envía un prompt completo a la CLI seleccionada. Enter en el campo de
  texto del teléfono agrega un salto de línea; usa Enviar para mandarlo. El dictado del teclado
  funciona en el mismo campo.
- **Micrófono:** graba una idea, toca Detener y revisa la transcripción en
  el borrador. No envía un mensaje ni inicia una tarea del agente automáticamente.
- **Adjuntar imágenes:** sube una imagen a `inbox/attachments` en la computadora
  e inserta su ruta con el mensaje. Otros tipos de archivo y un gestor de archivos remoto
  completo no forman parte de esta versión.
- **Resultados:** lee las tarjetas activas del Workspace y sus pestañas HTML o Markdown.
  Las vistas previas HTML están aisladas y solo pueden leer su propia carpeta de informe y
  los estilos compartidos de informes. Las llamadas a API exclusivas del escritorio, los frames externos incrustados
  y los informes fuera del repositorio no están disponibles en este visor.

Seleccionar una pestaña, desplazarse o abrir un informe en el teléfono no selecciona
otra pestaña en el escritorio. El contenido de las conversaciones y la actividad de las tareas se comparten.
Leer un turno completado lo marca como visto en todos los dispositivos.

## Entrada de voz

1. En la computadora, completa la [configuración de voz local](#configuración-de-voz-local-en-la-computadora) opcional, o selecciona tu proveedor pago existente en los ajustes del teléfono.
2. Abre un chat en el teléfono y toca el micrófono junto al botón de adjuntos.
   Permite el acceso al micrófono. Usa la página HTTPS privada en Chrome o Safari.
3. Habla y luego toca **Detener**. Cada grabación está limitada a dos minutos.
4. Revisa o edita el texto y luego pulsa **Enviar** tú mismo.

Las instalaciones nuevas usan por defecto Whisper local y gratuito en la computadora, con CPU int8.
Las actualizaciones conservan el proveedor y el modelo anteriores. El teléfono
sube el audio por la conexión privada vinculada; la transcripción corre sin conexión en
la computadora después de la configuración. No se necesita clave de API ni crédito de transcripción. La PC
debe seguir encendida y accesible. El audio temporal del servidor se elimina después de cada
intento. Las grabaciones que todavía no se convirtieron en texto siguen recuperables en el
dispositivo de grabación hasta transcribirlas o descartarlas.

### Configuración de voz local en la computadora

Instala Python 3.10-3.12 (se recomienda 3.12). Desde la carpeta del repositorio en
Windows, usa estos comandos:

```sh
python scripts/setup-local-voice.py dictation
python scripts/setup-local-voice.py read-aloud
```

En macOS, invoca Python 3.12 por su nombre con versión. El `/usr/bin/python3` del sistema
es 3.9 y el `python3` por defecto de Homebrew suele ser más nuevo que 3.12. Cuando cualquiera de los dos
ejecuta el script, este cambia por sí solo a un Python 3.10-3.12 instalado (de Homebrew o
gestionado por uv), o se detiene mostrando el comando de instalación. También resuelve los
certificados faltantes del instalador de python.org. Con [Homebrew](https://brew.sh)
(o el instalador 3.12 de python.org en lugar de la primera línea):

```sh
brew install python@3.12
python3.12 scripts/setup-local-voice.py dictation
python3.12 scripts/setup-local-voice.py read-aloud
```

En Linux, usa cualquier Python 3.10-3.12, por ejemplo `python3` o `python3.12`.

En una Mac con Apple Silicon, el dictado local necesita macOS 14 o posterior y Leer
en voz alta necesita macOS 13 o posterior; el script se detiene con este mensaje en versiones anteriores.

Cada comando es opcional. Crea un entorno separado bajo `.cache`,
instala paquetes de Python con versiones fijas y verifica los archivos del modelo contra sumas
SHA-256. La descarga del modelo de Whisper ocupa unos 486 MB; el modelo de lectura y
las voces suman unos 142 MB, más las dependencias de Python. La configuración comprueba que el
modelo puede cargarse en la computadora. No reinicia Mr. Mak. Después, actualiza los ajustes
del teléfono y selecciona tu proveedor. Los wrappers de Windows PowerShell
`setup-local-dictation.ps1` y `setup-local-read-aloud.ps1` llaman a la misma configuración.
Abrir la app no descarga nada automáticamente.

Los chats del escritorio ofrecen un micrófono en la barra de herramientas del chat. La transcripción se pega
directamente en la entrada de la terminal sin pulsar Enter. El editor Mak del Workspace
también admite dictado; su botón Enviar sigue siendo una acción aparte. No se reasignan
atajos de teclado. Esta función es independiente de la conversación por voz Talk to Mak.

La transcripción local conserva el idioma detectado; no traduce.
Prueba nombres y frases en varios idiomas con tu propio micrófono antes de depender
de ella. Las variables opcionales `MRMAK_WHISPER_PYTHON` y `MRMAK_WHISPER_MODEL` apuntan a un
ejecutable de Python existente y a un directorio de modelo descargado.

Para cambiar entre Free y Paid, abre el **ícono del teléfono arriba a la derecha**.
En el escritorio abre **Phone settings**, que reúne vinculación, dispositivos y
voz a texto. En el móvil abre la misma elección de proveedor junto a los controles de instalación
y desconexión. **Ajustes → Speech-to-text** en el escritorio también la incluye.
Elige **Local Whisper · Free**, **OpenAI · Paid**, **OpenRouter · Paid** u **Off**.
La elección guardada se comparte entre el escritorio y todos los teléfonos vinculados, se actualiza al instante
y se aplica a la siguiente transcripción. Una solicitud en curso termina con
su proveedor existente. La configuración o las claves de API faltantes se muestran junto a la opción;
las claves solo se ingresan en el `.env` ignorado de la computadora.

Los proveedores pagos son opcionales. No hay un respaldo automático a un proveedor en la nube:

```dotenv
MRMAK_TRANSCRIBE_PROVIDER=openrouter
MRMAK_TRANSCRIBE_MODEL=openai/gpt-4o-transcribe
```

Para OpenAI directo, usa `openai` y `gpt-4o-transcribe`. Define el proveedor como
`off` para desactivar esta función del micrófono. `OPENROUTER_KEY` y `OPENAI_KEY` también
se aceptan como nombres de clave heredados. Vuelve a abrir la página móvil después de cambiar claves
o ajustes; el escritorio los lee sin reiniciar.

Las grabaciones detenidas se guardan en el teléfono hasta que la transcripción tenga éxito o
elijas **Discard recording**. Si la transcripción falla, usa **Transcribe
recording** para reintentar, o **Download audio** para guardar una copia. Cambiar de chat o
pasar la página a segundo plano detiene el micrófono y conserva la
grabación sin terminar en su chat original. Borrar los datos del navegador elimina los borradores
y grabaciones locales. Si el navegador no puede guardar audio, mantén la página abierta y
descárgalo antes de salir.

Los reintentos reutilizan una transcripción exitosa hasta por diez minutos mientras el servicio
de escritorio siga corriendo y su caché limitada la conserve. Después de reiniciar el escritorio
o de que expire la caché, reintentar vuelve a transcribir (con costo solo si se eligió explícitamente
un proveedor en la nube). La transcripción local usa un archivo de audio temporal en la
computadora y lo borra después del intento; las grabaciones pendientes quedan en el
almacenamiento del navegador del dispositivo que grabó.
El micrófono del teclado del teléfono sigue siendo una alternativa sin configurar
el servicio de transcripción de Mr. Mak.

## Conexiones y entrega

Mantén la computadora encendida, en línea y con Mr. Mak en ejecución. Minimizar u ocultar sus
ventanas no es problema. Cerrar Mr. Mak o dejar que la computadora entre en suspensión la deja
inaccesible; cerrar el teléfono no detiene a los agentes.

Después de un reinicio, abre Mr. Mak en la computadora y el mismo acceso directo móvil en
el teléfono. Se reutiliza la vinculación guardada. Tailscale debe estar conectado en ambos
dispositivos; abrir Mr. Mak restaura su ruta privada. Si Tailscale no estaba listo
cuando Mr. Mak inició, vuelve a activar el acceso móvil desde el panel del teléfono en Chats.
Mr. Mak no se agrega automáticamente al inicio del sistema operativo.
En Android, usa la opción de VPN siempre activa del sistema para Tailscale si quieres que
inicie con el teléfono; algunos dispositivos también necesitan permiso de inicio automático en segundo plano.
Consulta [ajustes de VPN en Android](https://developer.android.com/develop/connectivity/vpn#always-on)
y [Tailscale en Windows](https://tailscale.com/docs/how-to/run-unattended).

Los borradores quedan en el teléfono, por chat. Después de perder la conexión, **Retry** comprueba el
mismo ID de mensaje. La computadora guarda un comprobante de entrega antes de escribir en la
terminal. **Delivered to terminal** confirma la escritura en la terminal, no que un
agente haya aceptado o completado la tarea. Si la entrega es incierta, revisa la
terminal antes de desbloquear el borrador para un nuevo intento. Las pulsaciones de teclado en la terminal
sin sincronizar deben ingresarse desde un solo dispositivo a la vez.

El botón del teléfono en Chats muestra los dispositivos conectados y vinculados. **Disconnect**
revoca un dispositivo y cierra sus conexiones. **Turn off mobile access** detiene
la superficie móvil sin detener los chats de agentes; los dispositivos vinculados pueden reconectarse
cuando se vuelve a activar. Los códigos de vinculación expiran a los cinco minutos. La vinculación
de un dispositivo expira a los 180 días y se puede renovar con un código QR nuevo.

El acceso móvil está desactivado por defecto. Las credenciales de los dispositivos se guardan como hashes en
el estado de ejecución ignorado; el teléfono guarda su propia cookie de sesión HttpOnly.
Nunca recibe el token de control del escritorio ni las claves de API de modelos. Un teléfono vinculado
puede pedir a los agentes que actúen con sus permisos existentes, así que desconecta un dispositivo
perdido desde Chats o quítalo de tu cuenta de Tailscale.

## Desarrollar y comprobar el cliente móvil

La entrada React móvil es `src/mobile/`. El servicio aislado es
`desktop/service/mobile.mjs`, con adaptadores separados para Tailscale, transcripciones e
informes. Solo escucha en loopback. La API administrativa del escritorio gestiona la
vinculación; la API móvil expone acciones seleccionadas de chat e informes de solo lectura.

Ejecuta `npm test` para vinculación, comprobaciones de origen, recuperación de entregas, límites de informes
y propiedad de rutas. Después de `npm run build`, ejecuta
`node desktop/service/test/mobile-ui.mjs` para comprobaciones de navegador con dos clientes. Estas
pruebas usan un transporte aislado y procesos CLI simulados, sin tocar tu
configuración de Tailscale ni iniciar una solicitud a un modelo. Aun así se necesita un teléfono real y una sesión de Tailscale
para verificar la conexión remota completa en tu red.

La actividad reciente en Conversación del móvil empieza contraída. Toca su encabezado para expandir
o contraer los últimos nombres y estados de herramientas. La actualización automática conserva la elección
actual; abrir otro chat empieza contraído.

Conversación muestra imágenes PNG, JPEG, WebP, GIF y BMP compartidas explícitamente en
mensajes de Claude/Codex, enlaces de imagen Markdown y resultados estructurados de herramientas de imagen.
Toca una imagen para abrir un visor aparte a pantalla completa. Pellizca para hacer zoom,
arrastra para desplazarte, toca dos veces para hacer zoom o restablecer, o usa los botones de zoom. Cerrar vuelve
a la misma conversación. Descargar guarda la imagen. Las imágenes locales se sirven
por la conexión vinculada con un permiso de archivo que expira y es específico del dispositivo y del chat;
las imágenes faltantes o no compatibles muestran un aviso de no disponible. Los mensajes que solo tienen imágenes
se conservan. Las URL de imágenes externas no se descargan, y los píxeles que solo existen en la terminal
sin un archivo guardado o un registro de imagen en la transcripción no se pueden recuperar.

Un ícono de altavoz aparece una vez al final del último mensaje del agente, después de su
contenido multimedia. Tócalo para leer; durante la reproducción se convierte en Pausa/Reanudar, con un ícono Detener.
Lee tu mensaje más reciente y todos los mensajes del agente que siguen hasta esa
respuesta, con controles de Pausa, Reanudar y Detener. Las respuestas nuevas no se agregan a una lectura
que ya está sonando; toca Leer en voz alta otra vez para incluirlas.
La voz se genera localmente en la computadora con Kokoro ONNX. Los ajustes del teléfono
tienen exactamente Michael (hombre, EE. UU.) y Emma (mujer, Reino Unido); la elección se guarda en ese
teléfono. No se usan las listas de voces del navegador ni otros acentos. No se necesita clave de API ni proveedor
de voz pago. Ejecuta una vez en la computadora el comando read-aloud de la
[configuración de voz local](#configuración-de-voz-local-en-la-computadora)
(`python3.12 scripts/setup-local-voice.py read-aloud` en macOS) para instalar un
entorno de CPU aislado y descargar el modelo oficial.
Después de la configuración, la inferencia es sin conexión; el texto y el audio no se envían a un proveedor en la nube.
El teléfono recibe segmentos WAV cortos por su sesión vinculada y autenticada.
El audio y el texto se mantienen en memoria y se descartan después de reproducirse. Detener cancela
la síntesis en curso; desconectar el teléfono la revoca. Se omiten el código, las tablas y
las imágenes. La reproducción solo empieza tras un toque y se detiene al cambiar de
chat, abrir Terminal o salir de Conversación.

Definiciones de voces: [catálogo de voces de Kokoro](https://huggingface.co/hexgrad/Kokoro-82M/blob/main/VOICES.md).

Al volver de la suspensión del teléfono, la conexión obsoleta se reemplaza de inmediato sin
recargar la app. La vista actual, el chat seleccionado, el borrador y la posición de desplazamiento se mantienen
en su lugar. Los eventos de conexión y de página restaurada usan la misma recuperación; las respuestas
de arranque antiguas se ignoran, los intentos de conexión tienen un plazo y los intentos fallidos
se repiten mientras la app está visible. El botón de la nariz también reconecta en el lugar.

Los videos locales grabados y enlazados explícitamente en Conversación (MP4, WebM, MOV o M4V)
aparecen como tarjetas de video. Toca para abrir un reproductor aparte con controles de reproducción,
búsqueda y descarga. Los archivos de video se transmiten con soporte de rangos de bytes y un límite de 512 MB,
usando los mismos permisos por dispositivo vinculado y chat que las imágenes. La reproducción depende de que
el teléfono admita el códec grabado. No se descargan las URL de video externas ni rutas
arbitrarias impresas en los registros de herramientas de la terminal. Los agentes deben compartir
las grabaciones como un enlace Markdown al archivo guardado.

El móvil guarda en ese teléfono el chat seleccionado, la sección de la app, la elección del Historial y el modo
Conversación/Terminal de cada chat. Recargar o volver a abrir restaura el
chat y el modo guardados; Conversación recuerda si estabas siguiendo la
última respuesta o leyendo el historial. Chats vuelve al chat seleccionado después de
Workspace; Back to chats abre la lista. Los chats que ya no existen vuelven a la lista sin
seleccionar otro agente. Los borradores siguen siendo por chat, y la selección del escritorio sigue siendo
independiente. Disconnect borra el estado de navegación móvil guardado. Workspace recuerda por su cuenta la tarjeta seleccionada, la pestaña de informe de cada tarjeta
y la posición de lectura. Cambiar de sección mantiene ambas vistas montadas. Los lectores HTML
restauran su ruta, ventana y posiciones de desplazamiento anidadas guardadas al volver a abrirse
mediante un puente de mensajes del sandbox, con comprobación de origen y limitado al desplazamiento. El modo Terminal
también recuerda su línea del historial de desplazamiento y el ajuste de tamaño. Usa All workspaces para volver
a la lista de tarjetas; tocar Workspace en sí nunca cierra el informe seleccionado.

Cada mensaje móvil a un agente incluye una pequeña referencia a la tarjeta del Workspace
y a la pestaña de informe seleccionadas. Incluye la página del visor y el ancla de sección
cuando el puente del informe los ha informado; los servicios más antiguos solo aportan la página de entrada
del informe. Son referencias del visor, no rutas del sistema de archivos. El contenido del informe
no se copia ni se lee para armar esta nota. La nota indica que ese es el Workspace actual
en el que estás trabajando y le dice al agente que lo lea, lo abra o lo investigue solo
cuando tu solicitud lo pida. Al quitar la selección del Workspace se envía una referencia
nula, así una tarjeta anterior deja de tratarse como la actual.

Los reintentos de entrega conservan la referencia original al Workspace, incluso después de cambiar
de página o recargar. La nota automática queda en la transcripción nativa del agente,
mientras el móvil muestra y lee en voz alta tu mensaje original. La entrada de shell y los
comandos slash nativos se envían sin cambios. Los mensajes del escritorio siguen siendo independientes.
