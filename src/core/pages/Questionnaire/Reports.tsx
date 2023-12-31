// @ts-nocheck
import FileUpload from "@/core/components/FileUpload";
import { ONTOLOGY } from "@/tip2toeform";
import { useLocation } from "react-router-dom";
import * as signalStore from '@/core/store'

interface ReportsHandlerProps {
  addToSummary: Function;
  silentFormUpdate: Function;
}

const Reports: React.FC<ReportsHandlerProps> = ({ addToSummary, silentFormUpdate }) => {

  const { pathname } = useLocation();

  function _handleInput(e:any,title:string){
    if(e.currentTarget?.data){
      addToSummary({code: title, title: e.currentTarget?.data?.value, value: ONTOLOGY.options[0].value})
    }
    else{
      addToSummary({code: title, title: "", value: ONTOLOGY.default.value})
    }
  }

  async function silentCompositionSave(title:string){
    await addToSummary({code: title, title: "", value: ONTOLOGY.options[0].value})
    await silentFormUpdate();

  }



  return (
    <div class={pathname === `/questionnaire/reports` ?'':'hidden'}>
      <h2 class="mt-0 text-4xl uppercase font-bold antialiased tracking-wide">Reports</h2>
      <div class="mt-4 divide-y divide-gray-300">
        <div class="py-5">
          <h3 class="text-xl">Imaging Examination Result</h3>
          <mb-context path="tip2toe.v0/imaging_examination_result/language"></mb-context>
          <mb-context path="tip2toe.v0/imaging_examination_result/encoding"></mb-context>
          <mb-context path="tip2toe.v0/imaging_examination_result/subject"></mb-context>

          <mb-context path="tip2toe.v0/imaging_examination_result/any_event:0/time"></mb-context>
          <FileUpload 
            // multiple={true}
            acceptedFileTypes="image/*,application/pdf,application/vnd.ms-excel"
            path="tip2toe.v0/imaging_examination_result/any_event:0/test_name" 
            s3serviceurl={signalStore.serviceUrl_s3presignedurl}
            bucketName = {"ignite-medblocks"}
            filePath = {"tip2toe/media"}
            authToken = {signalStore.accessToken}
            onFilesUploaded={files => silentCompositionSave("Imaging Examination Result")}
            onFilesSelected={files =>addToSummary({code: "Imaging Examination Result", title: "", value: ONTOLOGY.options[0].value})}
          />
        </div>
        <div class="py-5">
          <h3 class="text-xl">Previous Genetic Investigations</h3>
          <mb-context path="tip2toe.v0/previous_genetic_investigations/language"></mb-context>
          <mb-context path="tip2toe.v0/previous_genetic_investigations/encoding"></mb-context>
          <mb-context path="tip2toe.v0/previous_genetic_investigations/subject"></mb-context>
          <mb-context path="tip2toe.v0/previous_genetic_investigations/any_event:0/time"></mb-context>
          <FileUpload 
            acceptedFileTypes="image/*"
            path="tip2toe.v0/previous_genetic_investigations/any_event:0/test_name" 
            s3serviceurl={signalStore.serviceUrl_s3presignedurl}
            bucketName = {"ignite-medblocks"}
            filePath = {"tip2toe/media"}
            authToken = {signalStore.accessToken}
            onFilesUploaded={files => silentCompositionSave("Previous Genetic Investigations")}
            onFilesSelected={files => addToSummary({code: "Previous Genetic Investigations", title: "", value: ONTOLOGY.options[0].value})}
          />
          <br />
          <mb-select onmb-input={(e: any) => _handleInput(e,"Karyotyping")} path="tip2toe.v0/previous_genetic_investigations/any_event:0/previous_genetic_investigations/karyotyping" label="Karyotyping" terminology="local">
            <mb-option value="at0002" label="Yes"></mb-option>
            <mb-option value="at0003" label="No"></mb-option>
          </mb-select>
          <br />
          <mb-select onmb-input={(e: any) => _handleInput(e,"FISH")} path="tip2toe.v0/previous_genetic_investigations/any_event:0/previous_genetic_investigations/fish" label="FISH" terminology="local">
            <mb-option value="at0006" label="Yes"></mb-option>
            <mb-option value="at0007" label="No"></mb-option>
          </mb-select>
          <br />
          <mb-select onmb-input={(e: any) => _handleInput(e,"Content name")} path="tip2toe.v0/previous_genetic_investigations/any_event:0/media_file:0/content_name" label="Content name" terminology="local_terms">
            <mb-option value="1" label="Array"></mb-option>
            <mb-option value="2" label="Target Sequencing"></mb-option>
            <mb-option value="3" label="WES panels/trios"></mb-option>
            <mb-option value="4" label="WGS panels/trios"></mb-option>
          </mb-select>
        </div>
        <div class="py-5">
          <h3 class="text-xl">Laboratory Test Result</h3>
          <mb-context path="tip2toe.v0/laboratory_test_result/any_event:0/time"></mb-context>
          <mb-context path="tip2toe.v0/laboratory_test_result/language"></mb-context>
          <mb-context path="tip2toe.v0/laboratory_test_result/encoding"></mb-context>
          <mb-context path="tip2toe.v0/laboratory_test_result/subject"></mb-context>

          <FileUpload 
            multiple={true}
            acceptedFileTypes="image/*"
            path="tip2toe.v0/laboratory_test_result/any_event:0/test_name" 
            s3serviceurl={signalStore.serviceUrl_s3presignedurl}
            bucketName = {"ignite-medblocks"}
            filePath = {"tip2toe/media"}
            authToken = {signalStore.accessToken}
            onFilesUploaded={files => silentCompositionSave("Laboratory Test Result")}
            onFilesSelected={files => addToSummary({code: "Laboratory Test Result", title: "", value: ONTOLOGY.options[0].value})}
          />

        </div>
        <div class="py-5">
          <h3 class="text-xl">Clinical Findings</h3>
          <mb-context path="tip2toe.v0/clinical_findings/language"></mb-context>
          <mb-context path="tip2toe.v0/clinical_findings/encoding"></mb-context>
          <mb-context path="tip2toe.v0/clinical_findings/subject"></mb-context>

          <mb-input onmb-input={(e: any) => _handleInput(e,"Synopsis")}  path="tip2toe.v0/clinical_findings/synopsis" label="Synopsis"></mb-input>

          <mb-select onmb-input={(e: any) => _handleInput(e,"Content name")} path="tip2toe.v0/clinical_findings/media_file:0/content_name" label="Content name" terminology="local_terms">
            <mb-option value="1" label="Face from the front"></mb-option>
            <mb-option value="2" label="Face in profile with ear shown left side"></mb-option>
            <mb-option value="3" label="Face in profile with ear shown right side"></mb-option>
            <mb-option value="4" label="Whole body in underwear front"></mb-option>
            <mb-option value="5" label="Whole body in underwear back"></mb-option>
            <mb-option value="6" label="Whole body in underwear in profile"></mb-option>
            <mb-option value="7" label="Hands plantar view"></mb-option>
            <mb-option value="8" label="Hands dorsal view"></mb-option>
            <mb-option value="9" label="Feet plantar view"></mb-option>
            <mb-option value="10" label="Feet dorsal view"></mb-option>
            <mb-option value="11" label="Any other abnormalities"></mb-option>
            <mb-option value="12" label="Add Video of speech, gait, hand movements when relevant"></mb-option>
          </mb-select>
        </div>
      </div>
    </div>
  );
}

export default Reports