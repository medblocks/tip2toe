import { useState } from "preact/hooks";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { MBFormSection, MBQuestion } from "@/types";
import { ONTOLOGY } from "@/tip2toeform";

interface AllSectionHandlerProps {
  _sectionData: MBFormSection;
  addToSummary: Function;
}

const AllSections: React.FC<AllSectionHandlerProps> = ({ _sectionData, addToSummary }) => {
  const { pathname } = useLocation();
  const defaultButtonValue = ONTOLOGY.default
  const [questions, setQuestions] = useState(_sectionData.questions);

  const formatPath = (path: string, questionIndex: number) => path.replace(/{([0]+)}/g, questionIndex.toString());

  const addQuestion = (targetElement: any) => {
    if (targetElement.data) {
      const path = formatPath(_sectionData.path, questions.length);
      setQuestions([...questions, { ...targetElement.data, path, type: "ontology", selected_value: { code: "at0023", value: "Yes", terminology: "local" } }]);
      targetElement.data = undefined;
    }
  }

  async function searchFunction({ searchString, maxHits }: { searchString: string; maxHits: number; }) {
    const response = await axios.get('https://hpo.jax.org/api/hpo/search/', {
      params: {
        q: searchString,
        max: maxHits,
        offset: 0,
        category: "terms"
      },
    });
    return response.data.terms.map((term: { id: any; name: any; }) => ({
      code: term.id,
      value: term.name,
      terminology: 'local_terms',
    }));
  }

  const saveQuestionsState = (question: MBQuestion, selectedValue: any) => {
    const updatedQuestions = questions.map(q => q.code === question.code ? { ...q, selected_value: selectedValue } : q);
    addToSummary({ code: question.code, title: question.value, value: selectedValue["value"] });
    setQuestions(updatedQuestions);
  }

  const handleMasterControl = (setValue: number) => {
    const selectedValue = setValue === 1 
      ? { code: "at0024", value: "No", terminology: "local" }
      : defaultButtonValue;

    const updatedQuestions = questions.map(q => ({ ...q, selected_value: selectedValue }));
    questions.forEach(q => addToSummary({ code: q.code, title: q.value, value: selectedValue["value"] }));
    setQuestions(updatedQuestions);
  }

  const buttonClickHandler = (event: any, question: MBQuestion) => {
    if (!event?.currentTarget?.data) {
      event.currentTarget.data = defaultButtonValue;
    }
    saveQuestionsState(question, event.currentTarget.data);
  }
  return (
    <div class={pathname === `/questionnaire/${_sectionData.slug}` ? '' : 'hidden'}>
      <h2 class="mt-0 text-4xl uppercase font-bold antialiased tracking-wide">{_sectionData.title}</h2>
      {_sectionData.description && <div dangerouslySetInnerHTML={{ __html: _sectionData.description }} />}

      <mb-context path="tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/time"></mb-context>
      <mb-context path="tip2toe.v0/symptom_sign_screening_questionnaire/subject"></mb-context>
      <mb-context path="tip2toe.v0/symptom_sign_screening_questionnaire/language"></mb-context>
      <mb-context path="tip2toe.v0/symptom_sign_screening_questionnaire/encoding"></mb-context>

      <div class="inline-flex my-2 text-sm border rounded border-slate-300 text-slate-500">
        <button onClick={() => handleMasterControl(1)} class="flex items-center p-2 hover:bg-white hover:text-gray-700">Normal</button>
        <button onClick={() => handleMasterControl(0)} class="flex items-center p-2 border-l hover:bg-white hover:text-gray-700">Not investigated</button>
      </div>

      <div class="mt-4 divide-y divide-gray-300">
        {questions.map(item => (
          <div class="py-5" key={item.code}>
            <h3 class="text-xl">{item.value} </h3>
            <p class="text-sm text-gray-500 mb-4">{item.code}</p>
            {item.type === 'ontology' ? (
              <div>
                <mb-context bind={{ code: item.code, terminology: item.terminology, value: item.value }} path={`${item.path}/symptom_or_sign_name`} label="Symptom or sign name"></mb-context>
                <mb-buttons onmb-input={e => buttonClickHandler(e, item)} data={item.selected_value} class="mt-4 z-0" path={`${item.path}/presence`} terminology="local">
                  {ONTOLOGY.options.map((option: any) => (
                    <mb-option value={option.code} label={option.value}></mb-option>
                  ))}
                </mb-buttons>
              </div>
            ) : item.type === 'text' ? (
              <mb-input path={item.path} label={item.value} terminology={item.terminology}></mb-input>
            ) : (
              <p>{item.type}</p>
            )}
          </div>
        ))}
      </div>
      <mb-search label="Other. Describe in Clinical summary and/or add HPO terms here" onmb-input={(e: { target: any; }) => addQuestion(e.target)} class="mt-6 mb-10" disablefallback plugin={searchFunction} />
    </div>
  );
}

export default AllSections;
