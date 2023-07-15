import NavBar  from '@/core/layout/header.tsx'
import Sidebar from './sidebar.tsx'
import tip2toeForm from '@/tip2toeform';
import { Outlet, useLocation } from 'react-router-dom';


export default function QuestionnaireLayout() {
  const { pathname } = useLocation();
  const formSections:any = tip2toeForm.formSections ?? [];

  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-6xl">
        <div className="fixed top-16 bottom-16 hidden w-72 overflow-auto p-4 md:block">
          <Sidebar formSections={tip2toeForm.formSections} />
        </div>
        <div className="md:ml-72 p-4 pb-20 pt-24 overflow-auto ">
          <Outlet />
        </div>
      </div>
    </>
  )
}