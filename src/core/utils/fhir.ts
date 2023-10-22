/*
  File: fhir.ts
  File Description: This file is used to handle fhir requests from formsection.
*/

import { _handleFhirPatient } from "./_fhitApiHandler"

async function getFhirPatientDetails(patientId : string){
  try{
    const response = await _handleFhirPatient('Get', patientId)
    return response
  }
  catch(e){
    console.log(e)
    throw new Error('Error getting fhir patient details')
  }
}




export {getFhirPatientDetails}