/*
  File: main.tsx
  File Description: This file is responsible for setting up the application and rendering the root component.
*/

// Importing Preact and the root component.
import { render } from 'preact'
import { App } from './app.tsx'

// Importing the global styles.
import './assets/css/main.css'

// Importing medblocks-ui
import 'medblocks-ui'
import 'medblocks-ui/dist/styles'

// Rendering the root component.
render(<App />, document.getElementById('app')!)
