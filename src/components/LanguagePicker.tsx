import { useState } from 'react'
import { setLanguagePreference, useLanguage, type LanguagePreference } from '../lib/i18n'

export default function LanguagePicker() {
  const { preference, t } = useLanguage()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const change = async (value: LanguagePreference) => {
    setBusy(true); setError('')
    try { await setLanguagePreference(value) }
    catch (error) { setError(error instanceof Error ? error.message : String(error)) }
    finally { setBusy(false) }
  }
  // Each language is named in its own language so it can be found from either one.
  return <div className="workspace-theme-picker language-picker">
    <label>{t('Language')}<select aria-label={t('Language')} value={preference} disabled={busy} onChange={event => void change(event.target.value as LanguagePreference)}>
      <option value="system">{t('System')}</option><option value="en" lang="en">English</option><option value="es" lang="es">Español</option>
    </select></label>
    <p>{t('System follows your device language. Applies to the interface; your files and agent replies are not translated.')}</p>
    {error && <p role="alert">{error}</p>}
  </div>
}
