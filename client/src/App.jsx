import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './styles/caryl-comedy.css'

import { CarylComedyPage } from './pages/CarylComedyPage.jsx'
import { AdminLoginPage } from './pages/AdminLoginPage.jsx'
import { AdminDashboard } from './pages/AdminDashboard.jsx'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage.jsx'
import { TermsPage } from './pages/TermsPage.jsx'
import { LanguageGate } from './components/caryl-comedy/LanguageGate.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <LanguageGate />
      <Routes>
        <Route path="/" element={<CarylComedyPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
