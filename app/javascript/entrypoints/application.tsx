import "@hotwired/turbo-rails"
import "../controllers"
import "chartkick"
import "chart.js/auto"
import React from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  return (
    <div>
      <h1>React is working!</h1>
      <div id="chart-container"></div>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root')
  if (rootElement) {
    const root = createRoot(rootElement)
    root.render(<App />)
  }
})