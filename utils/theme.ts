export const THEME_STORAGE_KEY = 'theme'

export type Theme = 'light' | 'dark'

export function resolveTheme(stored: string | null): Theme {
  if (stored === 'light' || stored === 'dark') return stored
  return 'light'
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  localStorage.setItem(THEME_STORAGE_KEY, theme)
}

export function readTheme(): Theme {
  return resolveTheme(localStorage.getItem(THEME_STORAGE_KEY))
}
