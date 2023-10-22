/*
  File: _openehrApiHandler.ts
  File Description: This file is used to handle openEHR requests to server.
*/
import axios from 'axios';
import * as signalStore from '@/core/store'


const templateId = import.meta.env.VITE_OPENEHR_TEMPLATEID


async function _handleEHRRequests(methodtype='GET' as string, ehrId: string){
  await signalStore.serviceUrl_openehr_rest
  const allowedMethods = ['GET', 'PUT']
  const url = `${signalStore.serviceUrl_openehr_rest}/ehr/${ehrId}`
  methodtype = methodtype.toUpperCase().replace(/ /g,'')
  if (!allowedMethods.includes(methodtype)) throw new Error('Invalid type of request')
  const config = {
    method: methodtype,
    maxBodyLength: Infinity,
    url: url,
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${signalStore.accessToken.value}`
    },
  }
  const response = await axios.request(config).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
    if (error.response.status == 401){
      console.log('Forbidden')
      signalStore._clearStore()
    }
    throw new Error('Error in request')
  })
  return response
}

async function _handleAQLQuery(query: string){
  await signalStore.serviceUrl_openehr_rest
  const url = `${signalStore.serviceUrl_openehr_rest}/query/aql`
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: url,
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${signalStore.accessToken.value}`
    },
    data : JSON.stringify({q: query})
  };
  const response = await axios.request(config).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
    if (error.response.status == 401){
      console.log('Forbidden')
      signalStore._clearStore()
    }
    return null
  })
  return response
}

async function _handleCompositionRequests(methodtype='GET' as string, id: string, composition?: any){
  await signalStore.serviceUrl_openehr_ehrscape
  const allowedMethods = ['GET', 'POST', 'PUT']
  methodtype = methodtype.toUpperCase().replace(/ /g,'')
  if (!allowedMethods.includes(methodtype)) throw new Error('Invalid type of request')
  let config = {
    method: methodtype,
    maxBodyLength: Infinity,
    url: '',
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${signalStore.accessToken.value}`
    },
    data: {}
  }
  if (methodtype == 'POST'){
    composition = JSON.stringify(composition)
    config.data = composition
    config.url = `${signalStore.serviceUrl_openehr_ehrscape}/composition?ehrId=${id}&templateId=${templateId}&format=FLAT`
  }
  else if (methodtype == 'GET'){
    config.url = `${signalStore.serviceUrl_openehr_ehrscape}/composition/${id}?format=FLAT`
  }
  else if (methodtype == 'PUT'){
    composition = JSON.stringify(composition)
    config.data = composition
    config.url = `${signalStore.serviceUrl_openehr_ehrscape}/composition/${id}?format=FLAT&templateId=${templateId}`
  }

  const response = await axios.request(config).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
    if (error.response.status == 401){
      console.log('Forbidden')
      signalStore._clearStore()
    }
    throw new Error('Error in request')
  })
  return response

}

export {_handleEHRRequests, _handleCompositionRequests, _handleAQLQuery}