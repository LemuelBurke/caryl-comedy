import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './client/styles/caryl-comedy.css'

import { CarylComedyPage } from './client/pages/CarylComedyPage.jsx'
import { AdminLoginPage } from './client/pages/AdminLoginPage.jsx'
import { AdminDashboard } from './client/pages/AdminDashboard.jsx'
import { PrivacyPolicyPage } from './client/pages/PrivacyPolicyPage.jsx'
import { TermsPage } from './client/pages/TermsPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
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
