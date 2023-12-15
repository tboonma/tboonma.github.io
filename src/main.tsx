import { Provider } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { mobXStore } from './stores/MobXStore'
import { Analytics } from '@vercel/analytics/react'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider {...{ mobXStore }}>
      <RouterProvider router={router} />
    </Provider>
    {import.meta.env.PROD && <Analytics />}
  </React.StrictMode>
)
