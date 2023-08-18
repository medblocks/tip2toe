import { ONTOLOGY } from "@/tip2toeform";
import { useLocation } from "react-router-dom";

interface IndividualViewHandlerProps {
  addToSummary: Function;
}

const IndividualView: React.FC<IndividualViewHandlerProps> = ({ addToSummary }) => {
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
    <div class={pathname === `/questionnaire/individual` ?'':'hidden'}>
      <h2 class="mt-0 text-4xl uppercase font-bold antialiased tracking-wide">Individual View</h2>

      <div class="mt-4 divide-y divide-gray-300">
        <div class="py-5">
          <h3 class="text-xl">Vital status</h3>
            <mb-context path="tip2toe.v0/vital_status/point_in_time_event:0/time"></mb-context>
            <mb-context path="tip2toe.v0/vital_status/language"></mb-context>
            <mb-context path="tip2toe.v0/vital_status/encoding"></mb-context>
            <mb-context path="tip2toe.v0/vital_status/subject"></mb-context>
            <mb-select onmb-input={(e: any) => _handleInput(e,"Vital status")} path="tip2toe.v0/vital_status/point_in_time_event:0/vital_status" terminology="local">
              <mb-option value="at0005" label="Alive"></mb-option>
              <mb-option value="at0006" label="Dead"></mb-option>
              <mb-option value="at0009" label="Unknown"></mb-option>
            </mb-select>
        </div>
        <div class="py-5">
          <h3 class="text-xl">Gestational age</h3>
            <mb-context path="tip2toe.v0/birth_summary/language"></mb-context>
            <mb-context path="tip2toe.v0/birth_summary/encoding"></mb-context>
            <mb-context path="tip2toe.v0/birth_summary/subject"></mb-context>
            <mb-duration onmb-input={(e: any) => _handleInput(e,"Gestational age")} day path="tip2toe.v0/birth_summary/birth_detail/gestational_age" label=""></mb-duration>
            <mb-input onmb-input={(e: any) => _handleInput(e,"Gestational age-comment")} path="tip2toe.v0/birth_summary/comment" label="Comment"></mb-input>
        </div>
        <div class="py-5">
          <h3 class="text-xl">Weight At Last Visit</h3>
            <mb-context path="tip2toe.v0/body_weight/birth/time"></mb-context>
            <mb-context path="tip2toe.v0/body_weight/language"></mb-context>
            <mb-context path="tip2toe.v0/body_weight/encoding"></mb-context>
            <mb-context path="tip2toe.v0/body_weight/subject"></mb-context>

            <mb-context path="tip2toe.v0/body_weight/weight_at_the_last_visit:0/time"></mb-context>
            <mb-quantity onmb-input={(e: any) => _handleInput(e,"Weight At Last Visit")} default="kg" path="tip2toe.v0/body_weight/weight_at_the_last_visit:0/weight">
              <mb-unit unit="kg" label="kg" min="" max="1000"></mb-unit>
              <mb-unit unit="[lb_av]" label="[lb_av]" min="" max="2000"></mb-unit>
              <mb-unit unit="g" label="g" min="" max="1000000"></mb-unit>
            </mb-quantity>         
        </div>
        <div class="py-5">
          <h3 class="text-xl">Weight At Birth</h3>
            <mb-context path="tip2toe.v0/body_weight/birth/time"></mb-context>
            <mb-quantity onmb-input={(e: any) => _handleInput(e,"Weight At Birth")} default="kg" path="tip2toe.v0/body_weight/birth/weight">
              <mb-unit unit="kg" label="kg" min="" max="1000"></mb-unit>
              <mb-unit unit="[lb_av]" label="[lb_av]" min="" max="2000"></mb-unit>
              <mb-unit unit="g" label="g" min="" max="1000000"></mb-unit>
            </mb-quantity>
        </div>
        <div class="py-5">
          <h3 class="text-xl">Height/Length At Last Visit</h3>
          <mb-context path="tip2toe.v0/height_length/language"></mb-context>
          <mb-context path="tip2toe.v0/height_length/encoding"></mb-context>
          <mb-context path="tip2toe.v0/height_length/subject"></mb-context>
          <mb-context path="tip2toe.v0/height_length/length_at_the_last_visit:0/time"></mb-context>
          <mb-quantity onmb-input={(e: any) => _handleInput(e,"Height/length At Last Visit")} default="cm" path="tip2toe.v0/height_length/length_at_the_last_visit:0/height_length" label="">
            <mb-unit unit="cm" label="cm" min="" max="1000"></mb-unit>
            <mb-unit unit="[in_i]" label="[in_i]" min="" max="250"></mb-unit>
          </mb-quantity>
        </div>
        <div class="py-5">
          <mb-context path="tip2toe.v0/height_length/birth/time"></mb-context>
          <h3 class="text-xl">Height/Length At Birth</h3>
          <mb-quantity onmb-input={(e: any) => _handleInput(e,"Height/length At Birth")} default="cm" path="tip2toe.v0/height_length/birth/height_length" label="Height/Length">
            <mb-unit unit="cm" label="cm" min="" max="1000"></mb-unit>
            <mb-unit unit="[in_i]" label="[in_i]" min="" max="250"></mb-unit>
          </mb-quantity>
        </div>
        <div class="py-5">
          <h3 class="text-xl">Head circumference At Last Visit</h3>
          <mb-context path="tip2toe.v0/head_circumference/language"></mb-context>
          <mb-context path="tip2toe.v0/head_circumference/encoding"></mb-context>
          <mb-context path="tip2toe.v0/head_circumference/subject"></mb-context>

          <mb-context path="tip2toe.v0/head_circumference/head_circumference_at_the_last_visit:0/time"></mb-context>
          <mb-quantity onmb-input={(e: any) => _handleInput(e,"Head Circumference At Last Visit")} default="cm" path="tip2toe.v0/head_circumference/head_circumference_at_the_last_visit:0/head_circumference" label="Head circumference">
            <mb-unit unit="cm" label="cm" min="" max="100"></mb-unit>
            <mb-unit unit="[in_i]" label="[in_i]" min="" max="40"></mb-unit>
          </mb-quantity>
        </div>
        <div class="py-5">
          <h3 class="text-xl">Head circumference At Birth</h3>
          <mb-context path="tip2toe.v0/head_circumference/birth/time"></mb-context>
          <mb-quantity onmb-input={(e: any) => _handleInput(e,"Head Circumference At Birth")} default="cm" path="tip2toe.v0/head_circumference/birth/head_circumference" label="Head circumference">
            <mb-unit unit="cm" label="cm" min="" max="100"></mb-unit>
            <mb-unit unit="[in_i]" label="[in_i]" min="" max="40"></mb-unit>
          </mb-quantity>
        </div>
      </div>
    </div>
  );
}

export default IndividualView