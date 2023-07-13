import { render } from 'preact'
import { App } from './app.tsx'
import './assets/css/main.css'
import 'medblocks-ui'
import 'medblocks-ui/dist/styles'

render(<App />, document.getElementById('app')!)
