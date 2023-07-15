import { IFormSection } from '@/types';

interface IProps {
  formSection: IFormSection;
}

export default function FormSection({ formSection }: IProps) {
  const { title, description, questions, uploadSections, ontologies, slug } =
    formSection;
  return (
    <>
      <h2 class="text-2xl mb-2">{title}</h2>
      {description ? (
        <div dangerouslySetInnerHTML={{ __html: description }} />
      ) : null}
      {uploadSections ? (
        <div>
          {uploadSections.map((x) => (
            <div key={x}>
              <h4>{x}</h4>
              {/* UPLOAD SECTIONS */}
            </div>
          ))}
          {/* NAV BUTTONS */}
        </div>
      ) : null}
      {/* QUESTIONS */}
      {/* ONTOLOGY QUESTIONS */}
    </>
  );
}