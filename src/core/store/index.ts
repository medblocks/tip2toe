/*
  File: store.ts
  File Description: This file is used to store data in signals for global use inside the app.
*/
import { signal, computed } from "@preact/signals";

type ServiceMapping = {
  [key: string]: typeof serviceUrl_openehr_rest; // This line is our index signature
}

// Data signals
export const idToken = signal<any | undefined>({})
export const context = signal<any | undefined>({})
export const services = signal<any | undefined>({})
export const encounterId = signal<any | undefined>({})
export const patientId = signal<any | undefined>({})
export const accessToken = signal<any | undefined>({})
export const serviceUrl_openehr_rest = signal<any | undefined>({})
export const serviceUrl_openehr_ehrscape = signal<any | undefined>({})
export const serviceUrl_fhir = signal<any | undefined>({})
export const serviceUrl_s3presignedurl = signal<any | undefined>({})

// Helper to update service URLs
const updateServiceUrls = (_services: any) => {
  const serviceMappings: ServiceMapping = {
    "org.openehr.rest": serviceUrl_openehr_rest,
    "org.openehr.ehrscape": serviceUrl_openehr_ehrscape,
    "org.fhir.rest": serviceUrl_fhir,
    "org.medblocks.s3presignedurl": serviceUrl_s3presignedurl
  };

  for (let key in serviceMappings) {
    if (_services && _services[key]) {
      serviceMappings[key].value = _services[key];
    }
  }
}

export const _loadStore = (_idToken: any, _context: any, _services: any, _accessToken: any) => {
  idToken.value = _idToken
  context.value = _context
  services.value = _services
  accessToken.value = _accessToken

  // Display debug information
  console.log("context", _context)
  console.log("need_patient_banner", _context?.need_patient_banner)
  console.log("services", _services)
  console.log("idToken", _idToken)

  // Update context-based values
  if (_context) {
    encounterId.value = _context.encounter || encounterId.value;
    patientId.value = _context.patient || patientId.value;
    _context.need_patient_banner = _context.need_patient_banner ?? true;
  }

  // Update service URLs
  updateServiceUrls(_services);

  // Save to session storage
  window.sessionStorage.setItem("idToken", JSON.stringify(idToken.value))
  window.sessionStorage.setItem("context", JSON.stringify(context.value))
  window.sessionStorage.setItem("services", JSON.stringify(services.value))
  window.sessionStorage.setItem("accessToken", JSON.stringify(accessToken.value))
}


export const _loadStoreDev = (ehrId: string,isPractitioner: Boolean) => {
  patientId.value = ehrId
  isPractitioner ? idToken.value.fhirUser = "practitioner" : null
  serviceUrl_openehr_rest.value = import.meta.env.VITE_DEV_EHRBASE_REST_URL
  serviceUrl_openehr_ehrscape.value = import.meta.env.VITE_DEV_EHRBASE_SCAPE_URL
}

export const _loadStoreFromSessionStorage = () => {
  // Get values from session storage
  idToken.value = JSON.parse(window.sessionStorage.getItem("idToken") || "{}")
  context.value = JSON.parse(window.sessionStorage.getItem("context") || "{}")
  services.value = JSON.parse(window.sessionStorage.getItem("services") || "{}")
  accessToken.value = JSON.parse(window.sessionStorage.getItem("accessToken") || "{}")

  // Update context-based values
  if (context.value) {
    encounterId.value = context.value.encounter || encounterId.value;
    patientId.value = context.value.patient || patientId.value;
  }

  // Update service URLs
  updateServiceUrls(services.value);
}

export const _clearStore = () => {
  // Clear all signals
  idToken.value = undefined
  context.value = undefined
  services.value = undefined
  accessToken.value = undefined
  serviceUrl_openehr_rest.value = undefined
  serviceUrl_openehr_ehrscape.value = undefined
  serviceUrl_fhir.value = undefined

  // Clear session storage
  window.sessionStorage.removeItem("idToken")
  window.sessionStorage.removeItem("context")
  window.sessionStorage.removeItem("services")
  window.sessionStorage.removeItem("accessToken")
}

// Computed to determine if user is a practitioner
export const isPractitioner = computed(() => {
  return idToken.value?.fhirUser?.toLowerCase().includes("practitioner");
});
