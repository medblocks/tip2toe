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
  console.log('AuthParams', iss, launch, redirectUri, _patientId, _encounterId);
  
  const _launch = launch 
    ? launch 
    : (_patientId && _encounterId) 
      ? btoa(JSON.stringify({ patient: _patientId, encounter: _encounterId })) 
      : '';

  return await smartAuth({
    iss: iss || "https://dev.medblocks.com/fhir",
    clientId: "tip2toe",
    redirectUri: redirectUri,
    scope: "emulate_user openid offline launch/patient",
    launch: _launch,
    onRedirect(originalUrl) {
      console.log(originalUrl);
    }
  });
}




