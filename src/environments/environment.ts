// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: 'AIzaSyBX3OaP6G8aV2U7EtL989rulbtSnnKa2mI',
    authDomain: 'lokklguia.firebaseapp.com',
    databaseURL: 'https://lokklguia.firebaseio.com',
    projectId: 'lokklguia',
    storageBucket: 'lokklguia.appspot.com',
    messagingSenderId: '455775910147',
    appId: '1:455775910147:web:b1a3f8fb9ec5cfd3691136',
    measurementId: 'G-4DK0P51S9N'
  },
  //apiUrl: 'http://localhost:8001',
  apiUrl: 'https://api.lokkl.com',
  URL_AWS: 'https://lokkl.s3.us-east-2.amazonaws.com',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
