import 'preact';
// The interface sets the medlblocksui components as global
declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      // ["component-name"]: {props, Events}
      ['mb-input']: {path: string, data?: string, terminology?: string, textarea?: Boolean, label?: string, id?: string, required?: boolean, type?: string, placeholder?: string, min?: number, max?: number, minlength?: number, maxlength?: number, disabled?: boolean, rows?: string, resize?: string, onMbInput?: (event: CustomEvent<string>) => void},
      ['mb-form']: {children?: any, id: string, ctx?: any, novalidate?: boolean, templateId?: string, nosuggest?: boolean, variant?: string, onMbSubmit?: (event: CustomEvent<object>) => void},
      ['mb-context']: {path: string, bind?: object, label?: string},
      ['mb-buttons']: {path: string, label?: string, type?: string, data?: object, terminology?: string, disabled?: boolean, children?: any, onMbClick?: (event: CustomEvent<object>) => void},
      ['mb-option']: {value?: string, label?: string, selected?: boolean, disabled?: boolean},
      ['mb-search'] : {label?: string, disablefallback?: Boolean, plugin?: (event: CustomEvent<string>) => void},
      ['mb-select']: {path: string, data?: string, children:any ,terminology?: string, label?: string, id?: string, required?: boolean, placeholder?: string, disabled?: boolean, onMbInput?: (event: CustomEvent<string>) => void},
      ['mb-submit']: {label?: string, children?: any, class:string, disabled?: boolean, onMbClick?: (event: CustomEvent<object>) => void},
      ['mb-textarea']: {path: string, data?: string, terminology?: string, label?: string, id?: string, required?: boolean, placeholder?: string, disabled?: boolean, rows?: string, resize?: string, onMbInput?: (event: CustomEvent<string>) => void},
      ['mb-duration']: {path: string, data?: string, year?:any, month?:any, day?:any,  hour?:any, terminology?: string, label?: string, id?: string, required?: boolean, placeholder?: string, disabled?: boolean, rows?: string, resize?: string, onMbInput?: (event: CustomEvent<string>) => void},
      ['mb-quantity']: {path: string, children:any, default?:any, data?: string, terminology?: string, label?: string, id?: string, required?: boolean, placeholder?: string, disabled?: boolean, rows?: string, resize?: string, onMbInput?: (event: CustomEvent<string>) => void},
      ['mb-unit']: {value?: string, label?: string, selected?: boolean, disabled?: boolean, unit: string, min?:string, max?:string, },
    
    }
  }
}