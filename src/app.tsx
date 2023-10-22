/*
  File: app.tsx
  File Description: This file is responsible for setting up the application and rendering the root component. It also handles authentication and loading of the application.
*/

// Importing necessary Preact components
import React, { useState, useEffect } from 'preact/compat';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

// Importing the Layout component for the Questionnaire
import QuestionnaireLayout from '@/core/layout/QuestionnaireLayout';

// Importing the Home view
import Home from '@/core/pages/HomeView.tsx';
import HomeDev from '@/core/pages/HomeDevView.tsx';

// Importing the signal store for global state management
import * as signalStore from '@/core/store';

// Importing the authentication handler
import { _authHandler } from './auth';

// Importing the AppLoading component
import AppLoading from './core/components/AppLoading';


// Routes configuration for the application
const routes = [
  {
    path: "",
    element: <Navigate to="/questionnaire/overview" replace /> ,
  },
  {
    path: "/questionnaire",
    children: [
      { path: "", element: <Navigate to="overview" replace /> },
      { path: ":slug", element: <QuestionnaireLayout /> }
    ]
  },
  { path: "*", element: <div>Not found</div> }
];

// Main application component. This component handles the authentication and loading of the application.
const App = () => {
  // State management for application loading, authentication, and loading text
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isDev, setIsDev] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadingText, setLoadingText] = useState('Loading Tip2Toe App...');

  // Extracting URL parameters from the current window's location
  const urlParams = new URLSearchParams(window.location.search);

  // Effect hook that initializes the app
  useEffect(() => {
    async function initializeApp() {

      setIsDev(import.meta.env.VITE_IS_DEV)

      if (isDev){
        setIsAppLoading(false);
        return
      }


      // Check if signal store's context value is empty
      if (Object.keys(signalStore.context.value).length === 0) {
        const _patientId = urlParams.get('_patientId');
        const _encounterId = urlParams.get('_encounterId');
        const _hasCode = window.location.href.includes('#code=');
        const iss = urlParams.get('iss');
        const launch = urlParams.get('launch');
        
        setLoadingText('Authenticating...');

        // Check for 'iss', 'launch' parameters or the presence of '#code=' in the URL
        if (iss && launch || _hasCode) {
          if(_hasCode) setLoadingText('Getting Authentication Information...');
          await authenticate(iss, launch, _patientId, _encounterId);
          setIsAppLoading(false);
          setIsAuthenticated(true);
        } 
        else if (!iss && sessionStorage?.getItem('idToken')) {
          signalStore._loadStoreFromSessionStorage();
          setIsAppLoading(false);
          setIsAuthenticated(true);
        }
        else {
          console.log('no iss or launch', window.location.href);
          setIsAppLoading(false);
        }
      } else {
        setIsAuthenticated(true);
      }
    }

    signalStore.context.subscribe((value)=>{
      if(!value) 
      initializeApp();
    })

    initializeApp();
  }, []);

  // Authentication function using the _authHandler and updating the signalStore
  async function authenticate(iss = null as string | null, launch = null as string | null, patientId = null as string | null, encounterId = null as string | null) {
    setIsAppLoading(true);
    const { accessToken, idToken, context, services } = await _authHandler(iss, launch, window.location.origin, patientId, encounterId);
    signalStore._loadStore(idToken, context, services, accessToken);
    setIsAuthenticated(true);
  }

  async function _authHandlerMain(type=1){
    if(type === 1){
      await authenticate('https://app3.medblocks.com/fhir');
    }else {
      await authenticate('https://karolinska.medblocks.com/fhir');
    }
  }

  async function _authHandlerDev(ehrId: string,isPractitioner: Boolean){
    signalStore._loadStoreDev(ehrId,isPractitioner)
    setIsAuthenticated(true)
  }

  // Render the main application component
  return (
    <>
      {!isAuthenticated ? (
        // If not authenticated, show loading screen or the Home view
        <div className="flex min-h-full flex-col">
          {isAppLoading ? <AppLoading show={true} loadingText={loadingText} /> : isDev? <HomeDev _authenticate={_authHandlerDev} /> : <Home _authenticate={_authHandlerMain} />}
        </div>
      ) : (
        // If authenticated, render the router with the defined routes
        <React.StrictMode>
          <RouterProvider router={createBrowserRouter(routes)} />
        </React.StrictMode>
      )}
    </>
  )
}

// Export the App component
export { App };
