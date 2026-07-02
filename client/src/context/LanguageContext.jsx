import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')
  const [hasChosen, setHasChosen] = useState(() => localStorage.getItem('lang_chosen') === 'true')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang === 'cy' ? 'cy' : 'en'
  }, [lang])

  const toggle = () => setLang(l => l === 'en' ? 'cy' : 'en')

  const choose = (chosenLang) => {
    setLang(chosenLang)
    setHasChosen(true)
    localStorage.setItem('lang_chosen', 'true')
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, hasChosen, choose }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
