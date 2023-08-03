import React from 'preact/compat';
import QuestionnaireLayout from '@/core/layout/QuestionnaireLayout'
import DefaultLayout from '@/core/layout/DefaultLayout'
import Home from '@/core/pages/HomeView.tsx'
import Overview from '@/core/pages/Questionnaire/Overview.tsx'
import Form from '@/core/components/Questionnair/Form'
import IndividualView from '@/core/pages/Questionnaire/IndividualView.tsx'
import PregnancyView from '@/core/pages/Questionnaire/PregnancyView.tsx'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,

} from "react-router-dom";
import DeliveryView from './core/pages/Questionnaire/DeliveryView';
import AllView from './core/pages/Questionnaire/AllSections';

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
    // element: <QuestionnaireLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="overview" replace />,
      },
      // {
      //   path: "overview",
      //   element: <Overview />,
      // },
      // {
      //   path: "individual",
      //   element: <IndividualView />,
      // },
      // {
      //   path: "pregnancy",
      //   element: <PregnancyView />,
      // },
      // {
      //   path: "delivery",
      //   element: <DeliveryView />,
      // },
      {
        path: ":slug",
        element: <QuestionnaireLayout />
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

