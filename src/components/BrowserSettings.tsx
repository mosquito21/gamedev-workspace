import ThemePicker from './ThemePicker'
import LanguagePicker from './LanguagePicker'
import { useT } from '../lib/i18n'

export default function BrowserSettings() {
  const t = useT()
  return <details className="browser-settings" onKeyDown={event => { if (event.key === 'Escape') { event.currentTarget.open = false; event.currentTarget.querySelector('summary')?.focus() } }}>
    <summary role="button" aria-label={t('Workspace settings')}>{t('Settings')}</summary>
    <div className="browser-settings-panel"><h2>{t('Appearance')}</h2><ThemePicker /><LanguagePicker /></div>
  </details>
}
