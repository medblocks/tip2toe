import { useState, useEffect } from "preact/hooks";

interface LoadingDialogHandlerProps {
  show: boolean;
  loadingText?: string | null;
  onClose?: () => void;
}

const LoadingDialog: React.FC<LoadingDialogHandlerProps> = ({ show, onClose, loadingText = "Loading..." }) => {
  const [open, setOpen] = useState(show)
  const [text, setText] = useState(loadingText)
  useEffect(() => {
    setOpen(show);
    setText(loadingText);
  }, [show, loadingText]); 
  return (
    <>
      <div className={open?'relative':'hidden'} class="relative z-20" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="z-20 fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-20 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
              <div>
                <div class="mx-auto flex h-16 w-16 items-center justify-center">
                  <svg class="animate-spin h-16 w-16 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">{text}</p>
                  </div>
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