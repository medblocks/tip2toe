/*
  File: openehr.ts
  File Description: This file is used to handle openEHR requests from formsection.
*/
import {_handleEHRRequests , _handleCompositionRequests, _handleAQLQuery} from './_openehrApiHandler'

async function setEhrId(ehrId : string) {
  let is_ehrIdPresent = false
  try{
    is_ehrIdPresent = await _handleEHRRequests('GET', ehrId) == null ? false : true
  }
  catch(e){
    is_ehrIdPresent = false
  }
  if(!is_ehrIdPresent){
    try{
      await _handleEHRRequests('PUT', ehrId)
      return ehrId
    }
    catch(e){
      console.log(e)
      throw new Error('Error creating ehrId')
    }
  }
  else return ehrId
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
  try{
    const response = await _handleCompositionRequests('POST', ehrId, composition)
    return response
  }
  catch(e){
    console.log(e)
    throw new Error('Error creating composition')
  }
}

async function updateComposition(compositionId : string, composition : any){
  const response = await _handleCompositionRequests('PUT', compositionId, composition)
  console.log(response)
  return response
}
 


export {setEhrId, createComposition, getAllCompositionIDs, getCompositionByID, updateComposition}