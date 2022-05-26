// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const recaptchaSitekey = '6LfLU7gaAAAAAK48CBfh68lGeBs3FOw5oDDdFcBL';
const recaptchaURL = `https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=${recaptchaSitekey}`;

export const environment = {
  production: false,
  hmr: false,
  recaptchaSitekey,
  recaptchaURL,
  mapApiKey: 'AIzaSyDyoyV8JT6B-lyXiviZKptJdNN1aUEDixg',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
