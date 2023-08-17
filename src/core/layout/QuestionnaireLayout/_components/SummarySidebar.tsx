import { useLocation } from "react-router-dom";

interface SummarySidebarHandlerProps {
  _summary: Array<object>;
}

const SummarySidebar: React.FC<SummarySidebarHandlerProps> = ({ _summary }) => {
  const { pathname } = useLocation();
  return (
    <>
    <aside
        class={
          pathname != `/questionnaire/summary`
            ? "sticky top-8 w-96 shrink-0 xl:block"
            : "hidden"
        }
      >
        <div class="fixed inset-y-0 z-50 flex w-96 flex-col">
          <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 px-3 pb-4">
            <div class="flex mt-2 flex-1 flex-col">
              <div class="text-center ">
                <h2 class="mt-10 text-4xl uppercase font-bold antialiased tracking-wide">
                  Summary
                </h2>
                <div class="mt-4 divide-y divide-gray-300 text-left px-2 ">
                  {_summary.map((item: any) => (
                    <div key={item.code} className={"text-gray-400"}>
                      <p>
                        {item.value == "Yes" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-5 h-5 inline-block mr-1 text-green-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            ></path>
                          </svg>
                        ) : item.value == "No" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-5 h-5 inline-block mr-1 text-red-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            class="w-5 h-5 inline-block mr-1 text-gray-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            ></path>
                          </svg>
                        )}
                        <strong>{item.code}</strong> {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default SummarySidebar;