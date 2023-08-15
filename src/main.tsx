import { render } from 'preact'
import { App } from './app.tsx'
import './assets/css/main.css'
import 'medblocks-ui'
import 'medblocks-ui/dist/styles'
import { idToken, context } from './auth.ts'

console.log({idToken, context})

render(<App />, document.getElementById('app')!)
