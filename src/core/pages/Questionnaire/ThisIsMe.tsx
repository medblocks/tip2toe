import { ONTOLOGY } from "@/tip2toeform";
import { useLocation } from "react-router-dom";

interface ThisIsMeHandlerProps {
  addToSummary: Function;
  readonly: boolean;
}

const ThisIsMe: React.FC<ThisIsMeHandlerProps> = ({ addToSummary, readonly= false }) => {
  const { pathname } = useLocation();

  function _handleInput(e:any,title:string){
    if(e.currentTarget?.data){
      addToSummary({code: title, title: "text", value: ONTOLOGY.options[0].value})
    }
    else{
      addToSummary({code: title, title: "text", value: ONTOLOGY.default.value})
    }
  }

  return (
    <div class={pathname === `/questionnaire/this-is-me` ?'':'hidden'}>
      <h2 class="mt-0 text-4xl uppercase font-bold antialiased tracking-wide">This Is Me</h2>
      <div class="mt-4 divide-y divide-gray-300">
        <div class="py-5">
          <h3 class="text-xl">My care givers are</h3>
          <mb-input disabled={readonly} onmb-input={(e: any) => _handleInput(e,"My care givers are")} path="tip2toe.v0/context/this_is_me/my_care_givers_are" ></mb-input>
        </div>
        <div class="py-5">
          <h3 class="text-xl">My favorite things to do</h3>
          <mb-input disabled={readonly} onmb-input={(e: any) => _handleInput(e,"My favorite things to do")} path="tip2toe.v0/context/this_is_me/my_favorite_things_to_do"></mb-input>
        </div>
        <div class="py-5">
          <h3 class="text-xl">I don't like to</h3>
          <mb-input disabled={readonly} onmb-input={(e: any) => _handleInput(e,"I don't like to")} path="tip2toe.v0/context/this_is_me/i_don_t_like_to"></mb-input>
        </div>
        <div class="py-5">
          <h3 class="text-xl">When I am happy, I</h3>
          <mb-input disabled={readonly} onmb-input={(e: any) => _handleInput(e,"When I am happy, I")} path="tip2toe.v0/context/this_is_me/when_i_am_happy_i"></mb-input>
        </div>
        <div class="py-5">
          <h3 class="text-xl">When I am worried, I</h3>
          <mb-input disabled={readonly} onmb-input={(e: any) => _handleInput(e,"When I am worried, I")} path="tip2toe.v0/context/this_is_me/when_i_am_worried_i"></mb-input>
        </div>
        <div class="py-5">
          <h3 class="text-xl">I need help with</h3>
          <mb-input disabled={readonly} onmb-input={(e: any) => _handleInput(e,"I need help with")} path="tip2toe.v0/context/this_is_me/i_need_help_with"></mb-input>
        </div>
        <div class="py-5">
          <h3 class="text-xl">I can do these things for myself</h3>
          <mb-input disabled={readonly} onmb-input={(e: any) => _handleInput(e,"I can do these things for myself")} path="tip2toe.v0/context/this_is_me/i_can_do_these_things_for_myself" ></mb-input>
        </div>
        <div class="py-5">
          <h3 class="text-xl">I eat</h3>
          <mb-input disabled={readonly} onmb-input={(e: any) => _handleInput(e,"I eat")} path="tip2toe.v0/context/this_is_me/i_eat"></mb-input>
        </div>
        <div class="py-5">
          <h3 class="text-xl">I sleep</h3>
          <mb-input disabled={readonly} onmb-input={(e: any) => _handleInput(e,"I sleep")} path="tip2toe.v0/context/this_is_me/i_sleep"></mb-input>
        </div>
        <div class="py-5">
          <h3 class="text-xl">I have the following medical problems</h3>
          <mb-input disabled={readonly} onmb-input={(e: any) => _handleInput(e,"I have the following medical problems")} path="tip2toe.v0/context/this_is_me/i_have_the_following_medical_problems"></mb-input>
        </div>
      </div>
    </div>
  );
}

export default ThisIsMe