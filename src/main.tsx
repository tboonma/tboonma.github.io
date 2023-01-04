import { Provider } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { mobXStore } from './stores/MobXStore'
import { Analytics } from '@vercel/analytics/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider {...{ mobXStore }}>
      <App />
    </Provider>
    <Analytics />
  </React.StrictMode>
)
