import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://91418b6ef58415069296b2db8f2f6fef@o4508504600608768.ingest.de.sentry.io/4508506163642448",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration()
  ],
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 0.1,
  enabled: import.meta.env.PROD,
  environment: import.meta.env.PROD ? 'production' : 'development',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sentry.ErrorBoundary fallback={({ error }) => (
      <div>
        <h1>Oops! An error occurred.</h1>
        <p>{error.message}</p>
      </div>
    )}>
      <App />
    </Sentry.ErrorBoundary>
  </StrictMode>
)