import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/Dark'
import light from './styles/themes/Light'
import { Routes } from './routes'

export const App: React.FC = () => {
  return (
    
    <ThemeProvider theme={ dark }>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}