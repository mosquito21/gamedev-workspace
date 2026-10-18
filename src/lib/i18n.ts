import { useSyncExternalStore } from 'react'
import { api, desktopState, isDesktop, subscribeDesktop } from '../desktop/client'
import es from './locales/es'

// English text is the translation key: untranslated strings fall back to the
// original English, and English stays the source language of the interface.
export type LanguagePreference = 'system' | 'en' | 'es'
export type Language = 'en' | 'es'
export type TranslationVars = Record<string, string | number>

const dictionaries: Record<Language, Record<string, string>> = { en: {}, es }
const storageKey = 'mrmak.language'
const changed = 'mrmak-language'

const validPreference = (value: unknown): LanguagePreference | null => value === 'system' || value === 'en' || value === 'es' ? value : null
const readStored = (): LanguagePreference => { try { return validPreference(localStorage.getItem(storageKey)) || 'system' } catch { return 'system' } }
const store = (value: LanguagePreference) => { try { localStorage.setItem(storageKey, value) } catch { /* The choice applies to this visit. */ } }
const systemLanguage = (): Language => {
  const first = (navigator.languages?.[0] || navigator.language || '').toLowerCase()
  return first === 'es' || first.startsWith('es-') ? 'es' : 'en'
}

export function languagePreference(): LanguagePreference {
  // The desktop windows share the service setting; until it arrives, the last
  // value seen in this browser avoids a flash of the other language.
  if (isDesktop) {
    const fromService = validPreference(desktopState().settings.language)
    if (fromService) return fromService
  }
  return readStored()
}

export function currentLanguage(): Language {
  const preference = languagePreference()
  return preference === 'system' ? systemLanguage() : preference
}

/** BCP-47 tag for dates, numbers and Intl APIs. */
export const currentLocale = () => currentLanguage() === 'es' ? 'es' : 'en'

const format = (text: string, vars?: TranslationVars) => vars ? text.replace(/\{(\w+)\}/g, (match, name: string) => name in vars ? String(vars[name]) : match) : text

/** Translate English UI text. `{name}` placeholders are filled from `vars`. */
export function t(text: string, vars?: TranslationVars): string {
  return format(dictionaries[currentLanguage()][text] ?? text, vars)
}

/** Choose the singular or plural English text by count, then translate it. `{count}` is filled in. */
export function tn(count: number, one: string, other: string, vars?: TranslationVars): string {
  return t(count === 1 ? one : other, { count, ...vars })
}

let lastApplied = ''
const applyDocumentLanguage = () => {
  const language = currentLanguage()
  if (language === lastApplied) return
  lastApplied = language
  document.documentElement.lang = language
  if (isDesktop) store(languagePreference())
}

const subscribe = (listener: () => void) => {
  const notify = () => { applyDocumentLanguage(); listener() }
  window.addEventListener('storage', notify)
  window.addEventListener(changed, notify)
  window.addEventListener('languagechange', notify)
  const stopDesktop = isDesktop ? subscribeDesktop(notify) : () => {}
  return () => {
    window.removeEventListener('storage', notify)
    window.removeEventListener(changed, notify)
    window.removeEventListener('languagechange', notify)
    stopDesktop()
  }
}
const snapshot = () => `${languagePreference()}:${currentLanguage()}`

/** Re-render this component when the interface language changes. */
export function useLanguage() {
  useSyncExternalStore(subscribe, snapshot)
  applyDocumentLanguage()
  return { preference: languagePreference(), language: currentLanguage(), t, tn }
}

/** Subscribe a component to language changes and get the translate function. */
export function useT() {
  return useLanguage().t
}

export async function setLanguagePreference(preference: LanguagePreference) {
  store(preference)
  if (isDesktop) await api('/settings', { language: preference })
  window.dispatchEvent(new Event(changed))
}
