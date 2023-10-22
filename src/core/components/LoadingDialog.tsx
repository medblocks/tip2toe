/*
  File: LoadingDialog.tsx
  File Description: The LoadingDialog component is used to display a loading dialog to the user.
*/

import { useState, useEffect } from "preact/hooks";

// Define the properties for the LoadingDialog component
interface LoadingDialogHandlerProps {
  show: boolean;
  loadingText?: string | null;
  onClose?: () => void;
}

const LoadingDialog: React.FC<LoadingDialogHandlerProps> = ({ 
  show, 
  loadingText = "Loading...", 
  onClose = () => {} 
}) => {
  
  // State to control whether the dialog is visible
  const [open, setOpen] = useState(show);
  
  // State to control the displayed text
  const [text, setText] = useState(loadingText);

  // useEffect to handle changes in show and loadingText props
  useEffect(() => {
    setOpen(show);
    setText(loadingText);

    // If the dialog is set to hide, call the onClose callback if provided
    if (!show) onClose();
  }, [show, loadingText]);

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
            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
              
              {/* Loading spinner */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center">
                <svg class="animate-spin h-16 w-16 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              
              {/* Loading text */}
              <div className="mt-3 text-center sm:mt-5">
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{text}</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoadingDialog;
