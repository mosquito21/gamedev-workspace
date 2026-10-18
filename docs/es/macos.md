[English](../macos.md) · **Español**

# Mr. Mak Workspace en macOS

La app de escritorio se creó para Windows (y Linux). Este documento cubre el port a macOS:
qué cambió, cómo compilarla y ejecutarla, cómo se verificó y qué sigue pendiente.
El colaborador informa funcionamiento nativo en Apple Silicon y las comprobaciones siguientes
para el PR #25. La actualización combinada 0.5.1 agrega verificación en CI y una sonda acotada
de la shell de inicio de sesión; el estado de su compilación se sigue en el workflow Checks del repositorio.

## Compilar y ejecutar

GitHub Releases también incluye un `.dmg` y un `.app.zip` para Apple Silicon; los pasos siguientes compilan
la misma app desde el código fuente.

Requisitos previos: Node.js 22.20+, [Rust](https://rustup.rs), Xcode Command Line Tools
(`xcode-select --install`; `./setup.sh check` los informa) y al menos una CLI de agente
(Claude Code, Codex u OpenCode).

```bash
./setup.sh check      # report prerequisites
./setup.sh desktop    # npm ci + build Mr. Mak Workspace.app and a .dmg
./setup.sh preview    # optional: browser-only report preview, no Rust or Xcode needed
```

Resultado: `src-tauri/target/release/bundle/macos/Mr. Mak Workspace.app` (y `bundle/dmg/`).
Copia la app a Aplicaciones y haz doble clic en **Start Mr. Mak.command** en el repositorio,
que abre la app sobre este repositorio. El lanzador avisa cuando la carpeta de compilación tiene una
app más nueva que la de Aplicaciones e imprime el comando para reemplazarla. La compilación tiene firma ad hoc
(`signingIdentity "-"`, sin hardened runtime) y está sellada, pero no notarizada. Una copia compilada
por ti se abre sin aviso de Gatekeeper. Una copia descargada puede quedar bloqueada: usa
Configuración del Sistema › Privacidad y seguridad › Abrir igualmente, o, si macOS dice que está dañada, ejecuta
`xattr -dr com.apple.quarantine "/Applications/Mr. Mak Workspace.app"` una vez. macOS vuelve a pedir
permisos (p. ej., micrófono) después de cada recompilación, porque una firma ad hoc
cambia con cada compilación. Las descargas de imágenes e informes van a `~/Downloads` y se seleccionan
en el Finder. Para actualizar, sigue los
[pasos de actualización en macOS](updating.md#macos-compilación-desde-código-fuente).

El dictado local opcional y Leer en voz alta necesitan Python 3.10–3.12. El `python3` del sistema es 3.9
y el de Homebrew por defecto suele ser más nuevo, así que instala e invoca 3.12 por su nombre:
`brew install python@3.12`, luego `python3.12 scripts/setup-local-voice.py dictation`
(o `read-aloud`). `python3` a secas también funciona cuando hay un Python 3.10–3.12 instalado
(Homebrew o uv): el script cambia a él y resuelve los certificados faltantes del instalador
de python.org. En Apple Silicon, el dictado local necesita macOS 14 o posterior y Leer
en voz alta macOS 13 o posterior (por los wheels fijados de `av` y `onnxruntime`); el script se detiene en versiones
anteriores. Consulta la [configuración de voz local](mobile-access.md#configuración-de-voz-local-en-la-computadora).

Desarrollo: `./node_modules/.bin/tauri dev -- -- --repo "$PWD"`. Sin `--repo`,
`tauri dev` arranca en `src-tauri/` y espera en un selector de repositorio (oculto). El modo dev sirve
`dist/`; ejecuta antes `npm run build`.

## Qué cambió

### App nativa (`src-tauri/`)
| Cambio | Por qué |
|---|---|
| Destinos de bundle `app` y `dmg`, `icons/icon.icns`, `Info.plist` con `NSMicrophoneUsageDescription` | Empaquetado para Mac; la voz necesita una descripción de uso del micrófono |
| `PATH` y ajustes de la shell de inicio de sesión para el servicio | Los inicios desde Finder/Dock pueden encontrar las CLI instaladas; tras dos segundos, una shell que no responde recurre al PATH heredado más las carpetas habituales de CLI. La misma sonda acotada también importa `CODEX_HOME`, `CLAUDE_CONFIG_DIR`, `OPENCODE_CONFIG(_DIR)`, `XDG_CONFIG/DATA/STATE/CACHE_HOME` y `LANG`/`LC_ALL`/`LC_CTYPE`, solo cuando faltan en el entorno de inicio; `LANG` toma `en_US.UTF-8` por defecto si no hay locale definido. Las claves de API no se importan (`launchctl setenv` es la alternativa manual) |
| `mac_key.rs`: atajo de recuperación ⌃⌥⌘Space (`tauri-plugin-global-shortcut`), compartido con el ajuste de la tecla Win | Equivalente en macOS de la recuperación con la tecla Win. Se descartó ⌃⌥Space porque es el "Seleccionar siguiente fuente en el menú Entrada" de macOS |
| `RunEvent::Reopen` trae de vuelta ambas ventanas | Cerrar una ventana solo la oculta; un clic en el Dock debe restaurarla |
| Arrastre nativo de archivos hacia afuera activado en macOS (crate `drag`) | Arrastrar archivos desde Workspace al Finder y a otras apps |
| Mostrar en Finder usa `open -R` (también para paquetes como carpetas `.app`) | El Finder selecciona el archivo en lugar de solo abrir su carpeta, y un paquete se selecciona en vez de ejecutarse |
| Mover a la Papelera usa `NSFileManager` | Sin aviso de automatización del Finder y sin sonido; el Finder puede no ofrecer **Devolver** para estos elementos |
| Las descargas desde el webview se guardan en `~/Downloads` y se seleccionan en el Finder | De lo contrario WKWebView las cancela |
| El ícono de la barra de menús es una imagen plantilla | Sigue la barra de menús clara u oscura |
| Menú **Chats** con Chat 1–9 en ⌘1–⌘9 | WKWebView nunca recibe ⌘+número, así que el cambio de pestañas vive en el menú (como en otras apps de Mac) |

### Empaquetado (`desktop/prepare.mjs`, `scripts/fix-pty-permissions.mjs`)
- El `node` de Homebrew es un lanzador enlazado a `libnode.dylib` y no puede ejecutarse desde el bundle
  (el servicio fallaba con `Library not loaded: libnode.*.dylib`). En macOS se reemplaza cualquier Node que
  enlace bibliotecas fuera de macOS (`libnode` de Homebrew, o una compilación de Homebrew/MacPorts que enlace
  bibliotecas de `/opt/...`): la compilación descarga el Node oficial autónomo de
  la misma versión desde nodejs.org,
  verifica su SHA-256 contra `SHASUMS256.txt`, lo guarda en caché en `.cache/node-download` y
  lo incluye en el bundle. La copia queda con permiso de escritura, para que las recompilaciones puedan reemplazarla.
- npm desempaqueta el `spawn-helper` de node-pty sin el bit de ejecución; entonces todas las terminales fallan
  con `posix_spawnp failed`. Se corrige después de `npm install` (postinstall) y en el bundle.
- El Node incluido define la versión mínima real de macOS: Node 23 y posteriores necesitan macOS 13.5.
  `./setup.sh desktop` sube `LSMinimumSystemVersion` para que coincida; un
  `npm run desktop:build` simple solo avisa. Compila con Node 22 para admitir macOS 11–13.4.

### Servicio (`desktop/service/`)
- CLI de Tailscale dentro de `Tailscale.app`; el archivo MCP gestionado de Claude Code en
  `/Library/Application Support/ClaudeCode/managed-mcp.json` (Linux: `/etc/claude-code/`).
- Las rutas soltadas en una shell se entrecomillan al estilo POSIX (`'\''` para un apóstrofo); PowerShell mantiene `''`.
- Textos de error neutros respecto de la plataforma (sin "Windows"/"Explorer" en otros sistemas).

### Interfaz (`src/`)
- `src/desktop/platform.ts`: un único lugar para las convenciones de cada plataforma.
- Los atajos usan ⌘ en macOS (⌘⇧T/P/H/W, ⌘1–9); Ctrl+Tab sigue rotando.
- Terminales: ⌘C/⌘V copian y pegan; Ctrl+C llega a la CLI (como en Terminal.app);
  Option+arrastrar selecciona texto mientras un agente captura el mouse; fuentes SF Mono/Menlo.
  Option escribe los caracteres de tu distribución de teclado; **Use Option as Meta key** en Ajustes > Chats (solo macOS,
  guardado como `terminalOptionMeta`) envía atajos Meta en su lugar.
- Textos de Finder/Papelera/macOS en lugar de Explorer/Papelera de reciclaje/Windows; Ajustes muestra el
  atajo ⌃⌥⌘Space. En el panel Archivos, ⌘⌫ mueve la selección a la Papelera.
- Correcciones para WebKit: la solicitud de liberación de voz usa `keepalive` (WebKit cancela las solicitudes de una
  página que se cierra); los iframes de informes solo se tocan cuando son del mismo origen; las grabaciones del teléfono se guardan
  en IndexedDB como bytes, no como Blobs (navegación privada de Safari).

### Scripts
`setup.sh` (equivalente para macOS/Linux de `Setup.ps1`), `Start Mr. Mak.command`
(equivalente de `Start Mr. Mak.cmd`), `scripts/check-macos-native.sh`.

## Verificación

| Suite | Cómo | Resultado |
|---|---|---|
| Suites de UI (8) + comprobaciones de preview/plantilla | Playwright, headless; **WebKit** por defecto en macOS (`desktop/service/test/browser.mjs`), también Chromium | 20/20 pasan |
| Pruebas del servicio | `npm run desktop:test` | 90 pasan, 0 fallan, 2 omitidas |
| Pruebas de Rust | `cargo test` en `src-tauri` | 2/2 |
| Comprobaciones de plantilla | `npm run test:template` | 9/9 |
| Comprobaciones nativas | `scripts/check-macos-native.sh` (Accesibilidad; necesita la pantalla ~30 s) | Menú Chats, ⌘1/⌘2, cambio por menú, ⌘⇧W, reapertura desde el Dock, atajo de recuperación: todo pasa con el anterior ⌃⌥Space; el script ahora envía ⌃⌥⌘Space y no se volvió a ejecutar |
| Manual, en la app de release | — | Textos de macOS; soltar una ruta con apóstrofo + `ls`; Mostrar en Finder (carpeta y archivo); arrastrar un archivo hacia el Finder; arrastrar un archivo a una terminal |
| Manual, pendiente tras las correcciones de 0.5.1 | — | En una pantalla Retina, soltar un archivo sobre los ~100 px superiores de una terminal de Chats (debe adjuntarse) y sobre el Historial o la superposición de voz (no debe); pulsar Descargar en el visor de imágenes (el archivo debe aparecer en `~/Downloads`); Mostrar en Finder sobre una carpeta `.app` la selecciona en lugar de ejecutarla |

Las pruebas de UI ahora corren en el motor de la app de cada plataforma (WebView2/Edge en Windows,
WKWebView/WebKit en macOS); `MRMAK_TEST_BROWSER=chromium|webkit|msedge` lo reemplaza.
Ejecuta `npx playwright install webkit` una vez después de `npm ci` (como hace el job de CI de macOS) antes de
`npm run desktop:test:ui`, `npm run test:preview` o la comprobación de UI de la plantilla; `chromium`
necesita `npx playwright install chromium`. Varias pruebas necesitaron correcciones según el motor (teclas de copia
de cada plataforma, permisos del portapapeles en WebKit, un stub del micrófono a nivel de prototipo, simulación
de "respuesta perdida" del lado del servidor porque el WebKit de Playwright no puede enrutar solicitudes del service worker,
y dos condiciones de carrera de tiempos).

## Límites conocidos / no probado
- Solo firma ad hoc, solo Apple Silicon (`aarch64`); sin notarización. Una compilación para Intel o universal necesita
  `--target universal-apple-darwin` y ambos destinos de Rust.
- El coordinador de voz Live necesita `OPENAI_API_KEY` en el `.env` ignorado.
  El dictado puede usar Whisper local opcional en su lugar. El aviso real de permiso del micrófono
  no se probó en las comprobaciones nativas del colaborador.
- El acceso móvil por Tailscale solo se probó con automatización (WebKit = el motor de Safari en iPhone),
  no con un teléfono real.
- El menú de la bandeja (barra de menús) no es accesible mediante Accesibilidad, así que no está en las comprobaciones nativas.
- `rust-objcopy` no puede quitar los símbolos del binario de release con esta toolchain (advertencia inofensiva).
