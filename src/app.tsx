import React from 'preact/compat';
import QuestionnaireLayout from '@/core/layout/QuestionnaireLayout'
import DefaultLayout from '@/core/layout/DefaultLayout'
import Home from '@/core/pages/HomeView.tsx'

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,

} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Home />,
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
export function App() {
  return (
    <>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </>
  )
}

