import 'preact';
import mb_form from 'medblocks-ui/dist/src/medblocks/form/form'
import mb_context from 'medblocks-ui/dist/src/medblocks/context/context'
import { Children } from 'preact/compat';
// The interface sets the medlblocksui components as global
declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      // ["component-name"]: {props, Events}
      ['mb-input']: {path: string, data?: string, terminology: string, textarea?: Boolean, label?: string, id?: string, required?: boolean, type?: string, placeholder?: string, min?: number, max?: number, minlength?: number, maxlength?: number, disabled?: boolean, rows?: string, resize?: string, onMbInput?: (event: CustomEvent<string>) => void},
      ['mb-form']: any,
      ['mb-context']: {path: string, bind?: object, label?: string},
      ['mb-buttons']: {path: string, label?: string, type?: string, data?: object, terminology?: string, disabled?: boolean, children?: any, onMbClick?: (event: CustomEvent<object>) => void},
      ['mb-option']: {value?: string, label?: string, selected?: boolean, disabled?: boolean},
      ['mb-search'] : {label?: string, disablefallback?: Boolean, plugin?: (event: CustomEvent<string>) => void},
    }
  }
}