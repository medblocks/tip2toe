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
    serviceUrl_openehr_rest.value = "http://localhost:8080/ehrbase/rest/openehr/v1"
  }
  if (_services && _services["org.openehr.ehrscape"]){
    serviceUrl_openehr_ehrscape.value = _services["org.openehr.ehrscape"]
    serviceUrl_openehr_ehrscape.value = "http://localhost:8080/ehrbase/rest/ecis/v1"
  }
}

export const isPractitioner = computed(() => {
  if (idToken.value && idToken.value.fhirUser)
    return idToken.value.fhirUser.toLowerCase().includes("practitioner")? true : false
  return false
});



// DATA FUNCTIONS

