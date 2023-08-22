/*
  File: SidebarNavigation.tsx
  File Description: The SidebarNavigation component is used to display the Summary sidebar of the questionnaire.
*/

// Import necessary modules and components
import { NavLink, useLocation } from "react-router-dom";
import { MBFormData } from "@/types.ts";
import { useEffect } from "preact/hooks";

export default function SidebarNavigation({ formSections }: MBFormData) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Extract the active navigation item's ID from the current path.
    const activeNavId = pathname.split("/questionnaire/")[1];
    const activeNav = document.getElementById(activeNavId);
    if (activeNav) {
      checkIfInView(activeNav);
    }
  }, [pathname]);

  function checkIfInView(element: HTMLElement) {
    const navigationSidebar = document.getElementById("navigationSidebar");
    if (navigationSidebar) {
      let offsetTop = element.offsetTop;
      let elem: HTMLElement | null = element;

      // Calculate the cumulative offsetTop value.
      while ((elem = elem.offsetParent as HTMLElement | null)) {
        offsetTop += elem.offsetTop;
      }

      const offset = offsetTop - navigationSidebar.scrollTop;

      // Check if the element is out of view at the bottom.
      if (offset + 30 > navigationSidebar.clientHeight) {
        navigationSidebar.scrollTo({
          top:
            navigationSidebar.scrollTop +
            offset -
            navigationSidebar.clientHeight +
            element.clientHeight,
          behavior: "smooth",
        });
      } 
      // Check if the element is out of view at the top.
      else if (offset < 0) {
        navigationSidebar.scrollTo({
          top: navigationSidebar.scrollTop + offset,
          behavior: "smooth",
        });
      }
    }
  }

  return (
    <>
      {Object.entries(formSections).map(([, value], i) => {
        const url = `/questionnaire/${value.slug}`;

        // Render NavLink for each form section.
        return (
          <NavLink
            id={value.slug} // Use the slug as an ID for the navigation element.
            key={url}
            className={({ isActive }: { isActive: boolean }) => 
              `flex w-full items-center rounded-md text-sm px-4 py-2 ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-200"
              }`
            }
            to={url}
          >
            {i + 1}. {value.title}
          </NavLink>
        );
      })}
    </>
  );
}
