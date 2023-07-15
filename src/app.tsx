import React from 'preact/compat';
import QuestionnaireLayout from '@/core/layout/QuestionnaireLayout'
import DefaultLayout from '@/core/layout/DefaultLayout'
import Home from '@/core/pages/HomeView.tsx'
import Overview from '@/core/pages/Questionnaire/Overview.tsx'
import Form from '@/core/pages/Questionnaire/Form.tsx'
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
    element: <QuestionnaireLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="overview" replace />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: ":slug",
        element: <Form />,
      },
      {
        path: "summary",
        element: <div>Questionnaire summary</div>,
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

