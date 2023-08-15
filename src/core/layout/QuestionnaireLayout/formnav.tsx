import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

interface FormNavHandlerProps {
  prevUrl: string | null;
  nextUrl: string | null;
}

const FormNav: React.FC<FormNavHandlerProps> = ({ prevUrl, nextUrl }) => {
  const { pathname } = useLocation();
  return (
    <>
    <div className="sticky z-10 bottom-0 bg-white border-t border-slate-200 print:hidden">
      <div className="flex px-4 h-16 justify-between items-center max-w-6xl mx-auto">
        {prevUrl ? (
          <NavLink
            to={prevUrl}
            className="flex border rounded p-2 px-4 border-udni-teal text-udni-teal uppercase text-sm font-bold hover:bg-udni-teal hover:text-white"
          >
            Previous
          </NavLink>
        ) : (
          <div></div>
        )}
        {nextUrl && (
          <NavLink
            className="flex border rounded p-2 px-4 border-udni-teal text-udni-teal uppercase text-sm font-bold hover:bg-udni-teal hover:text-white"
            to={nextUrl}
          >
            Next
          </NavLink>
        )}
        {nextUrl == null && pathname == `/questionnaire/summary` ? (
          <mb-submit className="cursor-pointer flex border rounded p-2 px-4 border-udni-teal text-udni-teal uppercase text-sm font-bold hover:bg-udni-teal hover:text-white">
            Submit
          </mb-submit>
        ) : (
          <></>
        )}
      </div>
    </div>
    </>
  )
}

export default FormNav;