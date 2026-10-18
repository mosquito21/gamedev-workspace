[English](../customization.md) · **Español**

# Haz tuyo el Workspace

## Cambios desde Ajustes

Usa el panel de Ajustes de la derecha para los controles de visualización y comportamiento disponibles.
En **Apariencia**, elige **Oscuro**, **Claro** o **Sistema** para el Workspace.
Oscuro es el valor por defecto. Claro usa texto oscuro sobre blanco; Sistema sigue al dispositivo.
La elección se aplica de inmediato a la navegación, las vistas previas de archivos, el Markdown y
los informes estándar, y se guarda para el próximo inicio. También se sincroniza entre
ventanas de Workspace conectadas al mismo servicio local. Preview en el navegador tiene un
botón de Ajustes en la barra superior y guarda la elección en ese navegador.

En **Apariencia → Idioma** se elige el idioma de la interfaz: **Sistema**, **English** o **Español**.

Los ajustes de texto de la terminal, los colores de las pestañas y los grupos de pestañas están en Chats. Un grupo es una
etiqueta corta en inglés elegida en Nuevo chat o desde el menú contextual de una pestaña, y se
renombra o elimina desde el menú contextual de su etiqueta; los filtros de grupo del Historial
eliminan un grupo que solo conservan chats cerrados. Los grupos contraídos se
recuerdan por instalación. El atajo de la tecla Win es
opcional: cuando está activado, una sola pulsación de Win vuelve a las ventanas ocultas de Mr. Mak;
cuando ya están a la vista, abre Inicio. Las combinaciones con Win funcionan con normalidad.
En macOS, la misma opción está en Ajustes > Atajo: su combinación de teclas
trae de vuelta las ventanas desde cualquier app, y hacer clic en el ícono del Dock también las
restaura. La plantilla la deja desactivada.

Elige con cuidado la omisión de permisos en los chats. Los permisos normales son el valor por defecto.
Los ajustes de voz permiten cambiar el perfil de voz, la velocidad y el comportamiento de la conversación.
Algunos cambios de voz se aplican en la siguiente conexión de voz.

## Cambios con un agente

| Pide | Dónde va |
| --- | --- |
| “Recuerda cómo quiero que se escriban los informes.” | `context/preferences.md` |
| “Guarda este método de modelado confiable.” | Una nota concreta en `knowledge/` |
| “Haz que esto sea repetible.” | Un flujo de trabajo en `processes/` y, si sirve, una skill de proyecto |
| “Agrega una pestaña de informe a este proyecto.” | Los pasos de la tarjeta existente en `workspace/workspace.json` |
| “Crea una nueva tarea de investigación.” | Una carpeta del Workspace con fecha y una entrada en el registro |
| “Cambia fuentes, colores o espaciado en todas partes.” | Estilos compartidos de la aplicación y de los informes |
| “Agrega otra carpeta principal.” | Valores por defecto del panel Archivos en el código fuente de la aplicación |

Una instrucción útil es: “Lee AGENTS.md, propón un cambio pequeño, impleméntalo,
verifica el resultado y prepara la actualización. Pregunta antes de reiniciar la app de escritorio.”

## Una estructura de proyecto pequeña

Mantén un hub de proyecto fijado con pestañas Brief, Plan y Assets. Guarda los archivos fuente
duraderos en `projects/<project>/`; deja las páginas que lees en su carpeta del
Workspace. Agrega una tarjeta por tarea independiente, no una tarjeta por cada imagen generada.
Las iteraciones relacionadas se convierten en pestañas de la misma tarjeta. Archiva el trabajo reemplazado.

## Proveedores opcionales

La plantilla no instala servidores MCP de forma global. Usa el panel MCP para revisar
la configuración del proyecto y la global, y luego sigue las instrucciones actuales del proveedor.
Para este proyecto, usa `.mcp.json` para Claude y `.codex/config.toml` para Codex.
Las credenciales de conexión quedan en local o en el almacén de sesión propio del proveedor.
Sigue el soporte documentado del cliente elegido para secretos en variables de entorno en lugar de
poner un token directamente en un archivo de conexión versionado.

Para fal.ai, lee la skill incluida `fal-ai-generation`, conecta el MCP o usa su
helper de Python, y define `FAL_KEY` en `.env`. Consulta el esquema exacto del modelo antes
de iniciar un trabajo pago. Higgsfield usa su propia configuración de CLI y su propia cuenta.

## Reglas de diseño

Usa el estilo compartido de informes, encabezados legibles y un espaciado de tarjetas consistente.
Los informes HTML estándar usan `data-mak-report="document"` en el elemento raíz y
siguen el tema de Workspace del lector. Usa los tokens de color compartidos para que las secciones personalizadas
sigan siendo legibles. Para un diseño intencionalmente independiente, como una demo de juego,
agrega `data-mak-theme="custom"` al elemento raíz para conservar su paleta original.
Las imágenes, los videos y los canvas conservan sus colores en todos los temas.

Cada imagen de un informe debe abrirse en tamaño completo y ofrecer descarga. Mantén las tablas anchas
con desplazamiento dentro del informe y prueba las pestañas con anchos de ventana estrechos. Conserva
la superficie del documento seleccionado mientras carga una pestaña, para que el cambio no parpadee.

La skill de autoría del Workspace contiene las reglas mantenidas. Si cambias el
sistema de diseño, actualiza esa skill y la implementación compartida a la vez.
