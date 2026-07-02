import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang === 'cy' ? 'cy' : 'en'
  }, [lang])

  const toggle = () => setLang(l => l === 'en' ? 'cy' : 'en')

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
