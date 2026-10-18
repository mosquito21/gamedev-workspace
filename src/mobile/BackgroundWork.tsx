import './backgroundWork.css'
import { useT, t, tn } from '../lib/i18n'

export interface WorkingAgent { id: string; name: string; type: string; step: string; startedAt: string; updatedAt: string }
export interface BackgroundCommand { id: string; name: string; title: string; startedAt: string; agent?: string }

function elapsed(from: string, now: number) {
  const seconds = Math.max(0, Math.round((now - Date.parse(from)) / 1000))
  if (seconds < 60) return t('{seconds} s', { seconds })
  if (seconds < 3600) return t('{minutes} min', { minutes: Math.floor(seconds / 60) })
  return t('{hours} h {minutes} min', { hours: Math.floor(seconds / 3600), minutes: Math.floor(seconds % 3600 / 60) })
}

// Subagents and background commands the chat started that are still working. Shown
// above the composer, since they keep going while the chat itself is idle.
export default function BackgroundWork({ agents = [], commands = [], now }: { agents?: WorkingAgent[]; commands?: BackgroundCommand[]; now: number }) {
  useT()
  if (!agents.length && !commands.length) return null
  const agentCount = tn(agents.length, '{count} agent', '{count} agents'), commandCount = tn(commands.length, '{count} command', '{count} commands')
  const title = agents.length && commands.length ? t('{agents} and {commands} working', { agents: agentCount, commands: commandCount }) : t('{work} working', { work: agents.length ? agentCount : commandCount })
  return <details className="background-work">
    <summary><i aria-hidden="true" /><strong>{title}</strong><span>{[...agents.map(agent => agent.name), ...commands.map(command => command.title)].join(' · ')}</span></summary>
    <ul>
      {agents.map(agent => <li key={agent.id}>
        <strong>{agent.name}</strong>
        <span>{agent.step}</span>
        <small>{[agent.type, t('running {time}', { time: elapsed(agent.startedAt, now) })].filter(Boolean).join(' · ')}</small>
      </li>)}
      {commands.map(command => <li key={command.id} className="command">
        <strong>{command.title}</strong>
        <span>{command.agent ? t('{command} · started by {agent}', { command: command.name, agent: command.agent }) : command.name}</span>
        <small>{t('running {time}', { time: elapsed(command.startedAt, now) })}</small>
      </li>)}
    </ul>
  </details>
}
