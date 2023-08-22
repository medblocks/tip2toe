/*
  File: SummarySidebar.tsx
  File Description: The SummarySidebar component is used to display the Summary sidebar of the questionnaire.
*/

// Import necessary modules and components
import { useLocation } from "react-router-dom";
import FhirPatientDetails from "./FhirPatientDetails";
import * as signalStore from '@/core/store';
import { useEffect } from "preact/hooks";

// Define SummarySidebar interface for the component's props
interface SummarySidebarHandlerProps {
  _summary: Array<{
    value: string;
    code: string;
    title: string;
  }>;
}

const SummarySidebar: React.FC<SummarySidebarHandlerProps> = ({ _summary }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Auto-scroll the sidebar to its bottom when _summary updates
    const sidebar = document.getElementById("summarySidebar");
    if (sidebar) {
      sidebar.scrollTo({ top: sidebar.scrollHeight, behavior: "smooth" });
    }
  }, [_summary]);

  // Render function for the SVG icons based on item value
  const renderIcon = (value: string) => {
    let path = "";
    let color = "text-gray-500";

    switch (value) {
      case "Yes":
        path = "M4.5 12.75l6 6 9-13.5";
        color = "text-green-500";
        break;
      case "No":
        path = "M6 18L18 6M6 6l12 12";
        color = "text-red-500";
        break;
      default:
        path = "M12 6v6m0 0v6m0-6h6m-6 0H6";
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className={`w-5 h-5 inline-block mr-1 ${color}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={path}></path>
      </svg>
    );
  };

  return (
    <aside
      className={
        pathname !== `/questionnaire/summary`
          ? "sticky top-8 w-96 hidden shrink-0 md:block"
          : "hidden"
      }
    >
      <div className="fixed inset-y-0 z-50 flex w-96 flex-col">
        <div id="summarySidebar" className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 px-3 pb-4">
          <div className="flex mt-2 flex-1 flex-col text-center">
            <div className="">{signalStore.isPractitioner.value && <FhirPatientDetails />}</div>
            <h2 className="mt-2 text-4xl uppercase font-bold antialiased tracking-wide">Summary</h2>
            <div className="divide-y divide-gray-300 text-left px-2">
              {_summary.map(item => (
                <div key={item.code} className="text-gray-400">
                  <p>
                    {renderIcon(item.value)}
                    <strong>{item.code}</strong> {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SummarySidebar;
