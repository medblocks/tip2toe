import {smartAuth} from '@medblocks/appauth/src/medblocks_auth'

/**
 * To DO:
 *  - Add default button for login with dev.medblocks.com
 *  - Check for launch and iss, if present, automatically start auth flow
 *  - Implement redirect to original url after auth logic with Preact routing
 *  - Get service URLs from services
 *  - If patient: Only show one form
 *  - If practitioenr Show both forms
 * 
 */

export const {accessToken, idToken, context, services } = await smartAuth({
  iss: "https://dev.medblocks.com/fhir",
  clientId: "tip2toe",
  redirectUri: "http://localhost:5173",
  scope: "emulate_user openid offline launch/patient",
  // launch: btoa(JSON.stringify({patient: "123", encounter:"fromLaunch"})),
  onRedirect(originalUrl) {
      console.log(originalUrl)
  },
})



