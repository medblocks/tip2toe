import { useState, useEffect } from "preact/hooks";

interface ConfirmAlertHandlerProps {
  message: string;
  title: string;
  _onConfirm: () => void;
  _onCancel: () => void;
  id?: string | null;
}

const ConfirmAlert: React.FC<ConfirmAlertHandlerProps> = ({ message, title, _onConfirm, _onCancel, id=null}) => {
  const [open, setOpen] = useState<boolean>(false)
  const [text, setText] = useState<string>(message)
  const [titleText, setTitleText] = useState<string>(title)
  useEffect(() => {
    console.log(message);
    if (message) {
      let text = (message).toString();
      setText(text);
      setTitleText(title);
      setOpen(true);
    }
  }, [id]);

  function confirm() {
    _onConfirm();
    setOpen(false);
  }

  function cancel() {
    _onCancel();
    setOpen(false);
  }

  return (
    <>
      <div className={open?'relative':'hidden'} class="z-20" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed z-20 inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-20 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{titleText}</h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">{text}</p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button onClick={confirm} type="button" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2">Confirm</button>
                <button onClick={cancel} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmAlert;