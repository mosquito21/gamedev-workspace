import { Component, type ReactNode } from 'react'
import { t } from '../lib/i18n'

// A failed lazy import or renderer must not unmount the Workspace navigation.
export default class ReportBoundary extends Component<{
  children: ReactNode
  onHome: () => void
}, { error: Error | null }> {
  state: { error: Error | null } = { error: null }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    if (!this.state.error) return this.props.children
    return <div className="report-error" role="alert">
      <strong>{t('This report could not be opened.')}</strong>
      <p>{t('Reload to try again, or return to your Workspace. Your project files have not changed.')}</p>
      <div className="report-error-actions">
        <button onClick={() => window.location.reload()}>{t('Reload page')}</button>
        <button onClick={this.props.onHome}>{t('Back to Workspace')}</button>
      </div>
      <details><summary>{t('Error details')}</summary><pre>{this.state.error.message || String(this.state.error)}</pre></details>
    </div>
  }
}
