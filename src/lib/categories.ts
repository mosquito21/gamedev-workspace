import { t } from './i18n'

export const CATEGORY_ICONS: Record<string, string> = {
  'image-gen': '\u{1F3A8}',
  'analytics': '\u{1F4CA}',
  'research': '\u{1F50D}',
  'lead-magnet': '\u{1F9F2}',
  'game': '\u{1F3AE}',
  'dev': '\u{1F6E0}\u{FE0F}',
}

export function categoryIcon(category: string): string {
  return CATEGORY_ICONS[category] ?? '\u{1F4C1}'
}

/**
 * Display name for a category id (ids stay untranslated in workspace.json).
 * `title` gives the Title Case form used in the card settings menu. Unknown
 * categories fall back to the English form of their id.
 */
export function categoryLabel(category: string, title = false): string {
  const words = category.replace(/-/g, ' ')
  return t(title ? words.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : words)
}
