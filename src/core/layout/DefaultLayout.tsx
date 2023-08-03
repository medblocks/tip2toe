import NavBar  from '@/core/layout/header.tsx'
import { Outlet } from 'react-router-dom';

export default function QuestionnaireLayout() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="mt-14">
        <Outlet />
      </div>
    </>
  )
}