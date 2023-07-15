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
