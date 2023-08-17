import { NavLink, useLocation } from "react-router-dom";
import { MBFormData } from "@/types.ts";
import { useEffect } from "preact/hooks";

export default function SidebarNavigation({ formSections }: MBFormData) {
  const { pathname } = useLocation();
  useEffect(() => {
    var activeNav = document.getElementById(
      pathname.split("/questionnaire/")[1]
    );
    if (activeNav) checkIfInView(activeNav);
  }, [pathname]);

  function checkIfInView(element: HTMLElement) {
    var navigationSidebar = document.getElementById("navigationSidebar");
    if (navigationSidebar) {
      var offsetTop = 0;
      var elem = element;
      do {
        if (!isNaN(elem.offsetTop)) {
          offsetTop += elem.offsetTop;
        }
      } while ((elem = elem.offsetParent));
      var offset = offsetTop - navigationSidebar.scrollTop;
      if (offset > navigationSidebar.clientHeight) {
        navigationSidebar.scrollTo({
          top:
            navigationSidebar.scrollTop +
            offset -
            navigationSidebar.clientHeight +
            element.clientHeight,
          behavior: "smooth",
        });
        return false;
      } else if (offset < 0) {
        navigationSidebar.scrollTo({
          top: navigationSidebar.scrollTop + offset,
          behavior: "smooth",
        });
        return false;
      }
      return true;
    }
  }

  return (
    <>
      {Object.entries(formSections)?.map(([, value], i) => {
        const url = `/questionnaire/${value.slug}`;
        return (
          <NavLink
            id={value.slug}
            key={url}
            className={({ isActive }: any) =>
              ` flex w-full items-center rounded-md text-sm px-4 py-2 ${
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
