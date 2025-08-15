import { ThemeProvider } from "@emotion/react"
import { CssBaseline, useMediaQuery } from "@mui/material"
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react"
import { useDebouncedCallback } from "use-debounce"
import { guardarCookie, leerCookie } from "../utils/cookies"
import { LightTheme } from "./LightTheme"
import { DarkTheme } from "./DarkTheme"


const DARK_SCHEME_QUERY = '(prefers-color-scheme: dark)'
type ThemeMode = 'light' | 'dark'

interface ThemeContextType {
  themeMode: ThemeMode
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeRegistry = ({ children }: { children: ReactNode }) => {

  const isDarkOS = useMediaQuery(DARK_SCHEME_QUERY)

  const isMountRef = useRef(false)
  const [themeMode, setThemeMode] = useState<ThemeMode>(isDarkOS ? 'dark' : 'light')
  
  const debounced = useDebouncedCallback(() => {
    isMountRef.current = true
  }, 500)
  
  const guardarModoOscuro = () => {
    setThemeMode('dark')
    guardarCookie('themeMode', 'dark')
    // imprimir('🌙')
  }

  const guardarModoClaro = () => {
    setThemeMode('light')
    guardarCookie('themeMode', 'light')
    // imprimir('☀️')
  }

  
  const guardarModoAutomatico = () => {
    setThemeMode(isDarkOS ? 'dark' : 'light')
    guardarCookie('themeMode', isDarkOS ? 'dark' : 'light')
    // imprimir('isDarkOS: ', isDarkOS ? '🌙' : '☀️')
  }
  
  const toggleTheme = () => {
    switch (themeMode) {
      case 'light':
        guardarModoOscuro()
        break
      case 'dark':
        guardarModoClaro()
        break
      default:
    }
  }
  
  useEffect(() => {
    const themeModeSaved = leerCookie('themeMode')
    // imprimir('themeMode', themeModeSaved)

    if (!themeModeSaved) {
      guardarModoAutomatico()
      isMountRef.current = false
      return
    }

    switch (themeModeSaved) {
      case 'dark':
        guardarModoOscuro()
        break
      case 'light':
        guardarModoClaro()
        break
      default:
        guardarModoClaro()
        break
    }
    isMountRef.current = false
    return
  }, [])
  
  useEffect(() => {
    if (isMountRef.current) {
      guardarModoAutomatico()
    }
    debounced()
  }, [isDarkOS])

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
        <ThemeProvider theme={themeMode === 'light' ? LightTheme : DarkTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
    </ThemeContext.Provider>
  )
}
