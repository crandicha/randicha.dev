import React from 'react'
import { applyTheme, readTheme, type Theme } from '../../../utils/theme'

const iconClass = 'h-5 w-5'

const SunIcon = () => (
  <svg
    className={iconClass}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
    />
  </svg>
)

const MoonIcon = () => (
  <svg
    className={iconClass}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"
    />
  </svg>
)

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState<Theme | null>(null)

  React.useEffect(() => {
    setTheme(readTheme())
  }, [])

  const onToggle = () => {
    const next: Theme = readTheme() === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    setTheme(next)
  }

  if (theme === null) {
    return (
      <span
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full md:h-9 md:w-9"
        aria-hidden
      />
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink/80 transition hover:text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 dark:text-ink-dark/80 dark:hover:text-ink-dark md:h-9 md:w-9"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default ThemeToggle
