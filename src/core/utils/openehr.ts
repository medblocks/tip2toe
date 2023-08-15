import { useSearchParams } from 'react-router-dom';
import {_handleEHRRequests , _handleCompositionRequests, _handleAQLQuery} from './_openehrApiHandler'

async function getEhrId() {
  let ehrId = null
  const [searchParams] = useSearchParams();
  if (!searchParams.has('patientId')) {
    ehrId = sessionStorage.getItem('ehrId')
    if (!ehrId){
      console.log('No ehrId found')
      return null
    }
  }
  else ehrId = searchParams.get('patientId') as string
  sessionStorage.setItem('ehrId', ehrId)

  if(await _handleEHRRequests('GET', ehrId) == null){
    console.log('No ehrId found, creating new one')
    await _handleEHRRequests('PUT', ehrId)
  }
  else{
    console.log('ehrId found')
  }
  

  return ehrId
}

async function getAllCompositionIDs(ehrId : string){
  let query = `select c/context/start_time/value as start_time, c/name/value as name, c/uid/value as uid From EHR e contains COMPOSITION c WHERE e/ehr_id/value='${ehrId}'`
  const response = await _handleAQLQuery(query)
  return response
}

async function getCompositionByID(compositionId : string){
  const response = await _handleCompositionRequests('GET', compositionId)
  return response

}


async function createComposition(ehrId : string,composition : any){
  const response = await _handleCompositionRequests('POST', ehrId, composition)
  return response
}

async function updateComposition(compositionId : string, composition : any){
  const response = await _handleCompositionRequests('PUT', compositionId, composition)
  console.log(response)
  return response
}


export {getEhrId, createComposition, getAllCompositionIDs, getCompositionByID, updateComposition}