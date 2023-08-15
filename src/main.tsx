import { render } from 'preact'
import { App } from './app.tsx'
import './assets/css/main.css'
import 'medblocks-ui'
import 'medblocks-ui/dist/styles'
import { idToken, context, services } from './auth.ts'

console.log({idToken, context, services})

render(<App />, document.getElementById('app')!)
