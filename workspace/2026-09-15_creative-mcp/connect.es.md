# Conectar una herramienta a este proyecto

Lee primero el README oficial de la herramienta. Una conexión MCP puede ser local o alojada;
puede requerir un editor en ejecución, un runtime instalado o una sesión con el proveedor.

Para Claude, las conexiones del proyecto están en `.mcp.json`. Para Codex, usa el
`.codex/config.toml` del proyecto y las reglas actuales de confianza de proyectos de la CLI. Los archivos incluidos
empiezan vacíos. Pueden aparecer conexiones globales porque el cliente ya las tiene
configuradas en tu computadora.

No pegues un token real en una configuración versionada. Usa el mecanismo de entorno o de
inicio de sesión que admita el cliente. Para el helper de fal incluido, pon `FAL_KEY` en
el archivo `.env` ignorado y sigue su referencia de configuración.

El panel MCP distingue las conexiones configuradas de una comprobación exitosa.
Verifica una acción pequeña de solo lectura antes de suponer que el agente puede trabajar en tu
editor. Agrega una lección de configuración útil a `knowledge/` cuando la conexión funcione.
