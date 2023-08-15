import { useLocation } from "react-router-dom";

interface Item {
  value: string;
  code: string;
  title: string;
}

interface OverviewProps {
  selectedValues: Item[];
}

export default function Overview({ selectedValues }: OverviewProps) {
  const { pathname } = useLocation();

  if (pathname !== `/questionnaire/summary`) return null;

  return (
    <div>
      <h2 className="mt-0 text-4xl uppercase font-bold antialiased tracking-wide">Summary</h2>
      <div className="mt-4 text-left px-2">
        {selectedValues.map(item => (
          <div key={item.code} className={item.value=="Yes"?'text-gray-800':'text-gray-800/40'}>
            <p>
              {renderIcon(item.value)}
              <strong>{item.code}</strong> {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function renderIcon(value: string) {
  let path: string;
  let color: string;

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
      color = "text-gray-500";
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      aria-hidden="true"
      className={`w-5 h-5 inline-block mr-1 ${color}`}
    >
      <path stroke-linecap="round" stroke-linejoin="round" d={path}></path>
    </svg>
  );
}
