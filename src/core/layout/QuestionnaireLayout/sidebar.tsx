import { NavLink } from 'react-router-dom';
import { MBFormData } from "@/types.ts";


export default function Sidebar({ formSections }: MBFormData) {
  let totalSections = Object.keys(formSections).length;
  return (
    <>
      <NavLink
        className={({ isActive }: any ) =>
          ` flex w-full items-center rounded-md text-sm px-4 py-2 ${
            isActive
              ? 'bg-udni-teal text-white'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
          }`
        }
        to={`/questionnaire/overview`}
      >
        0. {"Overview"}
      </NavLink>
      <NavLink
        className={({ isActive }: any ) =>
          ` flex w-full items-center rounded-md text-sm px-4 py-2 ${
            isActive
              ? 'bg-udni-teal text-white'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
          }`
        }
        to={`/questionnaire/this-is-me`}
      >
        1. {"This is me"}
      </NavLink>
      {Object.entries(formSections)?.map(([key, value], i)=> {
        const url = `/questionnaire/${value.slug}`;
        return (
          <NavLink
            key={url}
            className={({ isActive }: any ) =>
              ` flex w-full items-center rounded-md text-sm px-4 py-2 ${
                isActive
                  ? 'bg-udni-teal text-white'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
              }`
            }
            to={url}
          >
            {i + 2}. {value.title}
          </NavLink>
        );
      })}
      <NavLink
        className={({ isActive }: any ) =>
          ` flex w-full items-center rounded-md text-sm px-4 py-2 ${
            isActive
              ? 'bg-udni-teal text-white'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
          }`
        }
        to={`/questionnaire/summary`}
      >
        {totalSections}. {"Summary"}
      </NavLink>
    </>
  );
}