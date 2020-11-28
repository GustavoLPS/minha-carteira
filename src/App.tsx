import React from 'react';
import GlobalStyles from './styles/GlobalStyles'
import { Layout } from './components/Layout';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/Dark'
import light from './styles/themes/Light'
import { Dashboard } from './pages/Dashboard';
import { List } from './pages/List';

export const App: React.FC = () => {
  return (
    
    <ThemeProvider theme={ dark }>
      <GlobalStyles />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  )
}