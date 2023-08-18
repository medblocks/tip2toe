import { useEffect, useState } from "preact/hooks";
import * as signalStore from '@/core/store';
import { getFhirPatientDetails } from "@/core/utils/fhir";

interface FhirPatientDetailsHandlerProps {
}

const FhirPatientDetails: React.FC<FhirPatientDetailsHandlerProps> = ({  }) => {
  const [id, setid] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [birthDate, setBirthDate] = useState<string>('')
  useEffect(() => {
    signalStore.patientId.subscribe(async (value)=>{
      const patientDetails = await getFhirPatientDetails(value)
      setid(patientDetails?.id)
      setName(patientDetails?.name[0]?.text)
      setGender(patientDetails?.gender)
      setBirthDate(patientDetails?.birthDate)
    })
  },[signalStore.patientId.value]);
  return (
    <>
      <div class="relative flex min-w-0 flex-1 items-center bg-primary/10 p-2 rounded text-left">
        <div class="ml-4">
          <p class="text-sm text-gray-500">@{id}</p>
          <p class="text-base font-medium text-gray-900">{name}</p>
          <div class="flex">
            <p class="mt-1 text-sm font-medium mr-1">Gender :</p>
            <p class="mt-1 text-sm font-medium uppercase">{gender}</p>
          </div>
          <div class="flex">
            <p class="mt-1 text-sm font-medium mr-1">Birth Date :</p>
            <p class="mt-1 text-sm font-medium uppercase">{birthDate}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FhirPatientDetails;