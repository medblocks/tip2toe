import { ONTOLOGY } from "@/tip2toeform";
import { useLocation } from "react-router-dom";

interface FamilyHistoryHandlerProps {
  addToSummary: Function;
}

const FamilyHistory: React.FC<FamilyHistoryHandlerProps> = ({ addToSummary }) => {
  const { pathname } = useLocation();

  function _handleInput(e:any,title:string){
    if(e.currentTarget?.data){
      addToSummary({code: title, title: e.currentTarget?.data?.value, value: ONTOLOGY.options[0].value})
    }
    else{
      addToSummary({code: title, title: "", value: ONTOLOGY.default.value})
    }
  }

  return (
    <div class={pathname === `/questionnaire/family-history` ?'':'hidden'}>
      <h2 class="mt-0 text-4xl uppercase font-bold antialiased tracking-wide">This Is Me</h2>
      <mb-context path="tip2toe.v0/family_history/language"></mb-context>
      <mb-context path="tip2toe.v0/family_history/encoding"></mb-context>
      <mb-context path="tip2toe.v0/family_history/subject"></mb-context>
      <div class="mt-4 divide-y divide-gray-300">
        <div class="py-5">
          <h3 class="text-xl">Summary</h3>
          <mb-input onmb-input={(e: any) => _handleInput(e,"Family Summary")} path="tip2toe.v0/family_history/summary"></mb-input>
        </div>
        <div class="py-5">
          <h3 class="text-xl">The patient's parents are consanguineous?</h3>
          <mb-select onmb-input={(e: any) => _handleInput(e,"The patient's parents are consanguineous?")} path="tip2toe.v0/family_history/per_problem:0/family_prevalence/the_patient_s_parents_are_consanguineous" terminology="local_terms">
            <mb-option value="1" label="Yes"></mb-option>
            <mb-option value="2" label="No"></mb-option>
          </mb-select>
        </div>
        <div class="py-5">
          <h3 class="text-xl">Inheritance type</h3>
          <mb-select onmb-input={(e: any) => _handleInput(e,"Inheritance type")} path="tip2toe.v0/family_history/per_problem:0/family_prevalence/inheritance_type" terminology="local_terms">
            <mb-option value="1" label="Yes"></mb-option>
            <mb-option value="2" label="No"></mb-option>
            <mb-option value="3" label="X-linked recessive"></mb-option>
            <mb-option value="4" label="X-linked dominant"></mb-option>
            <mb-option value="5" label="Mitochondrial"></mb-option>
            <mb-option value="6" label="Mosaic"></mb-option>
            <mb-option value="7" label="Unknown/other"></mb-option>
          </mb-select>
        </div>
        <div class="py-5">
          <h3 class="text-xl">Relationship</h3>
          <mb-select onmb-input={(e: any) => _handleInput(e,"Relationship")} path="tip2toe.v0/family_history/per_problem:0/family_prevalence/affected_family:0/relationship" terminology="local">
            <mb-option value="at0037" label="First degree relative"></mb-option>
            <mb-option value="at0038" label="Second degree relative"></mb-option>
            <mb-option value="at0039" label="Third degree relative"></mb-option>
            <mb-option value="at0042" label="Genetic family"></mb-option>
          </mb-select>
        </div>
        <div class="py-5">
          <h3 class="text-xl">Family line</h3>
          <mb-select onmb-input={(e: any) => _handleInput(e,"Family line")} path="tip2toe.v0/family_history/per_problem:0/family_prevalence/affected_family:0/family_line" terminology="local">
            <mb-option value="at0040" label="Maternal line"></mb-option>
            <mb-option value="at0041" label="Paternal line"></mb-option>
          </mb-select>
        </div>
      </div>
    </div>
  );
}

export default FamilyHistory