/*
  File: FhirPatientDetails.tsx
  File Description: The FhirPatientDetails component is used to display the FHIR Patient Details.
*/

// Import necessary modules and components
import { useEffect, useState } from "preact/hooks";
import * as signalStore from '@/core/store';
import { getFhirPatientDetails } from "@/core/utils/fhir";

// The interface is currently empty; if you plan to pass props in the future, they should be added here
interface FhirPatientDetailsHandlerProps {}

const FhirPatientDetails: React.FC<FhirPatientDetailsHandlerProps> = () => {
  const [id, setId] = useState<string>(''); // Updated set function name for consistency
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');

  useEffect(() => {
    const subscription = signalStore.patientId.subscribe(async (value) => {
      const patientDetails = await getFhirPatientDetails(value);
      
      // Check for the existence of patientDetails before setting state to ensure safety
      if (patientDetails) {
        setId(patientDetails.id || '');
        setName(patientDetails.name?.[0]?.text || '');
        setGender(patientDetails.gender || '');
        setBirthDate(patientDetails.birthDate || '');
      }
    });

    // Cleanup the subscription on component unmount
  }, [signalStore.patientId.value]);

  // Only render the component when need_patient_banner is true, otherwise render nothing
  if (!signalStore.context.value?.need_patient_banner) return null;

  return (
    <div className="relative flex min-w-0 flex-1 items-center bg-primary/10 p-2 rounded text-left">
      <div className="ml-4">
        <p className="text-sm text-gray-500">@{id}</p>
        <p className="text-base font-medium text-gray-900">{name}</p>
        <div className="flex">
          <p className="mt-1 text-sm font-medium mr-1">Gender :</p>
          <p className="mt-1 text-sm font-medium uppercase">{gender}</p>
        </div>
        <div className="flex">
          <p className="mt-1 text-sm font-medium mr-1">Birth Date :</p>
          <p className="mt-1 text-sm font-medium uppercase">{birthDate}</p>
        </div>
      </div>
    </div>
  );
}

export default FhirPatientDetails;
