// PROPERTIES IMPORT
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "preact/hooks";
// PROPERTIES IMPORT

// MEDBLOCKS IMPORTS
import { FormData, ontology } from "@/tip2toeform.ts";
import { MBFormData } from "@/types.ts";
// MEDBLOCKS IMPORTS

// PAGE IMPORTS
import AllSections from "@/core/pages/Questionnaire/AllSections.tsx";
import IndividualView from "@/core/pages/Questionnaire/IndividualView.tsx";
import Overview from "@/core/pages/Questionnaire/Overview.tsx";
import Summary from "@/core/pages/Questionnaire/Summary.tsx";
// PAGE IMPORTS

// LAYOUT COMPONENT IMPORTS
import SidebarSummary from "./sidebarSummary.tsx";
import FormNav from "./formnav.tsx";
import Sidebar from "./sidebar.tsx";
// LAYOUT COMPONENT IMPORTS


import {getEhrId, createComposition, getAllCompositionIDs, getCompositionByID, updateComposition} from "@/core/utils/openehr.ts";
import LoadingDialog from "@/core/components/LoadingDialog.tsx";
import Notification from "@/core/components/Notification.tsx";
import ConfirmAlert from "@/core/components/ConfirmAlert.tsx";

export default function QuestionnaireLayout() {
  const { pathname } = useLocation();
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [prevUrl, setPrevUrl] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState<Array<any>>([]);
  
  const formId = "form1";
  const formData: MBFormData = FormData;
  const [ehrId, setEhrId] = useState<string>('');

  const [isImportedForm, setIsImportedForm] = useState<boolean>(false);
  const [compositionId, setCompositionId] = useState<string>('');
  
  const [currentFormData, setCurrentFormData] = useState<MBFormData>(formData);
  const [showloading, setshowLoading] = useState<boolean>(false);
  const [loadingText, setLoadingText] = useState<String | null>(null);

  const [notification, setNotification] = useState<string>("");
  const [notificationType, setNotificationType] = useState<string>("");

  const [confirmMessage, setConfirmMessage] = useState<string>("");
  const [confirmTitle, setConfirmTitle] = useState<string>("");
  const [confirmOnConfirm, setConfirmOnConfirm] = useState<() => void>(() => {});
  const [confirmOnCancel, setConfirmOnCancel] = useState<() => void>(() => {});


  

  const fetchData = async () => {
    try {
      toggleLoading("Getting EHR ID...");
      
      const id = await getEhrId();
      if (id) {
        setEhrId(id);
      } else {
        $notify("Error getting EHR ID", "error");
      }
      if(id){
          
        toggleLoading("Getting Latest Composition if any...");
        
        const data = await getAllCompositionIDs(id);
        if (data?.rows?.length >= 0) {
          if(data.rows.length > 0){
            let compostiondata = await getCompositionByID(data.rows[data.rows.length-1][2])
            setCompositionId(data.rows[data.rows.length-1][2])
            $confirm("Import Data","Do you want to import data from the latest composition?",() => handleImport(compostiondata.composition))
          }
        } else {
          $notify("Error getting composition IDs", "error");
          return;  // Exit if no data is found
        }
        
      }
      toggleLoading();

    } catch (error) {
      console.error("An error occurred:", error);
      toggleLoading(); // Ensure the loading state is toggled off in case of an error
      $notify("An unexpected error occurred", "error");
    }
  };
  useState(async () => {
    await fetchData()
  });


  useEffect(() => {
    const sectionsArray = Object.values(formData);
    const index = sectionsArray.findIndex(
      (x) => x.slug === location.pathname.split("/").pop()
    );

    if (index < sectionsArray.length - 1 && pathname !== `/questionnaire/summary`) {
      setNextUrl(`/questionnaire/${sectionsArray[index + 1].slug}`);
    } else if (index === sectionsArray.length - 1) {
      setNextUrl('/questionnaire/summary');
    } else {
      setNextUrl(null);
    }

    if (index > 0) {
      setPrevUrl(`/questionnaire/${sectionsArray[index - 1].slug}`);
    }
    else if (pathname === `/questionnaire/summary`) {
      setPrevUrl(`/questionnaire/${sectionsArray[sectionsArray.length-1].slug}`);
    }
    else {
      setPrevUrl(null);
    }
  }, [pathname]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function submitForm(e:any, check:boolean = true) {
    console.log("submitForm", e.detail);
    if(isImportedForm && check){
      $confirm("Update composition?","Do you want to update the previous composition(Confirm) or create a new composition(Cancel)?",() => updateForm(e.detail),() => submitForm(e.detail,false) )
      return;
    }
    else if(!check){
      console.log("submitForm", e);
      $confirm("Create composition?","Are you sure you want to submit",() => createForm(e))
    }
    else{
      $confirm("Create composition?","Are you sure you want to submit",() => createForm(e.detail))
    }
  }

  async function createForm(data){
    delete data['tip2toe.v0/_uid']
    if(ehrId) {
      toggleLoading("Creating Composition...");
      createComposition(ehrId, data).then(async (_data) => {
        await setCompositionId(_data.compositionUid);
        $notify("Composition Created", "success");
        toggleLoading(); // Ensure the loading state is toggled off in case of an error
      }
      ).catch((error) => {
        console.error("An error occurred:", error);
        toggleLoading(); // Ensure the loading state is toggled off in case of an error
        $notify("An unexpected error occurred", "error");
      })
    }
    else{
      $notify("No EHR ID Found", "error");
      return;  // Exit if no ID is found
    }
    $notify("Composition Created", "success");
  }

  async function updateForm(data){
    toggleLoading("Updating Composition...");
    if(!compositionId) {
      $notify("Error getting composition ID", "error");
      return;  // Exit if no data is found
    }
    else{
      await updateComposition(compositionId, data);
      $notify("Composition Updated", "success");
    }
    toggleLoading(); // Ensure the loading state is toggled off in case of an error
  }

  function toggleLoading(text=null as String | null) {
    if(text){
      setLoadingText(text);
      setshowLoading(true);
      return;
    }
    setshowLoading(!Boolean((showloading).toString()));
  }

  async function handleImport(data) {
    let changeFormData = { ...currentFormData };
    Object.entries(data).forEach(([key, value]) => {
      if (key.includes("symptom_or_sign_name")) {
        let temp = key.split("tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/")[1];
        let formKey = temp.split(":")[0];
        let tempformIndex = temp.split(":")[1];
        let formIndex = tempformIndex.split("/")[0];
        let type = tempformIndex.split("/")[1].split("|")[1];

        if (!changeFormData[formKey]) {
          changeFormData[formKey] = { questions: {} };
        }
        if (changeFormData[formKey]["questions"][formIndex] === undefined) {
          changeFormData[formKey]["questions"][formIndex] = {
            type: "ontology",
            path: key.split("/symptom_or_sign_name")[0],
          };
        }
        changeFormData[formKey]["questions"][formIndex][type] = value;
      }
    });
    setCurrentFormData(changeFormData);
    let formElement = await document.getElementById(formId);
    formElement.import(data);
    Object.entries(data).forEach(async ([key, value]) => {
      if (key.includes("presence|value")){
        let temp = key.split("tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/")[1];
        let formKey = temp.split(":")[0];
        let tempformIndex = temp.split(":")[1];
        let formIndex = tempformIndex.split("/")[0];
        await addToSummary({ code: formData[formKey]["questions"][formIndex].code, title: formData[formKey]["questions"][formIndex].value, value: value })
      }
    });
    setIsImportedForm(true);
  }
  function addToSummary(data: any) {
    if (data && data.value == ontology.default.value) {
      // remove from selected values
      let index = selectedValues.findIndex((item) => item.code == data.code);
      if (index > -1) {
        selectedValues.splice(index, 1);
      }
      setSelectedValues([...selectedValues]);
    } else {
      // check if already exists then update the value else add new
      let index = selectedValues.findIndex((item) => item.code == data.code);
      if (index > -1) {
        selectedValues[index].value = data.value;
      } else {
        selectedValues.push(data);
      }
      setSelectedValues([...selectedValues]);
    }
  }

  function $notify(message: string, type = 'info' as string) {
    setNotification(message);
    setNotificationType(type);
  }

  function $confirm(title?: string ,message?: string, onConfirm?: () => void, onCancel?: () => void) {
    setConfirmTitle(title);
    setConfirmMessage(message);
    if(!onConfirm) setConfirmOnConfirm(()=>{}); else setConfirmOnConfirm(()=>onConfirm);
    if(!onCancel) setConfirmOnCancel(()=> {}); else setConfirmOnCancel(()=>onCancel);
  }

  return (
    <>
      <Notification notificationMessage={notification} notificationType={notificationType} />
      <div class="flex min-h-full flex-col">
        <div class="mx-auto flex w-full items-start">
          <aside class="sticky top-8 hidden w-64 mr-8 shrink-0 lg:block">
            <div class="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col">
              <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white/60 px-3 pb-4">
                <nav class="flex mt-2 flex-1 flex-col">
                  <Sidebar formSections={currentFormData} />
                </nav>
              </div>
            </div>
          </aside>

          <main class="flex-1 border-r border-solid pt-10">
            <LoadingDialog show={showloading} loadingText={loadingText} />
            <ConfirmAlert message={confirmMessage} title={confirmTitle} _onConfirm={()=>{confirmOnConfirm && confirmOnConfirm()}} _onCancel={() => {confirmOnCancel && confirmOnCancel()}} />
            <mb-form class="" id={formId} onmb-submit={submitForm}>
              <mb-context path="tip2toe.v0/composer"></mb-context>
              <mb-context path="tip2toe.v0/language"></mb-context>
              <mb-context path="tip2toe.v0/territory"></mb-context>
              <mb-context path="tip2toe.v0/category"></mb-context>
              <mb-context path="tip2toe.v0/context/start_time"></mb-context>
              <mb-context path="tip2toe.v0/context/setting"></mb-context>
              <div class="mx-6 md:min-h-[88vh]">
                <Overview />
                <IndividualView />
                {Object.entries(currentFormData).map(([key, value]) => (
                  <AllSections
                    key={`${key}_${value.questions.length}`}
                    _sectionData={value}
                    addToSummary={addToSummary}
                  />
                ))}
                <Summary selectedValues={selectedValues} />
              </div>
              <FormNav prevUrl={prevUrl} nextUrl={nextUrl} />
            </mb-form>
          </main>
          <SidebarSummary selectedValues={selectedValues} />
        </div>
      </div>
    </>
  );
}
