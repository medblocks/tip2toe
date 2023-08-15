import { useLocation } from "react-router-dom";
export default function IndividualView() {
  const { pathname } = useLocation();
  return (
    <div class={pathname === `/questionnaire/individual` ?'':'hidden'}>
      <h2 class="text-2xl mb-2">Individual view</h2>
      <p>
        This is the individual view
      </p>
     
    </div>
  );
}