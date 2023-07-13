import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './index.css'
import 'medblocks-ui'
import 'medblocks-ui/dist/styles'

import MbInput from 'medblocks-ui/dist/src/medblocks/text/input'

type CustomEvents<K extends string> = { [key in K] : (event: CustomEvent) => void };
type CustomElement<T, K extends string = ''> = Partial<T & { children: any } & CustomEvents<`on${K}`>>;

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      // To evaluate and see how to make this work as part of Medblocks UI.
      // Props and Events can be strongly typed
      ['mb-input']: CustomElement<any, any>;
      ['mb-form']: CustomElement<any, any>;
    }
  }
}

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex bg-green-500">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1 class="text-3xl font-bold underline">Vite + Preact</h1>
      <mb-form class="p-4">
      <mb-context path="tip2toe.v0/category"></mb-context>
<mb-context path="tip2toe.v0/context/start_time"></mb-context>
<mb-context path="tip2toe.v0/context/setting"></mb-context>
<mb-input path="tip2toe.v0/pedigree/summary" label="Summary"></mb-input>

<mb-date time path="tip2toe.v0/pedigree/last_updated" label="Last Updated"></mb-date>
<mb-context path="tip2toe.v0/pedigree/subject"></mb-context>
<mb-context path="tip2toe.v0/pedigree/language"></mb-context>
<mb-context path="tip2toe.v0/pedigree/encoding"></mb-context>
<mb-input path="tip2toe.v0/family_history/summary" label="Summary"></mb-input>
<mb-checkbox path="tip2toe.v0/family_history/per_problem:0/family_prevalence/genetic_predisposition" label="Genetic predisposition?"></mb-checkbox>
<mb-select path="tip2toe.v0/family_history/per_problem:0/family_prevalence/inheritance_type" label="Inheritance type" terminology="local_terms">
              <mb-option value="1" label="Autosomal Dominant"></mb-option>
<mb-option value="2" label="Autosomal Recessive"></mb-option>
<mb-option value="3" label="X-linked recessive"></mb-option>
<mb-option value="4" label="X-linked dominant"></mb-option>
<mb-option value="5" label="Mitochondrial"></mb-option>
<mb-option value="6" label="Mosaic"></mb-option>
<mb-option value="7" label="Unknown/other"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/family_history/per_problem:0/family_prevalence/affected_family:0/relationship" label="Relationship" terminology="local">
              <mb-option value="at0037" label="First degree relative"></mb-option>
<mb-option value="at0038" label="Second degree relative"></mb-option>
<mb-option value="at0039" label="Third degree relative"></mb-option>
<mb-option value="at0042" label="Genetic family"></mb-option>
<mb-option value="at0050" label="Non-genetic family"></mb-option>
            </mb-select>
<mb-date time path="tip2toe.v0/family_history/last_updated" label="Last Updated"></mb-date>
<mb-context path="tip2toe.v0/family_history/subject"></mb-context>
<mb-context path="tip2toe.v0/family_history/language"></mb-context>
<mb-context path="tip2toe.v0/family_history/encoding"></mb-context>
<mb-duration year month hour path="tip2toe.v0/growth_chart/birth_detail/gestational_age" label="Gestational age"></mb-duration>

<mb-input path="tip2toe.v0/growth_chart/current_and_previous_growth_charts/comment" label="Comment"></mb-input>
<mb-context path="tip2toe.v0/growth_chart/subject"></mb-context>
<mb-context path="tip2toe.v0/growth_chart/language"></mb-context>
<mb-context path="tip2toe.v0/growth_chart/encoding"></mb-context>
<mb-quantity default="kg" path="tip2toe.v0/body_weight/weight_at_the_last_visit:0/weight" label="Weight">
                  <mb-unit unit="kg" label="kg" min="" max="1000"></mb-unit>
<mb-unit unit="[lb_av]" label="[lb_av]" min="" max="2000"></mb-unit>
<mb-unit unit="g" label="g" min="" max="1000000"></mb-unit>
              </mb-quantity>
<mb-context path="tip2toe.v0/body_weight/weight_at_the_last_visit:0/time"></mb-context>
<mb-quantity default="kg" path="tip2toe.v0/body_weight/birth/weight" label="Weight">
                  <mb-unit unit="kg" label="kg" min="" max="1000"></mb-unit>
<mb-unit unit="[lb_av]" label="[lb_av]" min="" max="2000"></mb-unit>
<mb-unit unit="g" label="g" min="" max="1000000"></mb-unit>
              </mb-quantity>
<mb-context path="tip2toe.v0/body_weight/birth/time"></mb-context>
<mb-context path="tip2toe.v0/body_weight/subject"></mb-context>
<mb-context path="tip2toe.v0/body_weight/language"></mb-context>
<mb-context path="tip2toe.v0/body_weight/encoding"></mb-context>
<mb-quantity default="cm" path="tip2toe.v0/height_length/length_at_the_last_visit:0/height_length" label="Height/Length">
                  <mb-unit unit="cm" label="cm" min="" max="1000"></mb-unit>
<mb-unit unit="[in_i]" label="[in_i]" min="" max="250"></mb-unit>
              </mb-quantity>
<mb-context path="tip2toe.v0/height_length/length_at_the_last_visit:0/time"></mb-context>
<mb-quantity default="cm" path="tip2toe.v0/height_length/birth/height_length" label="Height/Length">
                  <mb-unit unit="cm" label="cm" min="" max="1000"></mb-unit>
<mb-unit unit="[in_i]" label="[in_i]" min="" max="250"></mb-unit>
              </mb-quantity>
<mb-context path="tip2toe.v0/height_length/birth/time"></mb-context>
<mb-context path="tip2toe.v0/height_length/subject"></mb-context>
<mb-context path="tip2toe.v0/height_length/language"></mb-context>
<mb-context path="tip2toe.v0/height_length/encoding"></mb-context>
<mb-quantity default="cm" path="tip2toe.v0/head_circumference/head_circumference_at_the_last_visit:0/head_circumference" label="Head circumference">
                  <mb-unit unit="cm" label="cm" min="" max="100"></mb-unit>
<mb-unit unit="[in_i]" label="[in_i]" min="" max="40"></mb-unit>
              </mb-quantity>
<mb-input path="tip2toe.v0/head_circumference/head_circumference_at_the_last_visit:0/confounding_factors:0" label="Confounding factors"></mb-input>
<mb-context path="tip2toe.v0/head_circumference/head_circumference_at_the_last_visit:0/time"></mb-context>
<mb-quantity default="cm" path="tip2toe.v0/head_circumference/birth/head_circumference" label="Head circumference">
                  <mb-unit unit="cm" label="cm" min="" max="100"></mb-unit>
<mb-unit unit="[in_i]" label="[in_i]" min="" max="40"></mb-unit>
              </mb-quantity>
<mb-context path="tip2toe.v0/head_circumference/birth/time"></mb-context>
<mb-context path="tip2toe.v0/head_circumference/subject"></mb-context>
<mb-context path="tip2toe.v0/head_circumference/language"></mb-context>
<mb-context path="tip2toe.v0/head_circumference/encoding"></mb-context>
<mb-input path="tip2toe.v0/diagnostic_test_results/imaging_examination_result/any_event:0/test_name" label="Test name"></mb-input>
<mb-input path="tip2toe.v0/diagnostic_test_results/imaging_examination_result/any_event:0/modality" label="Modality"></mb-input>

<mb-context path="tip2toe.v0/diagnostic_test_results/imaging_examination_result/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/diagnostic_test_results/imaging_examination_result/subject"></mb-context>
<mb-context path="tip2toe.v0/diagnostic_test_results/imaging_examination_result/language"></mb-context>
<mb-context path="tip2toe.v0/diagnostic_test_results/imaging_examination_result/encoding"></mb-context>
<mb-input path="tip2toe.v0/laboratory_test_result/any_event:0/test_name" label="Test name"></mb-input>
<mb-date time path="tip2toe.v0/laboratory_test_result/any_event:0/overall_test_status_timestamp" label="Overall test status timestamp"></mb-date>
<mb-input path="tip2toe.v0/laboratory_test_result/any_event:0/conclusion" label="Conclusion"></mb-input>

<mb-context path="tip2toe.v0/laboratory_test_result/any_event:0/time"></mb-context>

<mb-input path="tip2toe.v0/laboratory_test_result/laboratory_internal_identifier/text_value" label="Laboratory internal identifier"></mb-input>
<mb-input path="tip2toe.v0/laboratory_test_result/test_request_details:0/original_test_requested_name:0" label="Original test requested name"></mb-input>

<mb-input path="tip2toe.v0/laboratory_test_result/test_request_details:0/requester_order_identifier/text_value" label="Requester order identifier"></mb-input>

<mb-input path="tip2toe.v0/laboratory_test_result/test_request_details:0/receiver_order_identifier/text_value" label="Receiver order identifier"></mb-input>
<mb-checkbox path="tip2toe.v0/laboratory_test_result/point-of-care_test" label="Point-of-care test"></mb-checkbox>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/text_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/coded_text_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/multimedia_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/parsable_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/state_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/boolean_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/identifier_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/uri_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/ehr_uri_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/duration_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/quantity_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/count_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/proportion_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/date_time_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/time_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/ordinal_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/test_method/date_value"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/subject"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/language"></mb-context>
<mb-context path="tip2toe.v0/laboratory_test_result/encoding"></mb-context>
<mb-input path="tip2toe.v0/clinical_findings/synopsis" label="Synopsis"></mb-input>
<mb-context path="tip2toe.v0/clinical_findings/subject"></mb-context>
<mb-context path="tip2toe.v0/clinical_findings/language"></mb-context>
<mb-context path="tip2toe.v0/clinical_findings/encoding"></mb-context>
<mb-input path="tip2toe.v0/delivery/synopsis" label="Synopsis"></mb-input>
<mb-select path="tip2toe.v0/delivery/birth_detail/method_of_delivery" label="Method of delivery" terminology="local">
              <mb-option value="at0006" label="Unassisted"></mb-option>
<mb-option value="at0007" label="Assisted breech delivery"></mb-option>
<mb-option value="at0008" label="Total breech extraction"></mb-option>
<mb-option value="at0009" label="Vacuum extraction"></mb-option>
<mb-option value="at0010" label="Vacuum extraction with rotation"></mb-option>
<mb-option value="at0011" label="Lift-out forceps"></mb-option>
<mb-option value="at0012" label="Low forceps"></mb-option>
<mb-option value="at0013" label="High forceps"></mb-option>
<mb-option value="at0014" label="High forceps with rotation"></mb-option>
<mb-option value="at0015" label="Caesarean - lower uterine segment"></mb-option>
<mb-option value="at0016" label="Caesarean - upper uterine segment"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/delivery/subject"></mb-context>
<mb-context path="tip2toe.v0/delivery/language"></mb-context>
<mb-context path="tip2toe.v0/delivery/encoding"></mb-context>
<mb-select path="tip2toe.v0/pregnancy/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/pregnancy/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0001562" label="Oligohydramnios"></mb-option>
<mb-option value="HP:0001561" label="Polyhydramnios"></mb-option>
<mb-option value="HP:0011436" label="Abnormal maternal serum screening"></mb-option>
<mb-option value="HP:0034058" label="Abnormal fetal morphology"></mb-option>
<mb-option value="HP:0011425" label="Fetal ultrasound soft marker"></mb-option>
<mb-option value="HP:0034059" label="Abnormal fetal physiology"></mb-option>
<mb-option value="HP:0001511" label="Intrauterine growth retardation"></mb-option>
<mb-option value="HP:0003517" label="Fetal overgrowth"></mb-option>
<mb-option value="HP:0001558" label="Decreased fetal movement"></mb-option>
<mb-option value="HP:0010519" label="Increased fetal movement"></mb-option>
<mb-option value="HP:0001194" label="Abnormalities of placenta or umbilical cord"></mb-option>
<mb-option value="HP:0002686" label="Prenatal maternal (health) abnormality (Describe in Clinical summary above)"></mb-option>
<mb-option value="HP:0030246" label="Maternal first trimester fever"></mb-option>
<mb-option value="HP:0009800" label="Maternal diabetes"></mb-option>
<mb-option value="HP:0011437" label="Maternal autoimmune disease (Describe in Clinical summary above)"></mb-option>
<mb-option value="HP:0100622" label="Maternal seizure (during pregnancy)"></mb-option>
<mb-option value="HP:0011438" label="Maternal teratogenic exposure (Describe in Clinical summary above)"></mb-option>
<mb-option value="HP:0100603" label="Toxemia of pregnancy"></mb-option>
<mb-option value="HP:0200067" label="Recurrent spontaneous abortion in previous pregnancies"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/pregnancy/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-input path="tip2toe.v0/pregnancy/any_event:0/specific_symptom_sign:0/comment" label="Comment"></mb-input>
<mb-context path="tip2toe.v0/pregnancy/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/pregnancy/subject"></mb-context>
<mb-context path="tip2toe.v0/pregnancy/language"></mb-context>
<mb-context path="tip2toe.v0/pregnancy/encoding"></mb-context>
<mb-select path="tip2toe.v0/neonatal_period_complications/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/neonatal_period_complications/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0002643" label="Neonatal respiratory distress"></mb-option>
<mb-option value="HP:0008872" label="Feeding difficulties in infancy"></mb-option>
<mb-option value="HP:0011471" label="Gastrostomy tube feeding in infancy"></mb-option>
<mb-option value="HP:0000952" label="Significant jaundice (e.g., requiring treatment)"></mb-option>
<mb-option value="HP:0001998" label="Neonatal hypoglycemia"></mb-option>
<mb-option value="HP:0032807" label="Neonatal seizure"></mb-option>
<mb-option value="HP:0001319" label="Neonatal hypotonia"></mb-option>
<mb-option value="HP:0032169" label="Severe infection"></mb-option>
<mb-option value="HP:0002803" label="Congenital contracture"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/neonatal_period_complications/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/neonatal_period_complications/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/neonatal_period_complications/subject"></mb-context>
<mb-context path="tip2toe.v0/neonatal_period_complications/language"></mb-context>
<mb-context path="tip2toe.v0/neonatal_period_complications/encoding"></mb-context>
<mb-select path="tip2toe.v0/growth_at_birth/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/growth_at_birth/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0001507" label="Growth abnormality at birth"></mb-option>
<mb-option value="HP:0001518" label="Small for gestational age"></mb-option>
<mb-option value="HP:0001520" label="Large for gestational age"></mb-option>
<mb-option value="HP:0000256" label="Macrocephaly"></mb-option>
<mb-option value="HP:0000252" label="Microcephaly"></mb-option>
<mb-option value="HP:0001528" label="Hemihypertrophy"></mb-option>
<mb-option value="HP:0000158" label="Macroglossia"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/growth_at_birth/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/growth_at_birth/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/growth_at_birth/subject"></mb-context>
<mb-context path="tip2toe.v0/growth_at_birth/language"></mb-context>
<mb-context path="tip2toe.v0/growth_at_birth/encoding"></mb-context>
<mb-select path="tip2toe.v0/post-natal_growth/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/post-natal_growth/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0001507" label="Abnormal growth"></mb-option>
<mb-option value="HP:0000256" label="Post-natal macrocephaly"></mb-option>
<mb-option value="HP:0000252" label="Post-natal microcephaly"></mb-option>
<mb-option value="HP:0000098" label="Tall stature"></mb-option>
<mb-option value="HP:0001519" label="Disproportionate tall stature"></mb-option>
<mb-option value="HP:0003498" label="Disproportionate short stature"></mb-option>
<mb-option value="HP:0004322" label="Short stature"></mb-option>
<mb-option value="HP:0008873" label="Disproportionate short-limb short stature"></mb-option>
<mb-option value="HP:0003521" label="Disproportionate short-trunk short stature"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/post-natal_growth/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/post-natal_growth/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/post-natal_growth/subject"></mb-context>
<mb-context path="tip2toe.v0/post-natal_growth/language"></mb-context>
<mb-context path="tip2toe.v0/post-natal_growth/encoding"></mb-context>
<mb-select path="tip2toe.v0/facial_morphology/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/facial_morphology/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0001999" label="Abnormal facial shape"></mb-option>
<mb-option value="HP:0000306" label="Abnormality of the chin"></mb-option>
<mb-option value="HP:0000347" label="Micrognathia"></mb-option>
<mb-option value="HP:0000277" label="Abnormal mandible morphology"></mb-option>
<mb-option value="HP:0000326" label="Abnormality of the maxilla"></mb-option>
<mb-option value="HP:0000290" label="Abnormality of the forehead"></mb-option>
<mb-option value="HP:0011220" label="Prominent forehead"></mb-option>
<mb-option value="HP:0000340" label="Sloping forehead"></mb-option>
<mb-option value="HP:0000520" label="Proptosis"></mb-option>
<mb-option value="HP:0000316" label="Hypertelorism"></mb-option>
<mb-option value="HP:0000601" label="Hypotelorism"></mb-option>
<mb-option value="HP:0000492" label="Abnormal eyelid morphology"></mb-option>
<mb-option value="HP:0008050" label="Abnormality of the palpebral fissures"></mb-option>
<mb-option value="HP:0000286" label="Epicanthus"></mb-option>
<mb-option value="HP:0000506" label="Telecanthus"></mb-option>
<mb-option value="HP:0010938" label="Abnormality of the external nose"></mb-option>
<mb-option value="HP:0011800" label="Midface retrusion (Flat midface)"></mb-option>
<mb-option value="HP:0000154" label="Wide mouth"></mb-option>
<mb-option value="HP:0012471" label="Thick vermilion border"></mb-option>
<mb-option value="HP:0000233" label="Thin vermilion border"></mb-option>
<mb-option value="HP:0000319" label="Smooth philtrum"></mb-option>
<mb-option value="HP:0000322" label="Short philtrum"></mb-option>
<mb-option value="HP:0000343" label="Long philtrum"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/facial_morphology/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/facial_morphology/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/facial_morphology/subject"></mb-context>
<mb-context path="tip2toe.v0/facial_morphology/language"></mb-context>
<mb-context path="tip2toe.v0/facial_morphology/encoding"></mb-context>
<mb-select path="tip2toe.v0/eyes/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/eyes/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0000478" label="Abnormality of the eye"></mb-option>
<mb-option value="HP:0012372" label="Abnormal eye morphology"></mb-option>
<mb-option value="HP:0000525" label="Abnormal iris morphology"></mb-option>
<mb-option value="HP:0000505" label="Visual impairment"></mb-option>
<mb-option value="HP:0030669" label="Abnormal ocular adnexa morphology"></mb-option>
<mb-option value="HP:0000479" label="Abnormality of the retina"></mb-option>
<mb-option value="HP:0000501" label="Glaucoma"></mb-option>
<mb-option value="HP:0000486" label="Strabismus"></mb-option>
<mb-option value="HP:0000518" label="Cataract"></mb-option>
<mb-option value="HP:0000526" label="Aniridia"></mb-option>
<mb-option value="HP:0000589" label="Coloboma"></mb-option>
<mb-option value="HP:0000568" label="Microphthalmia"></mb-option>
<mb-option value="HP:0000639" label="Nystagmus"></mb-option>
<mb-option value="HP:0000508" label="Ptosis"></mb-option>
<mb-option value="HP:0000613" label="Photophobia"></mb-option>
<mb-option value="HP:0000587" label="Abnormality of the optic nerve"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/eyes/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-input path="tip2toe.v0/eyes/any_event:0/specific_symptom_sign:0/comment" label="Comment"></mb-input>
<mb-context path="tip2toe.v0/eyes/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/eyes/subject"></mb-context>
<mb-context path="tip2toe.v0/eyes/language"></mb-context>
<mb-context path="tip2toe.v0/eyes/encoding"></mb-context>
<mb-select path="tip2toe.v0/mouth_teeth/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/mouth_teeth/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0000163" label="Abnormal oral cavity morphology"></mb-option>
<mb-option value="HP:0000175" label="Cleft palate"></mb-option>
<mb-option value="HP:0410030" label="Cleft lip"></mb-option>
<mb-option value="HP:0000202" label="Cleft/palate"></mb-option>
<mb-option value="HP:0000168" label="Abnormality of the gingiva"></mb-option>
<mb-option value="HP:0000218" label="High palate"></mb-option>
<mb-option value="HP:0000164" label="Abnormality of the dentition"></mb-option>
<mb-option value="HP:0006483" label="Abnormal number of teeth"></mb-option>
<mb-option value="HP:0006482" label="Abnormal dental morphology"></mb-option>
<mb-option value="HP:0000682" label="Abnormal dental enamel morphology"></mb-option>
<mb-option value="HP:0000157" label="Abnormality of the tongue"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/mouth_teeth/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/mouth_teeth/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/mouth_teeth/subject"></mb-context>
<mb-context path="tip2toe.v0/mouth_teeth/language"></mb-context>
<mb-context path="tip2toe.v0/mouth_teeth/encoding"></mb-context>
<mb-select path="tip2toe.v0/nose/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/nose/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0005105" label="Abnormal nasal morphology"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/nose/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/nose/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/nose/subject"></mb-context>
<mb-context path="tip2toe.v0/nose/language"></mb-context>
<mb-context path="tip2toe.v0/nose/encoding"></mb-context>
<mb-select path="tip2toe.v0/ears/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/ears/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0000407" label="Sensorineural hearing impairment"></mb-option>
<mb-option value="HP:0000405" label="Conductive hearing impairment"></mb-option>
<mb-option value="HP:0000377" label="Abnormality of the pinna"></mb-option>
<mb-option value="HP:0000369" label="Low-set ears"></mb-option>
<mb-option value="HP:0000400" label="Macrotia"></mb-option>
<mb-option value="HP:0008551" label="Microtia"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/ears/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/ears/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/ears/subject"></mb-context>
<mb-context path="tip2toe.v0/ears/language"></mb-context>
<mb-context path="tip2toe.v0/ears/encoding"></mb-context>
<mb-select path="tip2toe.v0/central_nervous_system_neuromuscular_system_cognition/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/central_nervous_system_neuromuscular_system_cognition/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0000707" label="Abnormality of the nervous system"></mb-option>
<mb-option value="HP:0012443" label="Abnormality of brain morphology"></mb-option>
<mb-option value="HP:0002194" label="Delayed gross motor development"></mb-option>
<mb-option value="HP:0001263" label="Global developmental delay"></mb-option>
<mb-option value="HP:0001256" label="Intellectual disability, mild"></mb-option>
<mb-option value="HP:0002342" label="Intellectual disability, moderate"></mb-option>
<mb-option value="HP:0002187" label="Intellectual disability, profound"></mb-option>
<mb-option value="HP:0010864" label="Intellectual disability, severe"></mb-option>
<mb-option value="HP:0006887" label="Intellectual disability, progressive"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/central_nervous_system_neuromuscular_system_cognition/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/central_nervous_system_neuromuscular_system_cognition/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/central_nervous_system_neuromuscular_system_cognition/subject"></mb-context>
<mb-context path="tip2toe.v0/central_nervous_system_neuromuscular_system_cognition/language"></mb-context>
<mb-context path="tip2toe.v0/central_nervous_system_neuromuscular_system_cognition/encoding"></mb-context>
<mb-select path="tip2toe.v0/behavioral_abnormality/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/behavioral_abnormality/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0000729" label="Autistic behavior"></mb-option>
<mb-option value="HP:0007018" label="Attention deficit hyperactivity disorder"></mb-option>
<mb-option value="HP:0100716" label="Self-injurious behavior"></mb-option>
<mb-option value="HP:0000718" label="Aggressive behavior"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/behavioral_abnormality/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/behavioral_abnormality/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/behavioral_abnormality/subject"></mb-context>
<mb-context path="tip2toe.v0/behavioral_abnormality/language"></mb-context>
<mb-context path="tip2toe.v0/behavioral_abnormality/encoding"></mb-context>
<mb-select path="tip2toe.v0/speech/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/speech/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0000750" label="Delayed speech and language development"></mb-option>
<mb-option value="HP:0002465" label="Poor speech"></mb-option>
<mb-option value="HP:0001344" label="Absent speech"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/speech/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/speech/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/speech/subject"></mb-context>
<mb-context path="tip2toe.v0/speech/language"></mb-context>
<mb-context path="tip2toe.v0/speech/encoding"></mb-context>
<mb-select path="tip2toe.v0/seizures/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/seizures/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0001250" label="Seizure"></mb-option>
<mb-option value="HP:0032807" label="Neonatal seizure"></mb-option>
<mb-option value="HP:0002349" label="Focal aware seizure"></mb-option>
<mb-option value="HP:0002197" label="Generalized onset seizure"></mb-option>
<mb-option value="HP:0002353" label="EEG abnormality"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/seizures/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/seizures/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/seizures/subject"></mb-context>
<mb-context path="tip2toe.v0/seizures/language"></mb-context>
<mb-context path="tip2toe.v0/seizures/encoding"></mb-context>
<mb-select path="tip2toe.v0/muscles/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/muscles/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0003011" label="Abnormality of the musculature"></mb-option>
<mb-option value="HP:0001324" label="Muscle weakness"></mb-option>
<mb-option value="HP:0003808" label="Abnormal muscle tone"></mb-option>
<mb-option value="HP:0001276" label="Hypertonia"></mb-option>
<mb-option value="HP:0001252" label="Hypotonia"></mb-option>
<mb-option value="HP:0001371" label="Flexion contracture"></mb-option>
<mb-option value="HP:0002804" label="Arthrogryposis multiplex congenita"></mb-option>
<mb-option value="HP:0003560" label="Muscular dystrophy"></mb-option>
<mb-option value="HP:0003457" label="EMG abnormality"></mb-option>
<mb-option value="HP:0011804" label="Abnormal muscle physiology"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/muscles/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/muscles/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/muscles/subject"></mb-context>
<mb-context path="tip2toe.v0/muscles/language"></mb-context>
<mb-context path="tip2toe.v0/muscles/encoding"></mb-context>
<mb-select path="tip2toe.v0/skeleton/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/skeleton/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0002652" label="Skeletal dysplasia"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/skeleton/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/skeleton/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/skeleton/subject"></mb-context>
<mb-context path="tip2toe.v0/skeleton/language"></mb-context>
<mb-context path="tip2toe.v0/skeleton/encoding"></mb-context>
<mb-select path="tip2toe.v0/head_and_neck/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/head_and_neck/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0000929" label="Abnormal skull"></mb-option>
<mb-option value="HP:0001363" label="Craniosynostosis"></mb-option>
<mb-option value="HP:0011329" label="Abnormality of cranial sutures"></mb-option>
<mb-option value="HP:0000470" label="Short neck"></mb-option>
<mb-option value="HP:0000475" label="Broad neck"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/head_and_neck/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/head_and_neck/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/head_and_neck/subject"></mb-context>
<mb-context path="tip2toe.v0/head_and_neck/language"></mb-context>
<mb-context path="tip2toe.v0/head_and_neck/encoding"></mb-context>
<mb-select path="tip2toe.v0/trunk/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/trunk/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0000765" label="Abnormal thorax morphology"></mb-option>
<mb-option value="HP:0000925" label="Abnormality of the vertebral column"></mb-option>
<mb-option value="HP:0002650" label="Scoliosis"></mb-option>
<mb-option value="HP:0003272" label="Abnormal hip bone morphology"></mb-option>
<mb-option value="HP:0002827" label="Hip dislocation"></mb-option>
<mb-option value="HP:0000782" label="Abnormal scapula morphology"></mb-option>
<mb-option value="HP:0003043" label="Abnormal shoulder morphology"></mb-option>
<mb-option value="HP:0000766" label="Abnormal sternum morphology"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/trunk/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/trunk/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/trunk/subject"></mb-context>
<mb-context path="tip2toe.v0/trunk/language"></mb-context>
<mb-context path="tip2toe.v0/trunk/encoding"></mb-context>
<mb-select path="tip2toe.v0/upper_limbs/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/upper_limbs/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0002817" label="Abnormality of the upper limb"></mb-option>
<mb-option value="HP:0002818" label="Abnormality of the radius"></mb-option>
<mb-option value="HP:0002997" label="Abnormality of the ulna"></mb-option>
<mb-option value="HP:0009811" label="Abnormality of the elbow"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/upper_limbs/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/upper_limbs/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/upper_limbs/subject"></mb-context>
<mb-context path="tip2toe.v0/upper_limbs/language"></mb-context>
<mb-context path="tip2toe.v0/upper_limbs/encoding"></mb-context>
<mb-select path="tip2toe.v0/hands_fingers_and_thumbs/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/hands_fingers_and_thumbs/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0000954" label="Single transverse palmar crease"></mb-option>
<mb-option value="HP:0001177" label="Preaxial hand polydactyly"></mb-option>
<mb-option value="HP:0100259" label="Postaxial hand polydactyly"></mb-option>
<mb-option value="HP:0001156" label="Brachydactyly"></mb-option>
<mb-option value="HP:0100807" label="Long fingers (Arachnodactyly)"></mb-option>
<mb-option value="HP:0100257" label="Cleft hand (Ectrodactyly)"></mb-option>
<mb-option value="HP:0006265" label="Aplasia/Hypoplasia of fingers"></mb-option>
<mb-option value="HP:0009601" label="Aplasia/Hypoplasia of thumb"></mb-option>
<mb-option value="HP:0011304" label="Broad thumb"></mb-option>
<mb-option value="HP:0001159" label="Syndactyly"></mb-option>
<mb-option value="HP:0004099" label="Macrodactyly"></mb-option>
<mb-option value="HP:0010557" label="Overlapping fingers"></mb-option>
<mb-option value="HP:0001212" label="Prominent fingertip pads"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/hands_fingers_and_thumbs/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/hands_fingers_and_thumbs/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/hands_fingers_and_thumbs/subject"></mb-context>
<mb-context path="tip2toe.v0/hands_fingers_and_thumbs/language"></mb-context>
<mb-context path="tip2toe.v0/hands_fingers_and_thumbs/encoding"></mb-context>
<mb-select path="tip2toe.v0/lower_limb/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/lower_limb/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0002814" label="Abnormality of the lower limb"></mb-option>
<mb-option value="HP:0002992" label="Abnormality of tibia morphology"></mb-option>
<mb-option value="HP:0002991" label="Abnormality of fibula morphology"></mb-option>
<mb-option value="HP:0003045" label="Abnormality of the patella morphology"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/lower_limb/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/lower_limb/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/lower_limb/subject"></mb-context>
<mb-context path="tip2toe.v0/lower_limb/language"></mb-context>
<mb-context path="tip2toe.v0/lower_limb/encoding"></mb-context>
<mb-select path="tip2toe.v0/feet_toes/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/feet_toes/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0001830" label="Postaxial foot polydactyly"></mb-option>
<mb-option value="HP:0001841" label="Preaxial foot polydactyly"></mb-option>
<mb-option value="HP:0001831" label="Brachydactyly of the foot"></mb-option>
<mb-option value="HP:0010511" label="Long toe"></mb-option>
<mb-option value="HP:0010173" label="Aplasia/Hypoplasia of phalanges of toes"></mb-option>
<mb-option value="HP:0008110" label="Equinovarus deformity"></mb-option>
<mb-option value="HP:0001159" label="Syndactyly"></mb-option>
<mb-option value="HP:0010055" label="Broad hallux"></mb-option>
<mb-option value="HP:0010097" label="Bifid distal phalanx of hallux"></mb-option>
<mb-option value="HP:0001845" label="Overlapping toes"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/feet_toes/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/feet_toes/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/feet_toes/subject"></mb-context>
<mb-context path="tip2toe.v0/feet_toes/language"></mb-context>
<mb-context path="tip2toe.v0/feet_toes/encoding"></mb-context>
<mb-select path="tip2toe.v0/airways/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/airways/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0010640" label="Abnormality of the nasal cavity"></mb-option>
<mb-option value="HP:0002778" label="Abnormal tracheal morphology"></mb-option>
<mb-option value="HP:0002088" label="Abnormal lung morphology"></mb-option>
<mb-option value="HP:0025423" label="Abnormal larynx morphology"></mb-option>
<mb-option value="HP:0006536" label="Airway obstruction"></mb-option>
<mb-option value="HP:0005957" label="Breathing dysregulation"></mb-option>
<mb-option value="HP:0002094" label="Dyspnea"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/airways/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/airways/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/airways/subject"></mb-context>
<mb-context path="tip2toe.v0/airways/language"></mb-context>
<mb-context path="tip2toe.v0/airways/encoding"></mb-context>
<mb-select path="tip2toe.v0/heart_great_vessels/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/heart_great_vessels/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0001627" label="Abnormal heart morphology"></mb-option>
<mb-option value="HP:0001671" label="Abnormal cardiac septum morphology"></mb-option>
<mb-option value="HP:0001631" label="Atrial septal defect"></mb-option>
<mb-option value="HP:0001629" label="Ventricular septal defect"></mb-option>
<mb-option value="HP:0006695" label="Atrioventricular canal defect"></mb-option>
<mb-option value="HP:0001636" label="Tetralogy of Fallot"></mb-option>
<mb-option value="HP:0011675" label="Arrhythmia"></mb-option>
<mb-option value="HP:0001638" label="Cardiomyopathy"></mb-option>
<mb-option value="HP:0000822" label="Hypertension"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/heart_great_vessels/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/heart_great_vessels/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/heart_great_vessels/subject"></mb-context>
<mb-context path="tip2toe.v0/heart_great_vessels/language"></mb-context>
<mb-context path="tip2toe.v0/heart_great_vessels/encoding"></mb-context>
<mb-select path="tip2toe.v0/kidneys_and_urinary_tract/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/kidneys_and_urinary_tract/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0000077" label="Abnormality of the kidneys"></mb-option>
<mb-option value="HP:0000104" label="Renal agenesis"></mb-option>
<mb-option value="HP:0000079" label="Abnormality of the urinary system"></mb-option>
<mb-option value="HP:0000107" label="Renal cysts"></mb-option>
<mb-option value="HP:0000105" label="Enlarged kidney"></mb-option>
<mb-option value="HP:0012211" label="Abnormal kidney function"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/kidneys_and_urinary_tract/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/kidneys_and_urinary_tract/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/kidneys_and_urinary_tract/subject"></mb-context>
<mb-context path="tip2toe.v0/kidneys_and_urinary_tract/language"></mb-context>
<mb-context path="tip2toe.v0/kidneys_and_urinary_tract/encoding"></mb-context>
<mb-select path="tip2toe.v0/genitalia/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/genitalia/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0000811" label="Abnormal external genitalia"></mb-option>
<mb-option value="HP:0000812" label="Abnormal internal genitalia"></mb-option>
<mb-option value="HP:0000028" label="Cryptorchidism"></mb-option>
<mb-option value="HP:0000047" label="Hypospadias"></mb-option>
<mb-option value="HP:0000062" label="Ambiguous genitalia"></mb-option>
<mb-option value="HP:0000078" label="Abnormality of genital system"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/genitalia/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/genitalia/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/genitalia/subject"></mb-context>
<mb-context path="tip2toe.v0/genitalia/language"></mb-context>
<mb-context path="tip2toe.v0/genitalia/encoding"></mb-context>
<mb-select path="tip2toe.v0/liver_and_spleen/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/liver_and_spleen/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0001392" label="Abnormality of the liver"></mb-option>
<mb-option value="HP:0001410" label="Decreased liver function"></mb-option>
<mb-option value="HP:0002240" label="Hepatomegaly"></mb-option>
<mb-option value="HP:0001407" label="Hepatic cysts"></mb-option>
<mb-option value="HP:0001743" label="Abnormality of the spleen"></mb-option>
<mb-option value="HP:0001744" label="Splenomegaly"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/liver_and_spleen/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/liver_and_spleen/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/liver_and_spleen/subject"></mb-context>
<mb-context path="tip2toe.v0/liver_and_spleen/language"></mb-context>
<mb-context path="tip2toe.v0/liver_and_spleen/encoding"></mb-context>
<mb-select path="tip2toe.v0/skin/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/skin/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0000951" label="Abnormality of the skin"></mb-option>
<mb-option value="HP:0001000" label="Abnormality of skin pigmentation"></mb-option>
<mb-option value="HP:0007565" label="Multiple cafe-au-lait spots"></mb-option>
<mb-option value="HP:0001480" label="Freckling (axillary or inguinal)"></mb-option>
<mb-option value="HP:0100669" label="Abnormal pigmentation of the oral mucosa"></mb-option>
<mb-option value="HP:0031447" label="Penile freckling"></mb-option>
<mb-option value="HP:0008066" label="Abnormal blistering of the skin"></mb-option>
<mb-option value="HP:0011276" label="Vascular skin abnormality"></mb-option>
<mb-option value="HP:0002745" label="Oral leucoplakia"></mb-option>
<mb-option value="HP:0002558" label="Supernumerary nipple"></mb-option>
<mb-option value="HP:0008069" label="Neoplasm of the skin"></mb-option>
<mb-option value="HP:0000958" label="Dry skin"></mb-option>
<mb-option value="HP:0000964" label="Eczema"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/skin/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/skin/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/skin/subject"></mb-context>
<mb-context path="tip2toe.v0/skin/language"></mb-context>
<mb-context path="tip2toe.v0/skin/encoding"></mb-context>
<mb-select path="tip2toe.v0/hair_nails/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/hair_nails/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0001595" label="Abnormal hair morphology"></mb-option>
<mb-option value="HP:0002216" label="Premature greying of hair"></mb-option>
<mb-option value="HP:0000664" label="Synophrys"></mb-option>
<mb-option value="HP:0000534" label="Abnormal eyebrow morphology"></mb-option>
<mb-option value="HP:0001597" label="Abnormality of the nails"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/hair_nails/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/hair_nails/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/hair_nails/subject"></mb-context>
<mb-context path="tip2toe.v0/hair_nails/language"></mb-context>
<mb-context path="tip2toe.v0/hair_nails/encoding"></mb-context>
<mb-select path="tip2toe.v0/endocrine_metabolic/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/endocrine_metabolic/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0000819" label="Diabetes mellitus"></mb-option>
<mb-option value="HP:0001988" label="Recurrent hypoglycemia"></mb-option>
<mb-option value="HP:0004902" label="Congenital lactic acidosis"></mb-option>
<mb-option value="HP:0000821" label="Hypothyroidism"></mb-option>
<mb-option value="HP:0000828" label="Abnormality of the parathyroid gland"></mb-option>
<mb-option value="HP:0012093" label="Abnormality of endocrine pancreas physiology"></mb-option>
<mb-option value="HP:0000864" label="Abnormality of the hypothalamus-pituitary axis"></mb-option>
<mb-option value="HP:0000834" label="Abnormality of the adrenal glands"></mb-option>
<mb-option value="HP:0000826" label="Precocious puberty"></mb-option>
<mb-option value="HP:0000823" label="Delayed puberty"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/endocrine_metabolic/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/endocrine_metabolic/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/endocrine_metabolic/subject"></mb-context>
<mb-context path="tip2toe.v0/endocrine_metabolic/language"></mb-context>
<mb-context path="tip2toe.v0/endocrine_metabolic/encoding"></mb-context>
<mb-select path="tip2toe.v0/connective_tissue/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/connective_tissue/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0001382" label="Joint hypermobility"></mb-option>
<mb-option value="HP:0001763" label="Pes planus"></mb-option>
<mb-option value="HP:0001373" label="Joint dislocation"></mb-option>
<mb-option value="HP:0000978" label="Bruising susceptibility"></mb-option>
<mb-option value="HP:0001030" label="Fragile skin"></mb-option>
<mb-option value="HP:0001065" label="Striae distensae"></mb-option>
<mb-option value="HP:0002617" label="Aneurysm (Vascular dilatation)"></mb-option>
<mb-option value="HP:0100790" label="Hernia"></mb-option>
<mb-option value="HP:0008067" label="Abnormally lax or hyperextensible skin"></mb-option>
<mb-option value="HP:0000973" label="Cutis laxa"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/connective_tissue/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/connective_tissue/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/connective_tissue/subject"></mb-context>
<mb-context path="tip2toe.v0/connective_tissue/language"></mb-context>
<mb-context path="tip2toe.v0/connective_tissue/encoding"></mb-context>
<mb-select path="tip2toe.v0/immune_system_blood/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/immune_system_blood/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0004313" label="Decreased circulating antibody level"></mb-option>
<mb-option value="HP:0002960" label="Autoimmunity"></mb-option>
<mb-option value="HP:0012647" label="Abnormal inflammatory response"></mb-option>
<mb-option value="HP:0001903" label="Anemia"></mb-option>
<mb-option value="HP:0001882" label="Leukopenia"></mb-option>
<mb-option value="HP:0001873" label="Thrombocytopenia"></mb-option>
<mb-option value="HP:0001929" label="Abnormality of coagulation"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/immune_system_blood/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/immune_system_blood/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/immune_system_blood/subject"></mb-context>
<mb-context path="tip2toe.v0/immune_system_blood/language"></mb-context>
<mb-context path="tip2toe.v0/immune_system_blood/encoding"></mb-context>
<mb-select path="tip2toe.v0/gastrointestinal/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/gastrointestinal/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0002608" label="Celiac disease"></mb-option>
<mb-option value="HP:0002013" label="Vomiting"></mb-option>
<mb-option value="HP:0002020" label="Gastroesophageal reflux"></mb-option>
<mb-option value="HP:0002014" label="Diarrhea"></mb-option>
<mb-option value="HP:0002019" label="Constipation"></mb-option>
<mb-option value="HP:0011968" label="Feeding difficulties"></mb-option>
<mb-option value="HP:0002015" label="Dysphagia"></mb-option>
<mb-option value="HP:0012718" label="Morphological abnormality of the gastrointestinal tract"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/gastrointestinal/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/gastrointestinal/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/gastrointestinal/subject"></mb-context>
<mb-context path="tip2toe.v0/gastrointestinal/language"></mb-context>
<mb-context path="tip2toe.v0/gastrointestinal/encoding"></mb-context>
<mb-select path="tip2toe.v0/cancer_malignancy_benign_tumor/any_event:0/presence_of_any_symptoms_or_signs" label="Presence of any symptoms or signs?" terminology="local">
              <mb-option value="at0031" label="Yes"></mb-option>
<mb-option value="at0032" label="No"></mb-option>
<mb-option value="at0033" label="Unknown"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/cancer_malignancy_benign_tumor/any_event:0/specific_symptom_sign:0/symptom_or_sign_name" label="Symptom or sign name" terminology="local_terms">
              <mb-option value="HP:0002664" label="Neoplasm (Benign or malignant)"></mb-option>
<mb-option value="HP:0004377" label="Hematological neoplasm"></mb-option>
            </mb-select>
<mb-select path="tip2toe.v0/cancer_malignancy_benign_tumor/any_event:0/specific_symptom_sign:0/presence" label="Presence?" terminology="local">
              <mb-option value="at0023" label="Yes"></mb-option>
<mb-option value="at0024" label="No"></mb-option>
<mb-option value="at0027" label="Unknown"></mb-option>
            </mb-select>
<mb-context path="tip2toe.v0/cancer_malignancy_benign_tumor/any_event:0/time"></mb-context>
<mb-context path="tip2toe.v0/cancer_malignancy_benign_tumor/subject"></mb-context>
<mb-context path="tip2toe.v0/cancer_malignancy_benign_tumor/language"></mb-context>
<mb-context path="tip2toe.v0/cancer_malignancy_benign_tumor/encoding"></mb-context>
<mb-context path="tip2toe.v0/composer"></mb-context>
<mb-context path="tip2toe.v0/language"></mb-context>
<mb-context path="tip2toe.v0/territory"></mb-context>
      </mb-form>
      
    </>
  )
}
