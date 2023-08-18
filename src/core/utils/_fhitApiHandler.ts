import axios from 'axios';
import * as signalStore from '@/core/store'


async function _handleFhirPatient(methodtype='GET' as string, patientId: string){
  await signalStore.serviceUrl_fhir
  const allowedMethods = ['GET']
  const url = `${signalStore.serviceUrl_fhir}/patient/${patientId}`
  methodtype = methodtype.toUpperCase().replace(/ /g,'')
  if (!allowedMethods.includes(methodtype)) throw new Error('Invalid type of request')
  const config = {
    method: methodtype,
    maxBodyLength: Infinity,
    url: url,
    headers: { 
      'Authorization': `Bearer ${signalStore.accessToken.value}`
    },
  }
  const response = await axios.request(config).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
    throw new Error('Error in request')
  })
  return response
}

export {_handleFhirPatient}