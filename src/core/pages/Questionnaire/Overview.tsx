/*
  File: Overview.tsx
  File Description: The Overview component is used to display the Overview page of the questionnaire.
*/

// Import necessary modules and components
import { useLocation } from "react-router-dom";

export default function Overview() {
  // Get the current route pathname
  const { pathname } = useLocation();

  return (
    <div class={pathname === `/questionnaire/overview` ?'':'hidden'}>
      <h2 class="text-2xl mb-2">Questionnaire</h2>
      <p>
        Step through each section. Some information might be difficult to
        obtain. In this case the local UDP referral should write "Unknown".
      </p>
    </div>
  );
}