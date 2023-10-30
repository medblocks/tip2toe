/*
  File: auth.ts
  File Description: The file handles the authentication of the user using the SMART on FHIR protocol.
*/

// Importing the medblocks_auth module from the @medblocks/appauth package
import {smartAuth} from '@medblocks/appauth/src/medblocks_auth'

// Function: _authHandler handles the authentication of the user using the SMART on FHIR protocol.
export const _authHandler = async (
  iss = null as string | null,
  launch = null as string | null,
  redirectUri: string,
  _patientId = null as string | null,
  _encounterId = null as string | null
) => {

  // The following code has been commented out since smartAuth is taking care of this now
  console.log('AuthParams', iss, launch, redirectUri, _patientId, _encounterId);

  const _iss = iss?iss : sessionStorage.getItem("iss")?sessionStorage.getItem("iss"):"https://karolinska.medblocks.com/fhir"
  console.log("iss_auth",_iss)
  
  sessionStorage.setItem('iss',_iss)
  // const _iss = iss!
  
  const _launch = launch 
    ? launch 
    : (_patientId && _encounterId) 
      ? btoa(JSON.stringify({ patient: _patientId, encounter: _encounterId })) 
      : '';

  return await smartAuth({
    iss: _iss,
    clientId: "067a76d2-eaa2-46fc-95b8-834f943ac2e8",
    redirectUri: redirectUri,
    scope: "emulate_user openid offline launch/patient",
    launch: _launch,
    onRedirect(originalUrl) {
      console.log(originalUrl);
    }
  });
}




