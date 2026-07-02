import React from 'react'
import ReactDOM from 'react-dom/client'
import { LanguageProvider } from './client/context/LanguageContext.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)
