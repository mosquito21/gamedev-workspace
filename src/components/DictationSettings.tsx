import { useState } from 'react'
import type { DictationInfo } from '../mobile/client'
import './dictation-settings.css'
import { useT } from '../lib/i18n'

export default function DictationSettings({ info, onChange, disabled = false }: { info?: DictationInfo; onChange: (provider: string) => Promise<DictationInfo>; disabled?: boolean }) {
  const t = useT()
  const [busy, setBusy] = useState(false), [error, setError] = useState('')
  async function change(provider: string) {
    setBusy(true); setError('')
    try { await onChange(provider) } catch (error) { setError(error instanceof Error ? error.message : String(error)) }
    finally { setBusy(false) }
  }
  const selected = info?.providers?.find(item => item.id === info.provider)
  return <section className="dictation-settings" aria-label={t('Speech-to-text settings')}>
    <h3>{t('Speech-to-text')}</h3>
    <label>{t('Dictation provider')}<select aria-label={t('Dictation provider')} value={info?.provider || 'local'} disabled={disabled || busy || !info} onChange={event => void change(event.target.value)}>
      {(info?.providers || [{ id: 'local', label: 'Local Whisper · Free' }, { id: 'openai', label: 'OpenAI · Paid' }, { id: 'openrouter', label: 'OpenRouter · Paid' }, { id: 'off', label: 'Off' }]).map(provider => <option key={provider.id} value={provider.id}>{t(provider.label)}</option>)}
    </select></label>
    <p>{selected?.detail ? t(selected.detail) : ''} {t('Shared by desktop and all paired phones. Changes apply to the next transcription; text stays a draft.')}</p>
    {selected && !selected.available && <p role="status">{selected.id === 'local' ? t('Local Whisper needs setup on your computer.') : t('{key} is missing. Add it to the computer workspace .env.', { key: selected.id === 'openai' ? 'OPENAI_API_KEY' : 'OPENROUTER_API_KEY' })} {t('No automatic switch to another provider.')}</p>}
    {error && <p role="alert">{error}</p>}
  </section>
}
