import { useLocation } from "react-router-dom";

export default function Overview() {
  const { pathname } = useLocation();

  return (
    <div class={pathname === `/questionnaire/overview` ?'':'hidden'}>
      <h2 class="text-2xl mb-2">Questionnaire</h2>
      <p>
        Step through each section. Some information might be difficult to
        obtain. In this case the local UDP referral should write "Not
        investigated".
      </p>

    </div>
  );
}