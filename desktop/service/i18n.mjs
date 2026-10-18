// Translation of user-facing service text. English is the key and the default:
// unknown text passes through unchanged. Applied where text leaves the service
// for a person (HTTP errors, broadcasts, mobile responses), never to prompts or
// tool results sent to agents and the coordinator model.

const es = {
  // Requests and access
  'Unexpected error': 'Error inesperado',
  'Not allowed': 'No permitido',
  'Not found': 'No encontrado',
  'Unexpected host': 'Host inesperado',
  'Unexpected origin': 'Origen inesperado',
  'Open Mr. Mak from its desktop launcher': 'Abre Mr. Mak desde su acceso directo de escritorio',
  'Endpoint not found': 'Ruta no encontrada',
  'File not found': 'Archivo no encontrado',
  'Request is too large': 'La solicitud es demasiado grande',
  'Invalid JSON': 'JSON no válido',
  'JSON is required': 'Se requiere JSON',
  'Path is outside this location': 'La ruta está fuera de esta ubicación',
  'Link leaves this location': 'El enlace sale de esta ubicación',
  'Cross-site requests are not allowed': 'No se permiten solicitudes entre sitios',
  'Authentication required': 'Se requiere autenticación',
  'Authentication failed': 'La autenticación falló',
  'Reconnect to restore the terminal screen': 'Reconéctate para restaurar la pantalla de la terminal',
  'Reconnect': 'Reconectar',
  'Disconnected': 'Desconectado',
  'Mr. Mak is closing.': 'Mr. Mak se está cerrando.',
  'Mr. Mak is shutting down': 'Mr. Mak se está cerrando',

  // Settings, files and attachments
  'Choose a supported speech-to-text provider.': 'Elige un proveedor de voz a texto compatible.',
  'Choose files of 1 GB or less.': 'Elige archivos de 1 GB o menos.',
  'Choose an image smaller than 25 MB.': 'Elige una imagen de menos de 25 MB.',
  'Choose an image file smaller than 25 MB.': 'Elige un archivo de imagen de menos de 25 MB.',
  'Choose a project from the list.': 'Elige un proyecto de la lista.',
  'Choose a local file or folder.': 'Elige un archivo o una carpeta local.',
  'Invalid file picker request.': 'Solicitud del selector de archivos no válida.',
  'Write a message or attach a file.': 'Escribe un mensaje o adjunta un archivo.',
  'Write a message or attach an image.': 'Escribe un mensaje o adjunta una imagen.',
  'Unknown window action': 'Acción de ventana desconocida',
  'A voice session and captions are required.': 'Se requieren una sesión de voz y subtítulos.',
  'A microphone connection is required': 'Se requiere una conexión de micrófono',
  'Add OPENAI_API_KEY to the repository .env, then press the nose again.': 'Agrega OPENAI_API_KEY al .env del repositorio y vuelve a presionar la nariz.',
  'Session could not be started': 'No se pudo iniciar la sesión',
  'Attach a PNG, JPEG, WebP, GIF or BMP image.': 'Adjunta una imagen PNG, JPEG, WebP, GIF o BMP.',
  'The attachments folder must stay inside MR-MAK.': 'La carpeta de adjuntos debe quedar dentro de MR-MAK.',
  'Attach up to 12 images per message.': 'Adjunta hasta 12 imágenes por mensaje.',
  'Choose an image uploaded through Mr. Mak.': 'Elige una imagen subida con Mr. Mak.',
  'Choose between 1 and 100 files or folders.': 'Elige entre 1 y 100 archivos o carpetas.',
  'Choose an existing file or folder with an absolute path.': 'Elige un archivo o una carpeta existente con una ruta absoluta.',
  'Choose a regular file or folder.': 'Elige un archivo o una carpeta normal.',
  'Choose a destination folder.': 'Elige una carpeta de destino.',
  'This file name cannot be used on this computer.': 'Este nombre de archivo no se puede usar en esta computadora.',
  'Choose a folder to copy files into.': 'Elige una carpeta donde copiar los archivos.',
  'Too many copies with this name. Rename the file and try again.': 'Hay demasiadas copias con este nombre. Renombra el archivo e inténtalo de nuevo.',
  'Choose between 1 and 100 files or folders to drag.': 'Elige entre 1 y 100 archivos o carpetas para arrastrar.',
  'Drag a regular file or folder from the tree.': 'Arrastra un archivo o una carpeta normal desde el árbol.',
  'Choose a file or folder.': 'Elige un archivo o una carpeta.',
  'A drive root cannot be changed here.': 'La raíz de una unidad no se puede cambiar aquí.',
  'The MR-MAK repository and its parent folders cannot be deleted here.': 'El repositorio MR-MAK y sus carpetas superiores no se pueden eliminar aquí.',
  'Move individual files here. Use your file manager for folder or link moves.': 'Mueve archivos individuales aquí. Usa tu administrador de archivos para mover carpetas o enlaces.',
  'A file with this name already exists in that folder. Nothing was moved.': 'Ya existe un archivo con este nombre en esa carpeta. No se movió nada.',
  'The source changed during the move. Try again after it finishes saving.': 'El origen cambió durante el movimiento. Inténtalo de nuevo cuando termine de guardarse.',
  'Choose a file to preview': 'Elige un archivo para previsualizar',
  'This text file is larger than the 2 MB preview limit.': 'Este archivo de texto supera el límite de vista previa de 2 MB.',
  'Open this file in its desktop application.': 'Abre este archivo en su aplicación de escritorio.',
  'Choose a Markdown file of up to 2 MB with a current revision.': 'Elige un archivo Markdown de hasta 2 MB con una revisión actual.',
  'Only Markdown files can be edited.': 'Solo se pueden editar archivos Markdown.',
  'This file changed on disk. Your draft is kept. Reopen the file to compare before saving.': 'Este archivo cambió en el disco. Tu borrador se conserva. Vuelve a abrir el archivo para comparar antes de guardar.',
  'This file changed while saving. Your draft is kept; reopen the file to compare.': 'Este archivo cambió mientras se guardaba. Tu borrador se conserva; vuelve a abrir el archivo para comparar.',
  'Preview not found': 'Vista previa no encontrada',
  'Private application files cannot be loaded by reports': 'Los informes no pueden cargar archivos privados de la aplicación',
  'Media unavailable': 'Contenido multimedia no disponible',
  'Image unavailable': 'Imagen no disponible',

  // Chats, tabs and groups
  'Chat no longer exists': 'El chat ya no existe',
  'Close a tab before opening another (80 open tab limit). Closed chats remain in History.': 'Cierra una pestaña antes de abrir otra (límite de 80 pestañas abiertas). Los chats cerrados quedan en el Historial.',
  'Close a tab before opening another.': 'Cierra una pestaña antes de abrir otra.',
  'Reasoning effort must be medium, high, xhigh or max.': 'El esfuerzo de razonamiento debe ser medium, high, xhigh o max.',
  'Working folder must be a directory': 'La carpeta de trabajo debe ser un directorio',
  'Choose an agent and its native conversation ID.': 'Elige un agente y el ID de su conversación nativa.',
  'Use the Antigravity conversation UUID from its /resume picker.': 'Usa el UUID de la conversación de Antigravity de su selector /resume.',
  'The chat was closed before its terminal started.': 'El chat se cerró antes de que iniciara su terminal.',
  'This terminal is stopped. Resume it before sending a message.': 'Esta terminal está detenida. Reanúdala antes de enviar un mensaje.',
  'Mr. Mak can send messages to agent chats; type shell commands directly in the local shell.': 'Mr. Mak puede enviar mensajes a chats de agentes; escribe los comandos de shell directamente en la shell local.',
  'Message is too large': 'El mensaje es demasiado grande',
  'Message is too large.': 'El mensaje es demasiado grande.',
  'You are typing in this chat. Wait a moment before sending through Mr. Mak.': 'Estás escribiendo en este chat. Espera un momento antes de enviar con Mr. Mak.',
  'Choose a valid tab color.': 'Elige un color de pestaña válido.',
  'Choose a valid tab position.': 'Elige una posición de pestaña válida.',
  'Only open tabs can be reordered.': 'Solo se pueden reordenar las pestañas abiertas.',
  'Pinned tabs stay together. Move a tab within the pinned or the unpinned tabs.': 'Las pestañas fijadas van juntas. Mueve la pestaña dentro de las fijadas o de las no fijadas.',
  'Pinned tabs stay together. Move a group within the pinned or the unpinned tabs.': 'Las pestañas fijadas van juntas. Mueve el grupo dentro de las fijadas o de las no fijadas.',
  'That group has no open tabs.': 'Ese grupo no tiene pestañas abiertas.',
  'Name the group.': 'Ponle nombre al grupo.',
  'That group no longer exists.': 'Ese grupo ya no existe.',
  'The native conversation could not be located. Your last screen is retained; use New chat → Resume to connect its CLI ID.': 'No se encontró la conversación nativa. Tu última pantalla se conserva; usa Nuevo chat → Reanudar para conectar su ID de la CLI.',
  'The terminal is still closing. Try reopening it in a moment.': 'La terminal todavía se está cerrando. Intenta reabrirla en un momento.',
  'Use an English chat name. Messages can be in any language.': 'Usa un nombre de chat en inglés. Los mensajes pueden estar en cualquier idioma.',
  'Keep the group name under 60 characters.': 'El nombre del grupo debe tener menos de 60 caracteres.',
  'Use an English group name. Messages can be in any language.': 'Usa un nombre de grupo en inglés. Los mensajes pueden estar en cualquier idioma.',
  'Choose a descriptive English task title before opening the chat, such as "Dream Game Combat" or "Workspace Files". Generic titles like "Conversation 1" are not allowed for coordinator-created chats.': 'Elige un título de tarea descriptivo en inglés antes de abrir el chat, como "Dream Game Combat" o "Workspace Files". No se permiten títulos genéricos como "Conversation 1" en chats creados por el coordinador.',
  'This prompt changed or was already answered. Check the terminal.': 'Esta pregunta cambió o ya se respondió. Revisa la terminal.',
  'Choose one of the listed options.': 'Elige una de las opciones de la lista.',
  'Codex CLI is not installed. Install it and sign in once to use Mr. Mak.': 'Codex CLI no está instalado. Instálalo e inicia sesión una vez para usar Mr. Mak.',
  'This conversation ID is not valid. Copy it again from the CLI.': 'Este ID de conversación no es válido. Cópialo de nuevo desde la CLI.',
  'The first message for a new chat is not valid.': 'El primer mensaje para un chat nuevo no es válido.',
  'Unknown agent': 'Agente desconocido',
  'Only a new Codex or Claude chat can start with a message.': 'Solo un chat nuevo de Codex o Claude puede empezar con un mensaje.',
  'Choose an absolute folder.': 'Elige una carpeta absoluta.',
  'The local shell is not available on this computer': 'La shell local no está disponible en esta computadora',
  'Invalid Antigravity chat ID.': 'ID de chat de Antigravity no válido.',
  'OpenCode is not installed. Install it and connect a provider in OpenCode first.': 'OpenCode no está instalado. Instálalo y conecta primero un proveedor en OpenCode.',
  'This OpenCode version is not supported yet. Mr. Mak supports OpenCode 1.x and 2.x.': 'Esta versión de OpenCode todavía no es compatible. Mr. Mak admite OpenCode 1.x y 2.x.',
  'Use an OpenCode session ID starting with ses_.': 'Usa un ID de sesión de OpenCode que empiece con ses_.',
  'OPENCODE_CONFIG_CONTENT must contain valid JSON before starting OpenCode in Mr. Mak.': 'OPENCODE_CONFIG_CONTENT debe contener JSON válido antes de iniciar OpenCode en Mr. Mak.',
  'OPENCODE_CONFIG_CONTENT must be a JSON object.': 'OPENCODE_CONFIG_CONTENT debe ser un objeto JSON.',

  // Message editing
  'Editing a sent message is available in Claude Code chats.': 'Editar un mensaje enviado está disponible en los chats de Claude Code.',
  'This terminal is stopped. Resume it before editing a message.': 'Esta terminal está detenida. Reanúdala antes de editar un mensaje.',
  'This message has no text to find in the rewind list. Use Esc Esc in the terminal.': 'Este mensaje no tiene texto para buscar en la lista de retroceso. Usa Esc Esc en la terminal.',
  'Wait for the reply to finish, or stop it, before editing a message.': 'Espera a que termine la respuesta, o detenla, antes de editar un mensaje.',
  'A message in this chat is already being edited.': 'Ya se está editando un mensaje en este chat.',
  'This message is no longer in the conversation.': 'Este mensaje ya no está en la conversación.',
  'Answer the question in the conversation first.': 'Primero responde la pregunta en la conversación.',
  'The rewind list did not open. Check the terminal.': 'La lista de retroceso no se abrió. Revisa la terminal.',
  'This message was not found in the rewind list. Use Esc Esc in the terminal.': 'Este mensaje no está en la lista de retroceso. Usa Esc Esc en la terminal.',
  'Several messages match this shortened label. Use Esc Esc in the terminal to choose the message.': 'Varios mensajes coinciden con esta etiqueta abreviada. Usa Esc Esc en la terminal para elegir el mensaje.',
  'Claude Code did not offer to restore the conversation. Check the terminal.': 'Claude Code no ofreció restaurar la conversación. Revisa la terminal.',
  'The rewind did not finish. Check the terminal.': 'El retroceso no terminó. Revisa la terminal.',

  // Handoff
  'A handoff is available for Claude Code and Codex chats.': 'El traspaso está disponible para chats de Claude Code y Codex.',
  'Reconnect this chat before asking for a handoff.': 'Reconecta este chat antes de pedir un traspaso.',
  'Wait for the agent to finish its current turn.': 'Espera a que el agente termine su turno actual.',
  'The agent did not reply with a handoff. Its answer is in the chat; try again or continue there.': 'El agente no respondió con un traspaso. Su respuesta está en el chat; inténtalo de nuevo o continúa ahí.',
  'The chat stopped before its handoff was written.': 'El chat se detuvo antes de escribir su traspaso.',
  'No handoff after 15 minutes. Check the chat; it may be waiting for you.': 'No hay traspaso después de 15 minutos. Revisa el chat; puede que esté esperándote.',

  // Coordinator and quick actions
  'To enable bypass, choose it yourself in New chat or Settings. Mr. Mak cannot raise the selected permission level.': 'Para omitir permisos, elígelo tú en Nuevo chat o en Ajustes. Mr. Mak no puede subir el nivel de permisos elegido.',
  'Workspace report does not exist': 'El informe de Workspace no existe',
  'Unknown coordinator tool': 'Herramienta del coordinador desconocida',
  'Choose an agent and a task title.': 'Elige un agente y un título de tarea.',
  'Choose Codex, Claude Code, Antigravity, OpenCode or Kimi.': 'Elige Codex, Claude Code, Antigravity, OpenCode o Kimi.',
  'Choose a valid working folder.': 'Elige una carpeta de trabajo válida.',
  'Choose a valid chat permission setting.': 'Elige un ajuste de permisos de chat válido.',
  'The coordinator stopped before this operation was confirmed. Inspect the target chat before retrying.': 'El coordinador se detuvo antes de confirmar esta operación. Revisa el chat de destino antes de reintentar.',
  'Codex coordinator is disconnected': 'El coordinador de Codex está desconectado',
  'Codex coordinator closed. Your terminal chats are still running.': 'El coordinador de Codex se cerró. Tus chats de terminal siguen en ejecución.',
  'A request ID and a non-empty message are required': 'Se requieren un ID de solicitud y un mensaje no vacío',
  'The coordinator timed out. Inspect chats before retrying; actions may already have been delivered.': 'Se agotó el tiempo del coordinador. Revisa los chats antes de reintentar; puede que las acciones ya se hayan entregado.',
  'The app restarted during this action. Check its current state before repeating it.': 'La app se reinició durante esta acción. Revisa su estado actual antes de repetirla.',
  'Done.': 'Listo.',
  'Workspace is open.': 'Workspace está abierto.',
  'There are no open chats.': 'No hay chats abiertos.',

  // Workspace, context and knowledge
  'Workspace registry is not ready.': 'El registro de Workspace no está listo.',
  'Workspace card was not found.': 'No se encontró la tarjeta de Workspace.',
  'Use a date in YYYY-MM-DD format.': 'Usa una fecha con formato AAAA-MM-DD.',
  'Workspace is being updated by another task. Try the change again.': 'Otra tarea está actualizando Workspace. Vuelve a intentar el cambio.',
  'Choose a status, category or pin change.': 'Elige un cambio de estado, categoría o fijado.',
  'Use active, done or archived status.': 'Usa el estado active, done o archived.',
  'Pinned must be true or false.': 'Fijado debe ser true o false.',
  'Use a category with lowercase letters, numbers and hyphens.': 'Usa una categoría con minúsculas, números y guiones.',
  'Read a repository context document or an installed skill. Private runtime and credential files are excluded.': 'Lee un documento de contexto del repositorio o una skill instalada. Se excluyen los archivos privados de ejecución y de credenciales.',
  'Choose a context document smaller than 2 MB.': 'Elige un documento de contexto de menos de 2 MB.',
  'Use a short context search phrase.': 'Usa una frase de búsqueda de contexto corta.',
  'The rg context search tool is unavailable.': 'La herramienta de búsqueda de contexto rg no está disponible.',
  'Use a short knowledge search phrase.': 'Usa una frase de búsqueda de conocimiento corta.',
  'Knowledge references must be relative to their provider.': 'Las referencias de conocimiento deben ser relativas a su proveedor.',
  'Knowledge reference leaves its provider root.': 'La referencia de conocimiento sale de la raíz de su proveedor.',
  'Only Markdown knowledge documents can be read.': 'Solo se pueden leer documentos de conocimiento en Markdown.',
  'An external provider and work-item ID are required.': 'Se requieren un proveedor externo y un ID de elemento de trabajo.',
  'Project start must be a directory.': 'El inicio del proyecto debe ser un directorio.',

  // MCP and native shortcut
  'Two connection checks are running. Wait for one to finish.': 'Hay dos comprobaciones de conexión en curso. Espera a que termine una.',
  'MCP configuration was not found. Refresh the list.': 'No se encontró la configuración MCP. Actualiza la lista.',
  'This connection is disabled, managed by its host, or needs configuration.': 'Esta conexión está desactivada, la administra su host o necesita configuración.',
  'Check timed out': 'Se agotó el tiempo de la comprobación',
  'Configuration could not be read. Check its format and file permissions.': 'No se pudo leer la configuración. Revisa su formato y los permisos del archivo.',
  'Choose whether the shortcut should show Mr. Mak.': 'Elige si el atajo debe mostrar Mr. Mak.',
  'The optional system shortcut is not available.': 'El atajo opcional del sistema no está disponible.',
  'A shortcut change is already in progress.': 'Ya hay un cambio de atajo en curso.',
  'The native desktop did not confirm the change. Check the shortcut setting again.': 'El escritorio nativo no confirmó el cambio. Revisa de nuevo el ajuste del atajo.',
  'Shortcut unavailable': 'Atajo no disponible',

  // Read aloud and dictation
  'Local speech generation failed. Try again.': 'Falló la generación de voz local. Inténtalo de nuevo.',
  'Local speech stopped. Try again.': 'La voz local se detuvo. Inténtalo de nuevo.',
  'Choose Michael or Emma and a short text segment.': 'Elige Michael o Emma y un fragmento de texto corto.',
  'Speech is busy. Try again in a moment.': 'La voz está ocupada. Inténtalo de nuevo en un momento.',
  'Set up local Read aloud on your computer first.': 'Primero configura Leer en voz alta local en tu computadora.',
  'Playback cancelled.': 'Reproducción cancelada.',
  'Local speech timed out. Retry a shorter reply.': 'Se agotó el tiempo de la voz local. Reintenta con una respuesta más corta.',
  'Playback stopped.': 'Reproducción detenida.',
  'Local transcription could not finish. Retry or record a shorter message.': 'La transcripción local no pudo terminar. Reintenta o graba un mensaje más corto.',
  'This phone is disconnected.': 'Este teléfono está desconectado.',
  'A recording ID is required.': 'Se requiere un ID de grabación.',
  'This audio format is not supported. Use your keyboard microphone instead.': 'Este formato de audio no es compatible. Usa el micrófono de tu teclado.',
  'Recording is too large. Record a shorter message.': 'La grabación es demasiado grande. Graba un mensaje más corto.',
  'The recording is empty or damaged. Try recording again.': 'La grabación está vacía o dañada. Intenta grabar de nuevo.',
  'This recording ID belongs to different audio.': 'Este ID de grabación pertenece a otro audio.',
  'Another recording is being transcribed. Wait a moment and retry.': 'Se está transcribiendo otra grabación. Espera un momento y reintenta.',
  'Transcription is busy. Wait a moment and retry.': 'La transcripción está ocupada. Espera un momento y reintenta.',
  'Please wait a minute before transcribing another recording.': 'Espera un minuto antes de transcribir otra grabación.',
  'Local Whisper is not installed. Run the local dictation setup on your computer.': 'Whisper local no está instalado. Ejecuta la configuración de dictado local en tu computadora.',
  'Voice input needs OPENROUTER_API_KEY or OPENAI_API_KEY in the computer workspace .env. Your keyboard microphone still works.': 'La entrada de voz necesita OPENROUTER_API_KEY u OPENAI_API_KEY en el .env del workspace de la computadora. El micrófono de tu teclado sigue funcionando.',
  'No speech was recognized. Try recording again.': 'No se reconoció voz. Intenta grabar de nuevo.',
  'The transcript is too long for one message.': 'La transcripción es demasiado larga para un mensaje.',
  'Transcription could not finish. Your recording is kept on this phone; try again.': 'La transcripción no pudo terminar. Tu grabación se conserva en este teléfono; inténtalo de nuevo.',
  'The transcription API key was rejected. Check it on your computer.': 'Se rechazó la clave de API de transcripción. Revísala en tu computadora.',
  'The transcription account has reached its credit or usage limit. Retry later.': 'La cuenta de transcripción alcanzó su límite de crédito o de uso. Reintenta más tarde.',
  'The transcription provider could not process this recording. Retry or record a shorter message.': 'El proveedor de transcripción no pudo procesar esta grabación. Reintenta o graba un mensaje más corto.',
  'Local Whisper · Free': 'Whisper local · Gratis',
  'OpenAI · Paid': 'OpenAI · De pago',
  'OpenRouter · Paid': 'OpenRouter · De pago',
  'Off': 'Desactivado',
  'Runs on your computer. No API charges.': 'Funciona en tu computadora. Sin cargos de API.',
  'Uses your OpenAI API credit.': 'Usa tu crédito de la API de OpenAI.',
  'Uses your OpenRouter API credit.': 'Usa tu crédito de la API de OpenRouter.',
  'Microphone dictation disabled.': 'Dictado por micrófono desactivado.',
  'Michael · US man': 'Michael · hombre, EE. UU.',
  'Emma · UK woman': 'Emma · mujer, Reino Unido',

  // Mobile access
  'Enable mobile access first.': 'Primero activa el acceso móvil.',
  'Too many pairing attempts. Wait a minute and try again.': 'Demasiados intentos de vinculación. Espera un minuto e inténtalo de nuevo.',
  'This QR code has expired or was already used. Create a new one in Chats.': 'Este código QR venció o ya se usó. Crea uno nuevo en Chats.',
  'Disconnect an old device before adding another.': 'Desconecta un dispositivo antiguo antes de agregar otro.',
  'This connection request has expired.': 'Esta solicitud de conexión venció.',
  'Connect this phone from the QR code in Mr. Mak Chats.': 'Conecta este teléfono con el código QR de Chats en Mr. Mak.',
  'This phone is disconnected. Scan a new QR code in Chats.': 'Este teléfono está desconectado. Escanea un código QR nuevo en Chats.',
  'Mobile access is off. Enable it in Mr. Mak Chats.': 'El acceso móvil está desactivado. Actívalo en Chats de Mr. Mak.',
  'Mobile access supports agent chats.': 'El acceso móvil admite chats de agentes.',
  'This mobile action is not available.': 'Esta acción móvil no está disponible.',
  'A message ID is required.': 'Se requiere un ID de mensaje.',
  'This message ID already belongs to different text.': 'Este ID de mensaje ya pertenece a otro texto.',
  'Resume this chat before sending a message.': 'Reanuda este chat antes de enviar un mensaje.',
  'An attachment expired. Attach the image again.': 'Un adjunto venció. Vuelve a adjuntar la imagen.',
  'The chat stopped before delivery.': 'El chat se detuvo antes de la entrega.',
  'This phone was disconnected before delivery.': 'Este teléfono se desconectó antes de la entrega.',
  'Check the terminal before sending again. Delivery could not be confirmed.': 'Revisa la terminal antes de volver a enviar. No se pudo confirmar la entrega.',
  'Connection request expired. Scan a new QR code.': 'La solicitud de conexión venció. Escanea un código QR nuevo.',
  'Too many pending images. Try again later.': 'Hay demasiadas imágenes pendientes. Inténtalo más tarde.',
  'Choose an installed agent.': 'Elige un agente instalado.',
  'Phone disconnected': 'Teléfono desconectado',
  'Unknown terminal key.': 'Tecla de terminal desconocida.',
  'Mobile action not found': 'Acción móvil no encontrada',
  'Mobile access disabled': 'Acceso móvil desactivado',
  'Device disconnected': 'Dispositivo desconectado',
  'This report is unavailable on mobile.': 'Este informe no está disponible en el móvil.',
  'This report folder is outside the Workspace repository.': 'La carpeta de este informe está fuera del repositorio de Workspace.',
  'Report not found': 'Informe no encontrado',
  'Open this type of report on your computer.': 'Abre este tipo de informe en tu computadora.',
  'Reopen this report to refresh its preview.': 'Vuelve a abrir este informe para actualizar su vista previa.',
  'Invalid report path': 'Ruta de informe no válida',
  'This file is outside the selected report.': 'Este archivo está fuera del informe seleccionado.',
  'This file type is unavailable in report previews.': 'Este tipo de archivo no está disponible en las vistas previas de informes.',
  'Open Tailscale and sign in on this computer.': 'Abre Tailscale e inicia sesión en esta computadora.',
  'Install Tailscale on this computer and your phone, then sign in to the same account.': 'Instala Tailscale en esta computadora y en tu teléfono, e inicia sesión con la misma cuenta.',
  'Open Tailscale, sign in, then check the connection again.': 'Abre Tailscale, inicia sesión y vuelve a comprobar la conexión.',
  'Tailscale needs an HTTPS device name. Enable MagicDNS in your Tailscale account.': 'Tailscale necesita un nombre de dispositivo HTTPS. Activa MagicDNS en tu cuenta de Tailscale.',
  'Tailscale HTTPS ports 8443–8446 are already in use. Free one of these ports and try again.': 'Los puertos HTTPS 8443–8446 de Tailscale ya están en uso. Libera uno de ellos e inténtalo de nuevo.',
  'This Tailscale port is publicly shared. Turn off Funnel for this port before connecting Mr. Mak.': 'Este puerto de Tailscale se comparte públicamente. Desactiva Funnel en este puerto antes de conectar Mr. Mak.',
  'The private Tailscale route could not be verified. Mobile access remains off.': 'No se pudo verificar la ruta privada de Tailscale. El acceso móvil sigue desactivado.',
  ' Windows may require an administrator terminal for the initial Serve setup.': ' Windows puede requerir una terminal de administrador para la configuración inicial de Serve.',
  ' Make sure the Tailscale app is running and signed in.': ' Asegúrate de que la app de Tailscale esté abierta y con la sesión iniciada.',

  // Notices and conversation events
  'The agent finished its turn. Review the result.': 'El agente terminó su turno. Revisa el resultado.',
  'The agent reported an API error.': 'El agente informó un error de API.',
  'Background task finished': 'Tarea en segundo plano terminada',
  'Command finished': 'Comando terminado',
  'Message from the CLI': 'Mensaje de la CLI',
  'Background command': 'Comando en segundo plano',

  // Built-in slash command descriptions (Claude Code and Codex)
  'Add a working directory': 'Agregar un directorio de trabajo',
  'Manage subagents': 'Administrar subagentes',
  'Clear the conversation history': 'Borrar el historial de la conversación',
  'Summarize the conversation to free context': 'Resumir la conversación para liberar contexto',
  'Open settings': 'Abrir ajustes',
  'Show context usage': 'Mostrar el uso de contexto',
  'Show session cost and plan usage': 'Mostrar el costo de la sesión y el uso del plan',
  'Check the Claude Code installation': 'Comprobar la instalación de Claude Code',
  'Export the conversation': 'Exportar la conversación',
  'Show help': 'Mostrar ayuda',
  'Manage hooks': 'Administrar hooks',
  'Create a CLAUDE.md for this project': 'Crear un CLAUDE.md para este proyecto',
  'Sign in': 'Iniciar sesión',
  'Sign out': 'Cerrar sesión',
  'Manage MCP servers': 'Administrar servidores MCP',
  'Edit memory files': 'Editar archivos de memoria',
  'Choose the model': 'Elegir el modelo',
  'Choose the output style': 'Elegir el estilo de salida',
  'Manage tool permissions': 'Administrar permisos de herramientas',
  'Manage plugins': 'Administrar plugins',
  'Show release notes': 'Mostrar notas de la versión',
  'Resume another conversation': 'Reanudar otra conversación',
  'Review a pull request': 'Revisar un pull request',
  'Rewind the conversation or code': 'Retroceder la conversación o el código',
  'Review pending changes for security issues': 'Revisar cambios pendientes en busca de problemas de seguridad',
  'Show account and system status': 'Mostrar el estado de la cuenta y del sistema',
  'Set up the status line': 'Configurar la línea de estado',
  'Show the current todo list': 'Mostrar la lista de tareas actual',
  'Show plan usage limits': 'Mostrar los límites de uso del plan',
  'Toggle Vim editing mode': 'Activar o desactivar el modo de edición Vim',
  'Open the agent command center': 'Abrir el centro de mando de agentes',
  'Configure Codex preferences': 'Configurar las preferencias de Codex',
  'Copy the last response or part of it': 'Copiar la última respuesta o parte de ella',
  'Show the Git diff, including untracked files': 'Mostrar el diff de Git, incluidos los archivos sin seguimiento',
  'Export the conversation as Markdown': 'Exportar la conversación como Markdown',
  'Toggle faster responses with higher usage': 'Activar o desactivar respuestas más rápidas con mayor uso',
  'Send feedback to the Codex team': 'Enviar comentarios al equipo de Codex',
  'Set or view the goal for a long-running task': 'Definir o ver el objetivo de una tarea larga',
  'Create an AGENTS.md for this project': 'Crear un AGENTS.md para este proyecto',
  'Sign out of Codex': 'Cerrar sesión en Codex',
  'List configured MCP tools': 'Listar las herramientas MCP configuradas',
  'Mention a file': 'Mencionar un archivo',
  'Choose the model and reasoning effort': 'Elegir el modelo y el esfuerzo de razonamiento',
  'Start a new conversation': 'Empezar una conversación nueva',
  'Choose what Codex is allowed to do': 'Elegir qué puede hacer Codex',
  'Switch to Plan mode': 'Cambiar al modo Plan',
  'Summarize the conversation now': 'Resumir la conversación ahora',
  'Rename the current thread': 'Renombrar el hilo actual',
  'Review current changes': 'Revisar los cambios actuales',
  'Choose skills for Codex to use': 'Elegir skills para que use Codex',
  'Show session configuration and token usage': 'Mostrar la configuración de la sesión y el uso de tokens',
};

const statusWords = { done: 'listo', active: 'activo', pinned: 'fijado', unpinned: 'desfijado' };
const windowNames = { chats: 'Chats', workspace: 'Workspace' };

// Dynamic messages: [pattern, replacement(match, translate)]. Anchored so that
// free text (an agent's or model's answer) is never partly rewritten.
const esPatterns = [
  [/^([\s\S]*) exited \((-?\w+)\)\.$/, m => `${m[1]} terminó (${m[2]}).`],
  [/^Unsupported chat option: ([\s\S]*)\.$/, m => `Opción de chat no compatible: ${m[1]}.`],
  [/^Codex did not answer (\S+)$/, m => `Codex no respondió a ${m[1]}`],
  [/^Coordinator turn (\S+)$/, m => `Turno del coordinador: ${m[1]}`],
  [/^Voice is already active in the (chats|workspace) window$/, m => `La voz ya está activa en la ventana ${windowNames[m[1]]}`],
  [/^OpenAI Live \((\d+)\): ([\s\S]*)$/, (m, tr) => `OpenAI Live (${m[1]}): ${tr(m[2])}`],
  [/^(\S+) is not installed on this computer$/, m => `${m[1]} no está instalado en esta computadora`],
  [/^Unknown project adapter: ([\s\S]*)$/, m => `Adaptador de proyecto desconocido: ${m[1]}`],
  [/^Knowledge provider is unavailable: ([\s\S]*)$/, m => `El proveedor de conocimiento no está disponible: ${m[1]}`],
  [/^OpenCode (\w+) must be an array\.$/, m => `En OpenCode, ${m[1]} debe ser un arreglo.`],
  [/^Tailscale Serve could not start\. Enable HTTPS for this device in Tailscale and check its Serve permissions\.([\s\S]*) See the setup instructions below\.$/, (m, tr) => `Tailscale Serve no pudo iniciar. Activa HTTPS para este dispositivo en Tailscale y revisa sus permisos de Serve.${tr(m[1])} Consulta las instrucciones de configuración abajo.`],
  // Quick-action results
  [/^Found (\d+) cards for (\S+) in Workspace dates and Git history:\n([\s\S]*?)(\nMore cards are available\.)?$/, m => `Se encontraron ${m[1]} tarjetas del ${m[2]} en las fechas de Workspace y el historial de Git:\n${m[3]}${m[4] ? '\nHay más tarjetas disponibles.' : ''}`],
  [/^No Workspace or Git history entries were found for (\S+)\. Unsaved work is not included\.$/, m => `No se encontraron entradas de Workspace ni del historial de Git del ${m[1]}. No se incluye el trabajo sin guardar.`],
  [/^Archived the card "([\s\S]*)"\.$/, m => `Se archivó la tarjeta "${m[1]}".`],
  [/^The card "([\s\S]*)" is active again\.$/, m => `La tarjeta "${m[1]}" vuelve a estar activa.`],
  [/^"([\s\S]*)": (done|active|pinned|unpinned)\.$/, m => `"${m[1]}": ${statusWords[m[2]]}.`],
  [/^Closed "([\s\S]*)"\. It is saved in History\.$/, m => `Se cerró "${m[1]}". Queda guardado en el Historial.`],
  [/^Opened the chat "([\s\S]*)"\.$/, m => `Se abrió el chat "${m[1]}".`],
  [/^Opened the card "([\s\S]*)"\.$/, m => `Se abrió la tarjeta "${m[1]}".`],
  [/^Created "([\s\S]*)"\. The agent is starting\.$/, m => `Se creó "${m[1]}". El agente se está iniciando.`],
  [/^(\d+) Workspace cards:\n([\s\S]*)$/, m => `${m[1]} tarjetas de Workspace:\n${m[2]}`],
  [/^(?:• [^\n]*(?:\n|$))+$/, m => m[0].includes(' — needs attention') ? m[0].replace(/ — needs attention$/gm, ' — necesita atención') : null],
];

const dictionaries = { es };
const patterns = { es: esPatterns };

/** Translate a user-facing English message; unknown text is returned unchanged. */
export function translate(message, language) {
  if (typeof message !== 'string' || !message || language === 'en' || !dictionaries[language]) return message;
  const dictionary = dictionaries[language];
  if (Object.hasOwn(dictionary, message)) return dictionary[message];
  const tr = value => translate(value, language);
  for (const [pattern, replace] of patterns[language]) {
    const match = pattern.exec(message);
    if (match) { const result = replace(match, tr); if (result != null) return result; }
  }
  return message;
}

const fromTag = value => {
  const tag = String(value || '').trim().toLowerCase();
  if (!tag || tag === 'c' || tag === 'posix' || tag.startsWith('c.')) return null;
  return tag === 'es' || /^es[-_.@]/.test(tag) ? 'es' : 'en';
};

/** The operating system language: POSIX locale variables first, then the ICU default locale. */
export function systemLanguage({ env = process.env, locale } = {}) {
  // Test runs always use English, whatever the developer's locale.
  if (env.NODE_TEST_CONTEXT && locale === undefined) return 'en';
  // The desktop shell passes the language it detected (Windows display
  // language, macOS preferred language) so the shell and service agree.
  if (env.MRMAK_SYSTEM_LANGUAGE === 'en' || env.MRMAK_SYSTEM_LANGUAGE === 'es') return env.MRMAK_SYSTEM_LANGUAGE;
  for (const name of ['LC_ALL', 'LC_MESSAGES', 'LANG']) {
    const value = env[name];
    if (value) return fromTag(value) || 'en'; // C/POSIX means untranslated English.
  }
  let detected = locale;
  if (detected === undefined) { try { detected = Intl.DateTimeFormat().resolvedOptions().locale; } catch { detected = ''; } }
  return fromTag(detected) || 'en';
}

/** Resolve the saved preference ('system' | 'en' | 'es') to 'en' or 'es'. */
export function serviceLanguage(preference, sources) {
  return preference === 'en' || preference === 'es' ? preference : systemLanguage(sources);
}

/** The phone's language: an explicit X-Mrmak-Language header or ?lang=, then Accept-Language, then the service setting. */
export function requestLanguage(request, preference) {
  const explicit = String(request?.headers?.['x-mrmak-language'] || '').trim().toLowerCase();
  if (explicit === 'en' || explicit === 'es') return explicit;
  try { const query = new URL(request.url, 'http://local').searchParams.get('lang'); if (query === 'en' || query === 'es') return query; } catch { /* No URL. */ }
  const header = String(request?.headers?.['accept-language'] || '');
  const first = header.split(',').map((part, index) => {
    const [tag, ...params] = part.trim().split(';');
    const q = params.map(item => /^\s*q=([\d.]+)\s*$/.exec(item)?.[1]).find(Boolean);
    return { tag: tag.trim(), q: q === undefined ? 1 : Number(q), index };
  }).filter(item => item.tag && item.tag !== '*' && item.q > 0).sort((a, b) => b.q - a.q || a.index - b.index)[0];
  return first ? fromTag(first.tag) || 'en' : serviceLanguage(preference);
}

/** A notice is "<chat name>: <event text>" or "<chat name> exited (<code>)." */
export function translateNotice(notice, language) {
  if (!notice || language === 'en' || typeof notice.text !== 'string') return notice;
  const prefix = typeof notice.name === 'string' ? `${notice.name}: ` : null;
  const text = prefix && notice.text.startsWith(prefix) ? prefix + translate(notice.text.slice(prefix.length), language) : translate(notice.text, language);
  return text === notice.text ? notice : { ...notice, text };
}

/** Speech-to-text status with provider labels and details for the reader. */
export function localizeDictation(info, language) {
  if (!info || language === 'en' || !Array.isArray(info.providers)) return info;
  return { ...info, providers: info.providers.map(item => ({ ...item, label: translate(item.label, language), detail: translate(item.detail, language) })) };
}

const eventFallbacks = new Set(['Background task finished', 'Command finished', 'Message from the CLI']);
/** Conversation transcripts: only the service's own fallback titles change; CLI and agent text never does. */
export function localizeTranscript(value, language) {
  if (!value || language === 'en') return value;
  const messages = Array.isArray(value.messages) ? value.messages.map(message => message.role === 'system' && message.event && eventFallbacks.has(message.event.title)
    ? { ...message, text: message.text === message.event.title ? translate(message.text, language) : message.text, event: { ...message.event, title: translate(message.event.title, language) } }
    : message) : value.messages;
  const commands = Array.isArray(value.commands) ? value.commands.map(item => item.title === 'Background command' ? { ...item, title: translate(item.title, language) } : item) : value.commands;
  return { ...value, messages, commands };
}
