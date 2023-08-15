import { Outlet } from 'react-router-dom';

export default function QuestionnaireLayout() {
  return (
    <>
      <div className="mt-14">
        <Outlet />
      </div>
    </>
  )
}