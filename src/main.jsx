import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.jsx'
import Avatar from './avatar.jsx'
import Picture from './picture.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Avatar />
    <Picture />
  </StrictMode>,

)
