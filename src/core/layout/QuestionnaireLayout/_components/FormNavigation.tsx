/*
  File: FormNavigation.tsx
  File Description: The FormNavigation component is used to display the navigation buttons at the bottom of the questionnaire.
*/

// Import necessary modules and components
import { useLocation, NavLink } from "react-router-dom";

interface FormNavHandlerProps {
  prevUrl: string | null;
  nextUrl: string | null;
}

const FormNav: React.FC<FormNavHandlerProps> = ({ prevUrl, nextUrl }) => {
  const { pathname } = useLocation();

  return (
    <div className="sticky z-10 bottom-0 bg-white border-t border-slate-200 print:hidden">
      <div className="flex px-4 h-16 justify-between items-center max-w-6xl mx-auto">
        {/* Render Previous button if prevUrl exists */}
        {prevUrl ? (
          <NavLink
            to={prevUrl}
            className="flex border rounded p-2 px-4 border-primary text-primary uppercase text-sm font-bold hover:bg-primary hover:text-white"
          >
            Previous
          </NavLink>
        ) : (
          <div></div> // Empty div acts as a placeholder
        )}

        {/* Render Next button if nextUrl exists */}
        {nextUrl ? (
          <NavLink
            to={nextUrl}
            className="flex border rounded p-2 px-4 border-primary text-primary uppercase text-sm font-bold hover:bg-primary hover:text-white"
          >
            Next
          </NavLink>
        ) : pathname === `/questionnaire/summary` ? ( // If on summary page and no nextUrl, show the Submit button
          <mb-submit className="cursor-pointer flex border rounded p-2 px-4 border-primary text-primary uppercase text-sm font-bold hover:bg-primary hover:text-white">
            Submit
          </mb-submit>
        ) : (
          <></> // Empty fragment acts as a placeholder
        )}
      </div>
    </div>
  );
};

export default FormNav;
