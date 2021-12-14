// @ts-nocheck
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { createStore } from './redux/store'

// Create Redux store with state injected by the server
const store = createStore(window.__PRELOADED_STATE__)

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)