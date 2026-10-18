import { useState } from 'react'
import { setWorkspaceTheme, useWorkspaceTheme, type WorkspaceTheme } from '../lib/workspace-theme'
import { useT } from '../lib/i18n'

export default function ThemePicker() {
  const { preference } = useWorkspaceTheme()
  const t = useT()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const change = async (value: WorkspaceTheme) => {
    setBusy(true); setError('')
    try { await setWorkspaceTheme(value) }
    catch (error) { setError(error instanceof Error ? error.message : String(error)) }
    finally { setBusy(false) }
  }
  return <div className="workspace-theme-picker">
    <label>{t('Workspace theme')}<select aria-label={t('Workspace theme')} value={preference} disabled={busy} onChange={event => void change(event.target.value as WorkspaceTheme)}>
      <option value="dark">{t('Dark')}</option><option value="light">{t('Light')}</option><option value="system">{t('System')}</option>
    </select></label>
    <p>{t('Light uses dark text on a white background. System follows your device. Applies to Workspace and standard reports.')}</p>
    {error && <p role="alert">{error}</p>}
  </div>
}
