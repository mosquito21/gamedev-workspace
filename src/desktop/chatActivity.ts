import type { ChatSession } from './types'
import { t } from '../lib/i18n'

export function chatActivityLabel(session: ChatSession) {
  const working = session.status === 'running' && session.activity === 'working'
  if (session.unread) return t(working ? 'Working · unread result' : 'Finished · unread result')
  if (working) return t('Working')
  if (session.status !== 'running') return t(session.status === 'starting' ? 'Starting' : 'Stopped')
  if (session.activity === 'waiting') return t('Needs attention · check terminal')
  return t(['codex', 'claude', 'opencode'].includes(session.agent) ? 'Ready' : 'Terminal open')
}
