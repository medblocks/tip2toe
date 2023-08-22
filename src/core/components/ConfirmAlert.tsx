/*
  File: ConfirmAlert.tsx
  File Description: The ConfirmAlert component is used to display a confirmation dialog to the user.
*/

import { useState, useEffect } from "preact/hooks";

// Define the properties for the ConfirmAlert component
interface ConfirmAlertHandlerProps {
  message: string;
  title: string;
  _onConfirm: () => void;
  _onCancel: () => void;
  id?: string | null;
}

const ConfirmAlert: React.FC<ConfirmAlertHandlerProps> = ({ 
  message, 
  title, 
  _onConfirm, 
  _onCancel, 
  id = null 
}) => {
  
  // State to control dialog visibility
  const [open, setOpen] = useState<boolean>(false);

  // State to manage displayed message
  const [text, setText] = useState<string>(message);

  // State to manage displayed title
  const [titleText, setTitleText] = useState<string>(title);

  // useEffect to handle changes in the message and title based on id prop
  useEffect(() => {
    if (message) {
      setText(message.toString());
      setTitleText(title);
      setOpen(true);
    }
  }, [id]);

  // Handle confirm action
  function confirm() {
    _onConfirm();
    setOpen(false);
  }

  // Handle cancel action
  function cancel() {
    _onCancel();
    setOpen(false);
  }

  return (
    <>
      {/* Only render the dialog when 'open' state is true */}
      <div className={open ? 'relative z-20' : 'hidden'} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        
        {/* Semi-transparent background */}
        <div className="fixed inset-0 z-20 bg-gray-500 bg-opacity-75"></div>
        
        {/* Dialog container */}
        <div className="fixed inset-0 z-20 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            
            {/* Dialog content */}
            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              
              {/* Dialog icon */}
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              
              {/* Dialog title and message */}
              <div className="mt-3 text-center sm:mt-5">
                <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">{titleText}</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{text}</p>
                </div>
              </div>
              
              {/* Confirm and Cancel buttons */}
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button onClick={confirm} type="button" className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2">Confirm</button>
                <button onClick={cancel} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0">Cancel</button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmAlert;
