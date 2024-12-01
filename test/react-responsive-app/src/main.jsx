import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const measureResponsiveTime = () => {
  let startTime = performance.now()

  const mediaQuery = window.matchMedia('(max-width: 1000px)')

  const onChange = () => {
    const endTime = performance.now()
    const elapsedTime = endTime - startTime

    if (mediaQuery.matches) {
      console.log(`Switched to mobile view. Responsive time: ${elapsedTime.toFixed(2)}ms`)
    } else {
      console.log(`Switched to desktop view. Responsive time: ${elapsedTime.toFixed(2)}ms`)
    }

    startTime = performance.now()
  }

  mediaQuery.addEventListener('change', onChange)
}

measureResponsiveTime();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)