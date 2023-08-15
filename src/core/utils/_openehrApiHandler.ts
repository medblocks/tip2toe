import axios from 'axios';

const openehrUrl = import.meta.env.VITE_OPENEHR_URL + "/openehr/v1"
const openehrscrapeUrl = import.meta.env.VITE_OPENEHR_URL + "/ecis/v1"
const templateId = import.meta.env.VITE_OPENEHR_TEMPLATEID


async function _handleEHRRequests(methodtype='GET' as string, ehrId: string){
  const allowedMethods = ['GET', 'PUT']
  const url = `${openehrUrl}/ehr/${ehrId}`
  methodtype = methodtype.toUpperCase().replace(/ /g,'')

  if (!allowedMethods.includes(methodtype)) throw new Error('Invalid type of request')
  const config = {
    method: methodtype,
    maxBodyLength: Infinity,
    url: url,
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json', 
      'Prefer': 'return=representation', 
      'Authorization': import.meta.env.VITE_OPENEHR_AUTHORIZATIONTOKEN
    },
  }
  const response = await axios.request(config).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
    return null
  })
  return response
}

async function _handleAQLQuery(query: string){
  const url = `${openehrUrl}/query/aql`
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: url,
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json', 
      'Authorization': import.meta.env.VITE_OPENEHR_AUTHORIZATIONTOKEN
    },
    data : JSON.stringify({q: query})
  };
  const response = await axios.request(config).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
    return null
  })
  return response
}

async function _handleCompositionRequests(methodtype='GET' as string, id: string, composition?: any){
  const allowedMethods = ['GET', 'POST', 'PUT']
  methodtype = methodtype.toUpperCase().replace(/ /g,'')
  if (!allowedMethods.includes(methodtype)) throw new Error('Invalid type of request')
  let config = {
    method: methodtype,
    maxBodyLength: Infinity,
    url: '',
    headers: {
    'Content-Type': 'application/json', 
    'Authorization': import.meta.env.VITE_OPENEHR_AUTHORIZATIONTOKEN
    },
    data: {}
  }
  if (methodtype == 'POST'){
    composition = JSON.stringify(composition)
    config.data = composition
    config.url = `${openehrscrapeUrl}/composition?ehrId=${id}&templateId=${templateId}&format=FLAT`
  }
  else if (methodtype == 'GET'){
    config.url = `${openehrscrapeUrl}/composition/${id}?format=FLAT`
  }
  else if (methodtype == 'PUT'){
    composition = JSON.stringify(composition)
    config.data = composition
    config.url = `${openehrscrapeUrl}/composition/${id}?format=FLAT&templateId=${templateId}`
  }
  const response = await axios.request(config).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
    return null
  })
  return response

}

export {_handleEHRRequests, _handleCompositionRequests, _handleAQLQuery}