import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initMetaPixel } from './services/meta-pixel'
import { captureAttributionFromUrl } from './services/attribution'

captureAttributionFromUrl();
initMetaPixel();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
