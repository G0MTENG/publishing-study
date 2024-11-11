import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import { theme } from './theme'

// styles
import './index.css'
import { ThemeProvider } from 'styled-components'
import { DeviceSizeProvider } from './components/atoms/provider/DevideProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DeviceSizeProvider>
        <App />
      </DeviceSizeProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
