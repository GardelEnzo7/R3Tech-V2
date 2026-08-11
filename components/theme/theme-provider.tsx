'use client'

import { createContext, useCallback, useContext, useSyncExternalStore } from 'react'

export type Theme = 'system' | 'light' | 'dark'

const STORAGE_KEY = 'r3-theme'

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
} | null>(null)

function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === 'system') {
    root.removeAttribute('data-theme')
    root.style.colorScheme = 'light dark'
  } else {
    root.setAttribute('data-theme', theme)
    root.style.colorScheme = theme
  }
}

const listeners = new Set<() => void>()

function subscribe(callback: () => void) {
  listeners.add(callback)
  return () => listeners.delete(callback)
}

function getSnapshot(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // Storage unavailable — fall through to "system".
  }
  return 'system'
}

/** Always "system" during SSR: matches what the server rendered, so there's no hydration mismatch. */
function getServerSnapshot(): Theme {
  return 'system'
}

/**
 * Reads the persisted preference through useSyncExternalStore instead of an
 * effect + setState, so the component subscribes to localStorage as an
 * external store rather than copying it into local state. The blocking
 * inline script in the <head> (THEME_INIT_SCRIPT) already applied the stored
 * theme to the DOM before hydration, so getServerSnapshot's "system" default
 * always matches the first client render too.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const setTheme = useCallback((next: Theme) => {
    applyTheme(next)
    try {
      if (next === 'system') {
        localStorage.removeItem(STORAGE_KEY)
      } else {
        localStorage.setItem(STORAGE_KEY, next)
      }
    } catch {
      // Storage unavailable (private mode, disabled cookies, ...) — theme still
      // applies for the current page load, it just won't persist.
    }
    for (const listener of listeners) listener()
  }, [])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}

export const THEME_INIT_SCRIPT = `(function(){try{var k='${STORAGE_KEY}',v=localStorage.getItem(k),r=document.documentElement;if(v==='light'||v==='dark'){r.setAttribute('data-theme',v);r.style.colorScheme=v}else{r.style.colorScheme='light dark'}}catch(e){}})();`
