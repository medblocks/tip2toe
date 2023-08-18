import { signal, computed } from "@preact/signals";

// DATA VARIABLES
export const idToken = signal<any | undefined>({})
export const context = signal<any | undefined>({})
export const services = signal<any | undefined>({})
export const encounterId = signal<any | undefined>({})
export const patientId = signal<any | undefined>({})
export const accessToken = signal<any | undefined>({})
export const serviceUrl_openehr_rest = signal<any | undefined>({})
export const serviceUrl_openehr_ehrscape = signal<any | undefined>({})
// DATA VARIABLES


// DATA FUNCTIONS
export const _loadStore= (_idToken: any | undefined, _context: any | undefined, _services: any | undefined, _accessToken: any | undefined) => {
  idToken.value = _idToken
  context.value = _context
  services.value = _services
  console.log("context", _context)
  console.log("services", _services)
  console.log("idToken", _idToken)
  if (_context && _context.encounter){
    encounterId.value = _context.encounter
  }
  if (_context && _context.patient){
    patientId.value = _context.patient
  }
  if (_accessToken){
    accessToken.value = _accessToken
  }
  if (_services && _services["org.openehr.rest"]){
    serviceUrl_openehr_rest.value = _services["org.openehr.rest"]
    // serviceUrl_openehr_rest.value = "http://localhost:8080/ehrbase/rest/openehr/v1"
  }
  if (_services && _services["org.openehr.ehrscape"]){
    serviceUrl_openehr_ehrscape.value = _services["org.openehr.ehrscape"]
    // serviceUrl_openehr_ehrscape.value = "http://localhost:8080/ehrbase/rest/ecis/v1"
  }
  window.sessionStorage.setItem("idToken", JSON.stringify(_idToken))
  window.sessionStorage.setItem("context", JSON.stringify(_context))
  window.sessionStorage.setItem("services", JSON.stringify(_services))
  window.sessionStorage.setItem("accessToken", JSON.stringify(_accessToken))
}

export const _loadStoreFromSessionStorage = () => {
  idToken.value = JSON.parse(window.sessionStorage.getItem("idToken") || "{}")
  context.value = JSON.parse(window.sessionStorage.getItem("context") || "{}")
  services.value = JSON.parse(window.sessionStorage.getItem("services") || "{}")
  accessToken.value = JSON.parse(window.sessionStorage.getItem("accessToken") || "{}")

  if (context.value && context.value.encounter){
    encounterId.value = context.value.encounter
  }
  if (context.value && context.value.patient){
    patientId.value = context.value.patient
  }
  if (services.value && services.value["org.openehr.rest"]){
    serviceUrl_openehr_rest.value = services.value["org.openehr.rest"]
  }
  if (services.value && services.value["org.openehr.ehrscape"]){
    serviceUrl_openehr_ehrscape.value = services.value["org.openehr.ehrscape"]
  }
}


export const isPractitioner = computed(() => {
  if (idToken.value && idToken.value.fhirUser)
    return idToken.value.fhirUser.toLowerCase().includes("practitioner")? true : false
  return false
});



// DATA FUNCTIONS

