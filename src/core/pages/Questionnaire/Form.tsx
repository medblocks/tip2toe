
import { useParams } from 'react-router-dom';
import tip2toeForm from '@/tip2toeform';
import { useEffect,useState } from 'preact/hooks';
import { IFormSection } from '@/types';
import FormSection from './FormSection';

export default function FormPage() {
  const { slug } = useParams();
  const [section, setSection] = useState<IFormSection | undefined>(undefined);
  useEffect(() => {
    const i = Number(
      tip2toeForm.formSections?.findIndex((x) => x.slug === slug),
    );
    if (i >= 0)
      setSection(tip2toeForm.formSections && tip2toeForm.formSections[i]);
  }, [slug]);
  return <>{section ? <FormSection formSection={section} /> : null}</>;
}


