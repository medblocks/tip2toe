/*
  File: types.ts
  File Description: This file is used to declare medblocks form sections and questions types.
*/
export type YesNoUnknown = 'yes' | 'no' | 'unknown';
export type QuestionType =
  | 'text'
  | 'longText'
  | 'number'
  | 'select'
  | 'selectMultiple'
  | 'date';
export interface IQuestion {
  title: string;
  name: string;
  type: QuestionType;
  options?: string[];
}
export interface IForm {
  title: string;
  formSections?: IFormSection[];
}
export interface IFormSection {
  title: string;
  ontologies?: Array<{ id:string; name?: string; url?: string; label?: string  }>;
  slug: string;
  description?: string;
  questions?: IQuestion[];
  uploadSections?: string[];
}


// New
export type MBQuestionType = 
| 'text'
| 'longText'
| 'number'
| 'select'
| 'selectMultiple'
| 'date'
| 'ontology';

export interface MBQuestion {
  code?: string;
  terminology: string;
  value: string;
  path: string;
  type: MBQuestionType;
  selected_value?: {}
}

export interface MBFormSection {
  title: string;
  description: string;
  path:string;
  slug:string;
  questions: MBQuestion[];
}

export interface MBFormData {
  [section: string]: MBFormSection
}
