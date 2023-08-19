// PREACT HOOKS AND PROPERTIES
import { useEffect,useState } from "preact/hooks";
import { useLocation } from "react-router-dom";

// PREACT HOOKS AND PROPERTIES

import { _practitionerForm,_patientForm } from "@/tip2toeform"
import { MBFormData } from "@/types.ts";
import { ONTOLOGY } from "@/tip2toeform";
import * as signalStore from '@/core/store'

// PAGE IMPORTS
import AllSections from "@/core/pages/Questionnaire/AllSections";
import Overview from "@/core/pages/Questionnaire/Overview";
import ThisIsMe from "@/core/pages/Questionnaire/ThisIsMe";
import Summary from "@/core/pages/Questionnaire/Summary";

// PAGE IMPORTS

// LAYOUT COMPONENTS
import Sidebar from "./_components/SidebarNavigation";
import FormNavigation from "./_components/FormNavigation";
import SummarySidebar from "./_components/SummarySidebar";
import LoadingDialog from "@/core/components/LoadingDialog";
import Notification from "@/core/components/Notifications";
import ConfirmAlert from "@/core/components/ConfirmAlert";
import { createComposition, getAllCompositionIDs, getCompositionByID, setEhrId, updateComposition } from "@/core/utils/openehr";
import FamilyHistory from "@/core/pages/Questionnaire/FamilyHistory";
import Reports from "@/core/pages/Questionnaire/Reports";
import IndividualView from "@/core/pages/Questionnaire/IndividualView";
import { default_data } from "@/sample_data";

// LAYOUT COMPONENTS

export default function QuestionnaireLayout() {

  const [_summary, set_summary] = useState<Array<any>>([]);
  const [_nextUrl,set_nextUrl] = useState<string | null>(null);
  const [_prevUrl,set_prevUrl] = useState<string | null>(null);
  const [encounterId, setEncounterId] = useState<string | null>(null);
  const [patientId, setpatientId] = useState<string | null>(null);
  const [_compositionId, set_compositionId] = useState<string | null>(null);
  const [ehrId, setehrId] = useState<string>("");

  const [medblocksForm, setmedblocksForm] = useState<MBFormData>(_practitionerForm);
  
  const [_loading, set_loading] = useState<{show:boolean, text:string | null}>({show:false,text:null});
  const [_notification, set_notification] = useState<{type?:string | null, message:string, description?: string | null }>({type:'info',message:"",description:null});
  const [_confirm, set_confirm] = useState<{show:boolean, title:string, message:string, id:string | null, onConfirm?:()=>void, onCancel?:()=>void}>({show:false,title:"",message:"",id:null, onConfirm:()=>{},onCancel:()=>{}});

  const excludeSections:Array<string> = ['overview','summary','this_is_me','family_history','individual','reports']
  const _formid = "medblocksForm";
  const { pathname } = useLocation();


  useState(async ()=>{
    signalStore.isPractitioner.subscribe((value)=>{
      if(value) setmedblocksForm(_practitionerForm)
      else setmedblocksForm(_patientForm)
    })
    signalStore.encounterId.subscribe((value)=>{
      setEncounterId(value)
    })
    signalStore.patientId.subscribe((value)=>{
      setpatientId(value)
    })
    fetchData()
  })

  useEffect(()=>{
    window.scrollTo(0, 0);
    const sectionsArray = Object.values(medblocksForm);
    const index = sectionsArray.findIndex(
      (x) => x.slug === location.pathname.split("/").pop()
    );
    if (index < sectionsArray.length - 1 && pathname !== `/questionnaire/summary`) {
      set_nextUrl(`/questionnaire/${sectionsArray[index + 1].slug}`);
    } else {
      set_nextUrl(null);
    }

    if (index > 0) {
      set_prevUrl(`/questionnaire/${sectionsArray[index - 1].slug}`);
    }
    else {
      set_prevUrl(null);
    }
  }, [pathname])

  function addToSummary(data: any) {
    let index = _summary.findIndex((item) => item.code == data.code);
    if (data && data.value == ONTOLOGY.default.value) {
      if (index > -1) {
        _summary.splice(index, 1);
      }
    } else {
      if (index > -1) {
        _summary[index].value = data.value;
      } else {
        _summary.push(data);
      }
    }
    set_summary([..._summary]);
  }

  async function fetchData () {
    try{
      $Loading("Loading EHR ID...")
      if(signalStore.encounterId.value && signalStore.patientId.value){
        let _ehrId = await setEhrId(signalStore.patientId.value)
        setehrId(_ehrId)
        if(signalStore.isPractitioner.value){
        $Loading("Getting Patient Data...")
        const patientData = await getAllCompositionIDs(_ehrId)
        $Loading("Loading Patient Data...")
        if(patientData?.rows?.length > 0){
          set_compositionId(patientData.rows[patientData.rows.length-1][2])
          let compositionData =  await getCompositionByID(patientData.rows[patientData.rows.length-1][2])
          if(compositionData){
            Object.entries(default_data).forEach(([key, value]) => {
              if (!compositionData.composition[key]) {
                compositionData.composition[key] = value;
              }
            })
            handleImport(compositionData.composition)
          }
        }
      }
      $Loading()
      }
      else{
        $Notification("No EHR ID found","error","Please select a patient and an encounter to continue")
        $Loading("Failed to load EHR ID")
      }
    } catch (error : any) {
      $Notification("Failed to load EHR ID","error",error.toString())
      $Loading("Failed to load EHR ID")
    }
  }

  function submitForm(e:any){
    console.log(e.detail)
    if(_compositionId){
      $Confirm("Update Form?","Are you sure you want to submit",() => updateForm(e.detail))
    }
    else{
      $Confirm("Submit Form?","Are you sure you want to submit",() => createForm(e.detail))
    }
  }

  async function createForm(data:any){
    try{
      $Loading("Submitting Form...")
      delete data['tip2toe.v0/_uid']
      createComposition(ehrId, data).then(async (res:any) => {
        if (res) {
          set_compositionId(res.compositionUid)
          $Loading()
          $Notification("Form submitted successfully","success",null)
        } 
      }).catch((error:any) => {
        $Loading()
        $Notification("Failed to submit form","error",error.toString())
      })
    } catch (error : any) {
      $Loading()
      $Notification("Failed to submit form","error",error.toString())
    }
  }

  async function updateForm(data:any){
    try{
      $Loading("Updating Form...")
      delete data['tip2toe.v0/_uid']
      updateComposition(_compositionId, data).then(async (res:any) => {
        if (res) {
          $Loading()
          $Notification("Form update successfully","success",null)
        } 
      }).catch((error:any) => {
        $Loading()
        $Notification("Failed to submit form","error",error.toString())
      })
    } catch (error : any) {
      $Loading()
      $Notification("Failed to submit form","error",error.toString())
    }
  }

  async function handleImport(data:any) {
    let _data = { ...medblocksForm };
    Object.entries(data).forEach(([key, value]) => {
      if (key.includes("symptom_or_sign_name")) {
        let temp = key.split("tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/")[1];
        let formKey = temp.split(":")[0];
        let tempformIndex = temp.split(":")[1];
        let formIndex = tempformIndex.split("/")[0];
        let type = tempformIndex.split("/")[1].split("|")[1];

        if (!_data[formKey]) {
          _data[formKey] = { questions: {} };
        }
        if (_data[formKey]["questions"][formIndex] === undefined) {
          _data[formKey]["questions"][formIndex] = {
            type: "ontology",
            path: key.split("/symptom_or_sign_name")[0],
          };
        }
        _data[formKey]["questions"][formIndex][type] = value;
      }
    });
    setmedblocksForm(_data);
    let formElement = await document.getElementById(_formid);
    formElement.import(data);
    Object.entries(data).forEach(async ([key, value]) => {
      if (key.includes("presence|value")){
        let temp = key.split("tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/")[1];
        let formKey = temp.split(":")[0];
        let tempformIndex = temp.split(":")[1];
        let formIndex = tempformIndex.split("/")[0];
        await addToSummary({ code: medblocksForm[formKey]["questions"][formIndex].code, title: medblocksForm[formKey]["questions"][formIndex].value, value: value })
      }
    });
  }

  // UI ELEMENT FUNCTIONS
  function $Loading(text?:string | null) {
    if(text){
      set_loading({show:true,text:text})
      return
    }
    set_loading({show:!Boolean((_loading.show).toString()), text:null})
  }
  function $Notification(message:string,type:string | null, description:string | null) {
    set_notification({type:type,message:message,description:description})
  }
  function $Confirm(title:string,message:string,onConfirm?:()=>void,onCancel?:()=>void) {
    let _id = Math.random().toString(36).substring(7);
    set_confirm({show:true,title:title,message:message,onConfirm:onConfirm,onCancel:onCancel, id: _id})

  }
  // UI ELEMENT FUNCTIONS


  return (
    <>
      <div class="flex min-h-full flex-col">

        {/* UI ELEMENTS */}
          <Notification notificationMessage={_notification.message} notificationType={_notification.type} notificationDescription={_notification.description}  />
          <LoadingDialog show={_loading.show} loadingText={_loading.text} />
          <ConfirmAlert message={_confirm.message} title={_confirm.title} id={_confirm.id} _onConfirm={()=>{_confirm.onConfirm && _confirm.onConfirm()}} _onCancel={() => {_confirm.onCancel && _confirm.onCancel()}} />
        {/* UI ELEMENTS */}

        <div class="mx-auto flex w-full items-start">

          {/* NAVIGATION SIDEBAR */}
          <aside class="sticky top-8 hidden w-64 mr-8 shrink-0 lg:block">
            <div class="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col">
              <div id="navigationSidebar" class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white/60 px-3 pb-4">
                <nav class="flex mt-2 flex-1 flex-col">
                  <Sidebar formSections={medblocksForm}  />
                </nav>
              </div>
            </div>
          </aside>
          {/* NAVIGATION SIDEBAR */}

          {/* MEDBLOCKS FORM */}
          <main class="flex-1 border-r border-solid pt-10">
            <div class="mx-6">
            </div>
            <mb-form id={_formid} onmb-submit={submitForm} >
              {/* FORM CONTEXT */}
              <mb-context path="tip2toe.v0/context/start_time"></mb-context>
              <mb-context path="tip2toe.v0/context/setting"></mb-context>
              <mb-context path="tip2toe.v0/category"></mb-context>
              <mb-context path="tip2toe.v0/language"></mb-context>
              <mb-context path="tip2toe.v0/territory"></mb-context>
              <mb-context path="tip2toe.v0/composer"></mb-context>
              <mb-context path="tip2toe.v0/_health_care_facility|id_namespace"></mb-context>
              {/* FORM CONTEXT */}

              {/* FORM CONTENT */}
              <div class="mx-6 md:min-h-[88vh]">
                <Overview />
                <FamilyHistory addToSummary={addToSummary} />
                <IndividualView addToSummary={addToSummary}/>
                <ThisIsMe readonly={signalStore.isPractitioner.value} addToSummary={addToSummary} />
                <Reports addToSummary={addToSummary} />
                {Object.entries(medblocksForm).map(([key, value]) => {
                  if(excludeSections.includes(key)){
                    return (<></>)
                  }
                  else{
                    return (
                      <AllSections
                        key={`${key}_${value.questions.length}`}
                        _sectionData={value}
                        addToSummary={addToSummary}
                      />
                    )
                  }
                })}
                <Summary selectedValues={_summary} />
              </div>
              {/* FORM CONTENT */}

              {/* FORM NAVIGATION */}
              <FormNavigation prevUrl={_prevUrl} nextUrl={_nextUrl} />
              {/* FORM NAVIGATION */}

            </mb-form>
          </main>
          {/* MEDBLOCKS FORM */}

          {/* RIGHT SIDEBAR SUMMARY */}
            <SummarySidebar _summary={_summary} />
          {/* RIGHT SIDEBAR SUMMARY */}
        </div>
      </div>
    </>
  );
}
