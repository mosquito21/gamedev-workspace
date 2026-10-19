# Herramientas disponibles

Qué usa Willy para producir y dónde está configurado (18/10/2026). Antes de
generar algo pago o tocar un editor, revisá esta lista y la skill que corresponda.

## Generación

- **Imagen (y video, si la cuenta lo habilita): Google AI Studio / Gemini.**
  Clave `GEMINI_API_KEY` en `.env` (no se sube). En Gaucho Zenón el script
  `tools/imagegen/generar_referencia.py` ya la usa con el estilo de Zenón.
- **fal.ai: no se usa.** No hay cuenta. Las skills que lo nombran
  (`fal-ai-generation`, partes de `image-reference-workflow` y `materials-to-game`)
  se adaptan a Gemini o a Hunyuan local; no pedir una key de fal.
- **Higgsfield: pendiente.** Willy lo va a sumar. El CLI oficial
  (`npm install -g @higgsfield/cli`) entra con `higgsfield auth login`;
  `HIGGSFIELD_API_KEY` en `.env` queda reservada para scripts o un MCP.
- **3D: Hunyuan3D 2.1 local** (`G:\Hunyuan3D2_WinPortable`, RTX 3090). Ver el
  apartado de Hunyuan en `JUEGO_INFO.md` de Gaucho Zenón: imagen recortada con
  transparencia, `--low_vram_mode`, reiniciar cada 5 modelos.

## Conexiones MCP (globales de Claude Code, sirven en cualquier carpeta)

- `godot-mcp-pro`: editor de Godot (el addon `godot_mcp` va en cada proyecto y no
  se exporta).
- `blender` (`uvx blender-mcp`) y `blender-animacion` (`G:\mcp-blender`, puerto 9877).
- ElevenLabs: conexión de la cuenta de claude.ai. Voces, efectos de sonido y
  transcripción.

Si un MCP no responde, primero abrir el editor correspondiente. En Windows los
comandos `claude mcp add` con `--` se corren con `cmd /c "..."`: PowerShell se
come el `--` porque `claude` es un script `.ps1`.

## Apagado por ahora

Dictado con Whisper, lectura en voz alta y el coordinador por voz.

## Proyectos

- Gaucho Zenón: [ficha](../projects/gaucho-zenon/README.md)
- Línea de Fuego: Malvinas: [ficha](../projects/linea-de-fuego-malvinas/README.md)
