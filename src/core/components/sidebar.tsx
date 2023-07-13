// import { NavLink } from 'react-router-dom';
import { IFormSection } from '../../types';

interface IProps {
  formSections?: IFormSection[];
}
export default function Sidebar({ formSections }: IProps) {
  return (
    <>
      {formSections?.map(({ slug, title }, i) => {
        const url = `/questionnaire/${slug}`;
        return (
          <div
            key={url}
            className="flex w-full items-center rounded-md text-sm p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200"
          >
            {i + 1}. {title}
          </div>
        );
      })}
    </>
  );
}