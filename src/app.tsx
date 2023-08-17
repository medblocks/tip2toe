import React, { useEffect, useState } from 'preact/compat';
import QuestionnaireLayout from '@/core/layout/QuestionnaireLayout'
import DefaultLayout from '@/core/layout/DefaultLayout'
import Home from '@/core/pages/HomeView.tsx'
import * as signalStore from '@/core/store'

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,

} from "react-router-dom";
import { _authHandler } from './auth';
import LoadingDialog from './core/components/LoadingDialog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        // element: <Home />,
        element: <Navigate to="/questionnaire/overview" replace />,

      }
    ]
  },
  {
    path: "/questionnaire",
    children: [
      {
        path: "",
        element: <Navigate to="overview" replace />,
      },
      {
        path: ":slug",
        element: <QuestionnaireLayout />
      },
    ],
  },
  {
    path: "*", 
    element: <div>Not found</div>,
  }
]);
const App = () => {
  const [isAppLoading, setIsAppLoading] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loadingText, setLoadingText] = React.useState('Loading Tip2Toe App...');
  let urlParams = new URLSearchParams(window.location.search);

  useState(async () => {
    if(Object.keys(signalStore.context.value).length==0){
      let _patientId, _encounterId
      if (urlParams.has('_patientId')&&urlParams.has('_encounterId')) {
        _patientId = urlParams.get('_patientId')
        _encounterId = urlParams.get('_encounterId')
      }
      setIsAppLoading(true)
      const _hasCode = window.location.href.includes('#code=')
      if ((urlParams.has('iss')&&urlParams.has('launch')||_hasCode)) {
        await _authenticate(urlParams.get('iss'),urlParams.get('launch'),_patientId,_encounterId).then(()=>{
          setIsAppLoading(false)
          setIsAuthenticated(true)
        })
        // const { idToken, context, services } = await  _authHandler(urlParams.get('iss'),urlParams.get('launch'),window.location.origin,_patientId,_encounterId)
        // setLoadingText('Loading User Data...')
        // signalStore._loadStore(idToken, context, services)
        // setIsAuthenticated(true)
      }
      else{
        console.log('no iss or launch',window.location.href)
      setIsAppLoading(false)

        // setLoadingText('Getting Authentication Information...')
        // const { idToken, context, services } = await  _authHandler(null,null,window.location.origin,_patientId,_encounterId)
        // setLoadingText('Loading User Data...')
        // signalStore._loadStore(idToken, context, services)
        // setIsAuthenticated(true)
      }
    }
    else{
      setIsAuthenticated(true)
    }
  });

  async function _authenticate(iss=null,launch=null,patientId=null,encounterId=null){
    setIsAppLoading(true)
    setLoadingText('Getting Authentication Information...')
    const { accessToken ,idToken, context, services } = await  _authHandler(iss,launch,window.location.origin,patientId,encounterId)
    signalStore._loadStore(idToken, context, services,accessToken)
    setIsAuthenticated(true)
    // return true
  }

  return (
    <>
      {!isAuthenticated?(
        <div class="flex min-h-full flex-col">
          {isAppLoading?(
            <LoadingDialog show={true} loadingText={loadingText} />
          ):(
            <Home _authenticate={_authenticate}  />
          )}
        </div>
      ):(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      )}
      
    </>
  )
}
export {App};

