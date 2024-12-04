import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormSubmission from './pages/FormSubmission.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormSubmission/>
  </StrictMode>,
)
