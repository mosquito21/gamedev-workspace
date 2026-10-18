//! Native shell text (tray menu, dialogs, pickers) in the interface language.
//! English is the key and the default. The preference is the service's
//! `language` setting ('system' | 'en' | 'es') in `<repo>/.mrmak/settings.json`;
//! 'system' and an unknown repository use the operating system language.
use std::{path::Path, sync::atomic::{AtomicBool, Ordering}};

static SPANISH: AtomicBool = AtomicBool::new(false);

fn spanish() -> bool { SPANISH.load(Ordering::Relaxed) }

/// Read the saved preference from the service settings, or the system language without a repository.
pub fn init(repo: Option<&Path>) {
    let preference = repo
        .and_then(|root| std::fs::read_to_string(root.join(".mrmak").join("settings.json")).ok())
        .and_then(|text| serde_json::from_str::<serde_json::Value>(&text).ok())
        .and_then(|settings| settings["language"].as_str().map(str::to_owned));
    set(preference.as_deref().unwrap_or("system"));
}

/// Apply a preference or a resolved language ('system', 'en' or 'es').
pub fn set(preference: &str) {
    let spanish = match preference { "es" => true, "en" => false, _ => system_language() == "es" };
    SPANISH.store(spanish, Ordering::Relaxed);
}

fn from_tag(tag: &str) -> Option<&'static str> {
    let tag = tag.trim().trim_matches('"').to_ascii_lowercase();
    if tag.is_empty() || tag == "c" || tag == "posix" || tag.starts_with("c.") { return None; }
    let rest = tag.strip_prefix("es");
    Some(if rest.is_some_and(|rest| rest.is_empty() || rest.starts_with(&['-', '_', '.', '@'][..])) { "es" } else { "en" })
}

// The first locale variable that is set decides, as in POSIX; C/POSIX is English.
fn from_env() -> Option<&'static str> {
    ["LC_ALL", "LC_MESSAGES", "LANG"].iter().find_map(|name| std::env::var(name).ok().filter(|value| !value.is_empty())).map(|value| from_tag(&value).unwrap_or("en"))
}

// Windows: the user's display language. Declared directly from kernel32, which
// every Windows process links, so no extra windows-sys feature is needed.
#[cfg(windows)]
fn from_os() -> Option<&'static str> {
    #[link(name = "kernel32")]
    extern "system" { fn GetUserDefaultUILanguage() -> u16; }
    const LANG_SPANISH: u16 = 0x0a;
    Some(if unsafe { GetUserDefaultUILanguage() } & 0x3ff == LANG_SPANISH { "es" } else { "en" })
}

// macOS: the first preferred language in System Settings. Finder launches
// carry no locale variables, and the service gets LANG=en_US.UTF-8 as a fallback.
#[cfg(target_os = "macos")]
fn from_os() -> Option<&'static str> {
    let output = std::process::Command::new("/usr/bin/defaults").args(["read", "-g", "AppleLanguages"]).output().ok()?;
    let text = String::from_utf8_lossy(&output.stdout);
    let first = text.lines().map(str::trim).find(|line| !line.is_empty() && *line != "(")?;
    from_tag(first.trim_end_matches(','))
}

#[cfg(not(any(windows, target_os = "macos")))]
fn from_os() -> Option<&'static str> { None }

/// The operating system language, 'en' or 'es'. Also passed to the service so both agree on 'system'.
pub fn system_language() -> &'static str {
    let detected = if cfg!(target_os = "macos") { from_os().or_else(from_env) } else { from_env().or_else(from_os) };
    detected.unwrap_or("en")
}

/// Translate fixed English text; unknown text is returned unchanged.
pub fn tr(text: &'static str) -> &'static str {
    if !spanish() { return text; }
    match text {
        "Show Workspace" => "Mostrar Workspace",
        "Show Chats" => "Mostrar Chats",
        "Show both windows" => "Mostrar ambas ventanas",
        "Quit Mr. Mak and stop terminals" => "Salir de Mr. Mak y detener las terminales",
        "Mr. Mak — your agents, close at hand" => "Mr. Mak — tus agentes, siempre a mano",
        "Choose your Mr. Mak Workspace repository" => "Elige tu repositorio de Workspace de Mr. Mak",
        "Choose the Workspace folder" => "Elige la carpeta de Workspace",
        "Select the repository folder containing workspace/workspace.json." => "Selecciona la carpeta del repositorio que contiene workspace/workspace.json.",
        "Mr. Mak could not start" => "Mr. Mak no pudo iniciar",
        "Mr. Mak could not open" => "Mr. Mak no pudo abrirse",
        "Mr. Mak service did not start" => "El servicio de Mr. Mak no se inició",
        "Attach file paths" => "Adjuntar rutas de archivos",
        "Could not open your browser" => "No se pudo abrir tu navegador",
        "Check the default browser in your system settings." => "Revisa el navegador predeterminado en los ajustes del sistema.",
        "Only HTTP and HTTPS browser links are supported." => "Solo se admiten enlaces de navegador HTTP y HTTPS.",
        "Shortcut unavailable" => "Atajo no disponible",
        "No Workspace repository selected" => "No se eligió un repositorio de Workspace",
        _ => text,
    }
}

// "Win key" is a key name in English; in a Spanish sentence it reads "la tecla Win".
#[cfg_attr(not(any(windows, target_os = "macos")), allow(dead_code))]
fn key_phrase(label: &str) -> String { if label == "Win key" { "la tecla Win".to_owned() } else { label.to_owned() } }

/// Tray check item for the recall shortcut.
#[cfg_attr(not(any(windows, target_os = "macos")), allow(dead_code))]
pub fn shortcut_item(label: &str) -> String {
    if !spanish() { return format!("{label} shows Mr. Mak"); }
    let phrase = key_phrase(label);
    let mut chars = phrase.chars();
    let capitalized = chars.next().map(|first| first.to_uppercase().collect::<String>() + chars.as_str()).unwrap_or_default();
    format!("{capitalized} muestra Mr. Mak")
}

/// The recall shortcut could not be registered at startup.
#[cfg_attr(not(any(windows, target_os = "macos")), allow(dead_code))]
pub fn shortcut_unavailable(label: &str) -> String {
    if spanish() { format!("El sistema no pudo registrar {}.", key_phrase(label)) } else { format!("The system could not register {label}.") }
}

/// macOS refused to register or release the recall shortcut.
#[cfg(target_os = "macos")]
pub fn shortcut_failed(enabled: bool, label: &str, error: &dyn std::fmt::Display) -> String {
    match (spanish(), enabled) {
        (false, _) => format!("macOS could not {} {label}: {error}", if enabled { "register" } else { "release" }),
        (true, true) => format!("macOS no pudo registrar {label}: {error}"),
        (true, false) => format!("macOS no pudo liberar {label}: {error}"),
    }
}

/// The service exited before the windows opened.
pub fn service_stopped(log: &Path) -> String {
    if spanish() { format!("El servicio local se detuvo antes de abrir las ventanas. Consulta {} para ver los detalles.", log.display()) }
    else { format!("The local service stopped before opening the windows. See {} for details.", log.display()) }
}

/// A helper program could not be started.
pub fn could_not_start(program: &str, error: &dyn std::fmt::Display) -> String {
    if spanish() { format!("No se pudo iniciar {program}: {error}") } else { format!("Could not start {program}: {error}") }
}

/// Windows refused to open a web link.
#[cfg(windows)]
pub fn link_failed(code: isize) -> String {
    if spanish() { format!("Windows no pudo abrir este enlace web (código {code}).") } else { format!("Windows could not open this web link (code {code}).") }
}

#[cfg(test)]
mod tests {
    use super::{from_tag, set, shortcut_item, shortcut_unavailable, tr};

    #[test]
    fn locale_tags_resolve_to_supported_languages() {
        assert_eq!(from_tag("es_AR.UTF-8"), Some("es"));
        assert_eq!(from_tag("\"es-419\""), Some("es"));
        assert_eq!(from_tag("es"), Some("es"));
        assert_eq!(from_tag("en_US.UTF-8"), Some("en"));
        assert_eq!(from_tag("est"), Some("en"));
        assert_eq!(from_tag("C.UTF-8"), None);
        assert_eq!(from_tag("POSIX"), None);
    }

    #[test]
    fn english_is_unchanged_and_spanish_is_translated() {
        set("en");
        assert_eq!(tr("Show both windows"), "Show both windows");
        assert_eq!(shortcut_item("Win key"), "Win key shows Mr. Mak");
        set("es");
        assert_eq!(tr("Show both windows"), "Mostrar ambas ventanas");
        assert_eq!(tr("Unknown text"), "Unknown text");
        assert_eq!(shortcut_item("Win key"), "La tecla Win muestra Mr. Mak");
        assert_eq!(shortcut_unavailable("⌃⌥⌘Space"), "El sistema no pudo registrar ⌃⌥⌘Space.");
        set("en");
    }
}
