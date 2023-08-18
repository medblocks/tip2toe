import { render } from 'preact'
import { App } from './app.tsx'
import './assets/css/main.css'
import 'medblocks-ui'
import 'medblocks-ui/dist/styles'
// @ts-ignore
// import * as signalStore from '@/core/store'
// import { _authHandler } from './auth.ts'
// import { idToken, context, services } from './auth.ts'

// const queryString = window.location.search;
// console.log(window.location.search)
// const urlParams = new URLSearchParams(queryString);
// console.log('auth present',signalStore.context.value)
// if(Object.keys(signalStore.context.value).length==0){
//   if (urlParams.has('iss')&&urlParams.has('launch')) {
//     const { idToken, context, services } = await  _authHandler(urlParams.get('iss'),urlParams.get('launch'),window.location.href)
//     signalStore._loadStore(idToken, context, services)
//   }
//   else{
//     const { idToken, context, services } = await  _authHandler(null,null,window.location.href)
//     console.log('auth not present')
//     signalStore._loadStore(idToken, context, services)
//   }
// }

// console.log(signalStore.idToken,signalStore.context,signalStore.services)

render(<App />, document.getElementById('app')!)
