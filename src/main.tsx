import { Provider } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { mobXStore } from './stores/MobXstore'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider {...{ mobXStore }}>
      <App />
    </Provider>
  </React.StrictMode>
)
