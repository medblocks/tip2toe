import NavBar  from '@/core/layout/header.tsx'
import Sidebar from './sidebar.tsx'
import tip2toeForm from '@/tip2toeform';
import FormData from '@/FormData';
import { MBFormData } from '@/types.ts';
import AllSections from '@/core/pages/Questionnaire/AllSections.tsx';
import { useLocation } from "react-router-dom";
import { useEffect } from 'preact/hooks';

export default function QuestionnaireLayout() {
  const { pathname } = useLocation();
  const formData:MBFormData = FormData

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function submitForm(e) {
    console.log("submitting form",e.detail)
  }

  return (
    <>
      {/* <NavBar /> */}
      <div className="mx-auto max-w-6xl">
        <div className="fixed top-16 bottom-16 hidden w-72 overflow-auto p-4 md:block">
          <Sidebar formSections={tip2toeForm.formSections} />
        </div>
        <div className="md:ml-72 p-4 pb-20 pt-24 overflow-auto ">
          <mb-form onmb-submit={submitForm}>
            <mb-context path="tip2toe.v0/composer"></mb-context>
            <mb-context path="tip2toe.v0/language"></mb-context>
            <mb-context path="tip2toe.v0/territory"></mb-context>
            <mb-context path="tip2toe.v0/category"></mb-context>
            <mb-context path="tip2toe.v0/context/start_time"></mb-context>
            <mb-context path="tip2toe.v0/context/setting"></mb-context>
            <AllSections _sectionData={formData.pregnancy} />
            <AllSections _sectionData={formData.delivery} />
            <AllSections _sectionData={formData.neonatal_period_complications} />
            <AllSections _sectionData={formData.growth_at_birth} />
            <AllSections _sectionData={formData.post_natal_growth} />
            <AllSections _sectionData={formData.facial_morphology} />
            <AllSections _sectionData={formData.eyes} />
            <AllSections _sectionData={formData.mouth_teeth} />
            <AllSections _sectionData={formData.nose} />
            <AllSections _sectionData={formData.ears} />
            <AllSections _sectionData={formData.central_nervous_system_neuromuscular_system_cognition} />
            <mb-submit>
              <button>SUBMIT</button>
            </mb-submit>
          </mb-form>
        </div>
      </div>
    </>
  )
}