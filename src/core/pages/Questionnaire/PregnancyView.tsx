import { SearchFunction } from 'medblocks-ui/dist/src/medblocks/codedtext/searchFunctions';
import {QuestionsHandler} from '@/core/components/QuestionsHandler'; 
import { useState } from 'preact/hooks';
import axios from 'axios';
import FormData from '@/FormData';
import { useLocation } from "react-router-dom";

const PregnancyView = () => {
  const { pathname } = useLocation();
  let _buttonData = {
    code: "at0027",
    value: "Not Investigated",
    terminology: "local"
  }
  const _pregnancySectionData = FormData["pregnancy"]
  const [pregnancyQuestions,setPregnancyQuestions] = useState(_pregnancySectionData.questions)
  const [buttonData,setButtonData] = useState(_buttonData)

  const addQuestion = (value:any) => {
    if(value.data){
      const path = `tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:${pregnancyQuestions.length}/symptom_or_sign_name`
      const newState = [...pregnancyQuestions,{...value.data,path}]
      setPregnancyQuestions(newState)
      value.data = undefined
    }
  }

  const _search_function:SearchFunction = async ({searchString, maxHits})=>{
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

  const saveState = (item:any,selected_value:any) => {
    const newState = [...pregnancyQuestions]
    newState.forEach(val=>{
      if(val.code ==item.code){
        val.selected_value = selected_value
      }
    })
    setPregnancyQuestions(newState)
  }

  const masterQuestionController = (setvalue:number) => {
    let btnda = {
      code: "at0027",
      value: "Not Investigated",
      terminology: "local"
    }
    if(setvalue==1){
      btnda = {
        code: "at0024",
        value: "No",
        terminology: "local"
      }

    }
    const newState = [...pregnancyQuestions]
    newState.forEach(val=>{
      val.selected_value = btnda
    })
    setPregnancyQuestions(newState)
  }

  const handlebuttonChange = (event: any,item:any) => {
    if(event.currentTarget.data == undefined){
      event.currentTarget.data = {
        "code": "at0027",
        "value": "Not Investigated",
        "terminology": "local"
      }
    }
    saveState(item,event.currentTarget.data)
  }


  return (
    <>
      <div class={pathname === "/questionnaire/pregnancy" ?'':'hidden'}>
        {/* Title & Description */}
        <h2 class="text-2xl">{_pregnancySectionData.title}</h2>
        {_pregnancySectionData.description ? (
          <div dangerouslySetInnerHTML={{ __html: _pregnancySectionData.description }} />
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
          <button onClick={e => masterQuestionController(1)} class="flex items-center p-2 hover:bg-white hover:text-gray-700">Normal</button>
          <button onClick={e => masterQuestionController(0)} class="flex items-center p-2 border-l hover:bg-white hover:text-gray-700">Not investigated</button>
        </div>
        {/* MASTER CONTROLLER */}

        {/* QUESTIONS HANDLER */}
        {/* <QuestionsHandler data={pregnancyQuestions} buttonData={buttonData} saveState={saveState} /> */}
        <div class="mt-4 divide-y divide-gray-300">
          {pregnancyQuestions.map((item) => (
            <div class="py-4" key={item.code}>
              <mb-context bind={{code: item.code, terminology: item.terminology, value: item.value}} path={item.path} label="Symptom or sign name" terminology={item.terminology}></mb-context>
              <h3 class="text-xl m-0">{item.value} </h3>
              <p class="text-sm text-gray-500 mb-4">{item.code}</p>
              <mb-buttons onmb-input={e=>handlebuttonChange(e,item)} data={item.selected_value} class="mt-4" path={`${item.path}/presence`} terminology="local">
                <mb-option value="at0023" label="Yes"></mb-option>
                <mb-option value="at0024" label="No"></mb-option>
                <mb-option value="at0027" label="Not Investigated"></mb-option>
              </mb-buttons>
            </div>
          ))}
        </div>
        {/* QUESTIONS HANDLER */}

        {/* ADD CUSTOM QUESTIONS */}
        <mb-search label="Other. Describe in Clinical summary and/or add HPO terms here" onmb-input={(e)=>addQuestion(e.target)} class="mt-4 mb-24" disablefallback plugin={_search_function} />
        {/* ADD CUSTOM QUESTIONS */}
      </div>
    </>
  );
}

export default PregnancyView;
