// @ts-nocheck
import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { matchRoutes, renderRoutes } from "react-router-config";
import { createStore } from './redux/store'
import { StaticRouter } from 'react-router-dom'
import Routes from './Routes';

const app = Express()
const port = 3000

//Serve static files
app.use('/static', Express.static('static'))

// This is fired every time the server side receives a request
app.get('*', handleRender)

function handleRender(req, res) {
  const store = createStore();
  const promises = matchRoutes(Routes, req.url).map(({ route }) => {
    const { loadData } = route;
    return loadData ? loadData(store): null;
  });

  Promise.all(promises).then(() => {
    const html = render(req, store);
    res.send(html);
  });
}

function render(req, store) {
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();
  return renderFullPage(html, preloadedState);
}

function renderFullPage(html, preloadedState) {
	return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/usage/server-rendering#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port)