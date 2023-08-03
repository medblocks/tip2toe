import { SearchFunction } from 'medblocks-ui/dist/src/medblocks/codedtext/searchFunctions';
import { MBFormSection, MBQuestion } from "@/types";
import { useLocation } from "react-router-dom";
import { useState } from "preact/hooks";
import axios from 'axios';

interface AllSectionHandlerProps {
  _sectionData: MBFormSection;
}

const AllSections = ({_sectionData}:AllSectionHandlerProps) => {
  const { pathname } = useLocation();
  const _buttonDefaultValue = {code: "at0027",value: "Not Investigated",terminology: "local"}
  const [questions,setQuestions] = useState(_sectionData.questions)

  const formatPath = (path:string,questionIndex:number) => {
    return path.replace(/{([0]+)}/g, questionIndex.toString());
  };

  const addQuestion = (targetElement:any) => {
    if(targetElement.data){
      const path = formatPath(_sectionData.path,questions.length)
      const tempQuestions = [...questions,{...targetElement.data,path,type:"ontology"}]
      setQuestions(tempQuestions)
      targetElement.data = undefined
    }
  }

  const searchFunction:SearchFunction = async ({searchString, maxHits})=>{
    const response = await axios.get('https://hpo.jax.org/api/hpo/search/', {
      params: {
        q: searchString,
        max:maxHits,
        offset:0,
        category:"terms"
      },
    });
    return response.data.terms.map(
      (
        term: {
          id: String,
          name: String
        }
      ) => (
        {
          code: term.id,
          value: term.name,
          terminology: 'local_terms',
        }
      )
    );
  }

  const saveQuestionsState = (question:MBQuestion,selected_value:object) => {
    const tempQuestions = [...questions]
    tempQuestions.forEach(_question =>{
      if(_question.code == question.code){
        _question.selected_value = selected_value
      }
    })
    setQuestions(tempQuestions)
  }

  const allQuestionController = (setValue:number) => {
    let defaultValue = _buttonDefaultValue
    if(setValue==1){
      defaultValue = {
        code: "at0024",
        value: "No",
        terminology: "local"
      }
    }
    const tempQuestions = [...questions]
    tempQuestions.forEach(_question =>{
      _question.selected_value = defaultValue
    })
    setQuestions(tempQuestions) 
  }

  const _mbButtonHandler = (event:any,question:MBQuestion) =>{
    if(event?.currentTarget?.data == undefined){
      event.currentTarget.data = _buttonDefaultValue
    }
    saveQuestionsState(question,event.currentTarget.data)
  }

  return (
    <>
      <div class={pathname === `/questionnaire/${_sectionData.slug}` ?'':'hidden'}>

        {/* Title & Description */}
        <h2 class="text-2xl">{_sectionData.title}</h2>
        {_sectionData.description ? (
          <div dangerouslySetInnerHTML={{ __html: _sectionData.description }} />
        ) : null}
        {/* Title & Description */}
        
        {/* MB CONTEXT */}
        <mb-context path="tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/time"></mb-context>
        <mb-context path="tip2toe.v0/symptom_sign_screening_questionnaire/subject"></mb-context>
        <mb-context path="tip2toe.v0/symptom_sign_screening_questionnaire/language"></mb-context>
        <mb-context path="tip2toe.v0/symptom_sign_screening_questionnaire/encoding"></mb-context>
        {/* MB CONTEXT */}

        {/* MASTER CONTROLLER */}
        <div class="inline-flex my-2 text-sm border rounded border-slate-300 text-slate-500">
          <button onClick={e => allQuestionController(1)} class="flex items-center p-2 hover:bg-white hover:text-gray-700">Normal</button>
          <button onClick={e => allQuestionController(0)} class="flex items-center p-2 border-l hover:bg-white hover:text-gray-700">Not investigated</button>
        </div>
        {/* MASTER CONTROLLER */}

        {/* QUESTIONS HANDLER */}
        <div class="mt-4 divide-y divide-gray-300">
          {questions.map((item) => (
            <div class="py-4" key={item.code}>
              {item.type === 'ontology' ? (
                <div>
                  <mb-context bind={{ code: item.code, terminology: item.terminology, value: item.value }} path={`${item.path}/symptom_or_sign_name`} label="Symptom or sign name"></mb-context>
                  <h3 class="text-xl m-0">{item.value} </h3>
                  <p class="text-sm text-gray-500 mb-4">{item.code}</p>
                  <mb-buttons onmb-input={e => _mbButtonHandler(e, item)} data={item.selected_value} class="mt-4" path={`${item.path}/presence`} terminology="local">
                    <mb-option value="at0023" label="Yes"></mb-option>
                    <mb-option value="at0024" label="No"></mb-option>
                    <mb-option value="at0027" label="Not Investigated"></mb-option>
                  </mb-buttons>
                </div>
              ) : item.type === 'text' ? (
                <div>
                  <mb-input path={item.path} label={item.value} terminology={item.terminology} ></mb-input>
                </div>
              ) : (
                <p>{item.type}</p>
              )}
            </div>
          ))}
            {/* <div class="py-4" key={item.code}>
              <mb-context bind={{code: item.code, terminology: item.terminology, value: item.value}} path={item.path} label="Symptom or sign name" terminology={item.terminology}></mb-context>
              <h3 class="text-xl m-0">{item.value} </h3>
              <p class="text-sm text-gray-500 mb-4">{item.code}</p>
              <mb-buttons onmb-input={e=>_mbButtonHandler(e,item)} data={item.selected_value} class="mt-4" path={`${item.path}/presence`} terminology="local">
                <mb-option value="at0023" label="Yes"></mb-option>
                <mb-option value="at0024" label="No"></mb-option>
                <mb-option value="at0027" label="Not Investigated"></mb-option>
              </mb-buttons>
            </div>
          ))} */}
        </div>
        {/* QUESTIONS HANDLER */}

        {/* ADD CUSTOM QUESTIONS */}
        <mb-search label="Other. Describe in Clinical summary and/or add HPO terms here" onmb-input={(e)=>addQuestion(e.target)} class="mt-4 mb-24" disablefallback plugin={searchFunction} />
        {/* ADD CUSTOM QUESTIONS */}


      </div>
    </>
  );
}

export default AllSections