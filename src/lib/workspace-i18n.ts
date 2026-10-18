import type { WorkspaceEntity } from '../types'
import type { Language } from './i18n'

/**
 * Card text and tab files for the interface language. English (and any
 * language without a translation) returns the entity unchanged, so ids,
 * folders and categories stay the registry values. A localized step path is
 * the file that is displayed, and therefore the file a Markdown edit saves.
 */
export function localizeEntity(entity: WorkspaceEntity, language: Language): WorkspaceEntity {
  if (language === 'en') return entity
  const card = entity.translations?.[language]
  const steps = entity.steps.some(step => step.translations?.[language])
    ? entity.steps.map(step => {
      const local = step.translations?.[language]
      return local ? { ...step, name: local.name || step.name, path: local.path || step.path } : step
    })
    : entity.steps
  if (!card && steps === entity.steps) return entity
  return { ...entity, title: card?.title || entity.title, description: card?.description || entity.description, steps }
}

export function localizeEntities(entities: WorkspaceEntity[], language: Language): WorkspaceEntity[] {
  return language === 'en' ? entities : entities.map(entity => localizeEntity(entity, language))
}
