import { getCurrentTheme, setTheme } from 'app/appReducer'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { THEME } from 'constants'
import Viewer from 'pages/Viewer'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from 'types'
import './App.css'
import theme from './theme'

function App() {
  const dispatch = useAppDispatch()

  const currentTheme = useAppSelector(getCurrentTheme)

  useEffect(() => {
    const currentTheme = window.localStorage.getItem(THEME) as Theme
    dispatch(setTheme(currentTheme || 'light'))
  }, [])

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Viewer />
    </ThemeProvider>
  )
}

export default App
