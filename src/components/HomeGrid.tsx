import type { WorkspaceEntity } from '../types'
import { categoryIcon, categoryLabel } from '../lib/categories'
import { t, useLanguage } from '../lib/i18n'
import MakCard from './MakCard'
import MakLogo from './MakLogo'

interface HomeGridProps {
  entities: WorkspaceEntity[]
  pinned: WorkspaceEntity[]
  grouped: Map<string, WorkspaceEntity[]>
  offline: boolean
  searching: boolean
  query: string
}

function greeting(): string {
  const h = new Date().getHours()
  if (h < 5) return t('Burning the midnight oil, sir?')
  if (h < 12) return t('Good morning, sir.')
  if (h < 18) return t('Good day, sir.')
  return t('Good evening, sir.')
}

export default function HomeGrid({
  entities,
  pinned,
  grouped,
  offline,
  searching,
  query,
}: HomeGridProps) {
  const { tn } = useLanguage()
  const activeCount = entities.filter(e => e.status === 'active').length
  const categoryCount = new Set(entities.map(e => e.category || 'other')).size
  const shown = pinned.length + [...grouped.values()].reduce((n, list) => n + list.length, 0)

  return (
    <div className="home">
      <header className="home-hero">
        <MakLogo size={84} />
        <div>
          <h1 className="home-title">{greeting()}</h1>
          <p className="home-sub">
            <b>{activeCount}</b> {t('active')} · <b>{entities.length}</b> {t('entities')} ·{' '}
            <b>{categoryCount}</b> {t('categories')}
            {offline && <span className="home-offline"> · {t('workspace.json unreachable')}</span>}
          </p>
        </div>
      </header>

      {searching && (
        <p className="home-filter">
          {shown === 0 ? t('No matches for “{query}” — archive included', { query: query.trim() }) : tn(shown, '{count} match for “{query}” — archive included', '{count} matches for “{query}” — archive included', { query: query.trim() })}
        </p>
      )}

      {pinned.length > 0 && (
        <section className="home-section">
          <div className="section-head">
            <span className="section-title">{'\u{1F4CC}'} {t('pinned')}</span>
            <span className="section-count">{pinned.length}</span>
          </div>
          <div className="card-grid">
            {pinned.map(e => (
              <MakCard key={e.id} entity={e} />
            ))}
          </div>
        </section>
      )}

      {[...grouped.entries()].map(([cat, list]) => (
        <section key={cat} className="home-section">
          <div className="section-head">
            <span className="section-title">
              {categoryIcon(cat)} {categoryLabel(cat)}
            </span>
            <span className="section-count">{list.length}</span>
          </div>
          <div className="card-grid">
            {list.map(e => (
              <MakCard key={e.id} entity={e} />
            ))}
          </div>
        </section>
      ))}

      {shown === 0 && !searching && (
        <div className="home-empty">
          {offline
            ? t('Could not load workspace.json — is the public/workspace link in place? Run npm run dev again, sir.')
            : t('Nothing here yet. New work will appear as cards, sir.')}
        </div>
      )}
    </div>
  )
}
