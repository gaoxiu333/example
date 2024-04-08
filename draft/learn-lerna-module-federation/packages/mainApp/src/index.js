import { createRoot } from 'react-dom/client'
import React from 'react'

window['subAppUrl'] = "http://localhost:3001"

document.body.innerHTML = `<div id='root'></div>`
console.log("Main:Hello World!");
const RemoteApp = React.lazy(() => import('subApp/App'))

const root = createRoot(document.getElementById('root')) // TODO: fix
root.render(React.createElement('h1', null, [React.createElement('h2',null,'2222'),'main: hello world']))