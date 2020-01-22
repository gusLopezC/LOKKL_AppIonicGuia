// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig: {
     apiKey: "AIzaSyDQm9OHTJAmiLcxUMtPYSbSE65IdYGJX2I",
    authDomain: "lokklguia.firebaseapp.com",
    databaseURL: "https://lokklguia.firebaseio.com",
    projectId: "lokklguia",
    storageBucket: "lokklguia.appspot.com",
    messagingSenderId: "455775910147",
    appId: "1:455775910147:web:be738b6ca543cc96691136",
    measurementId: "G-ZP5223Y9SJ"


  },
  // apiUrl: 'http://localhost:8001',
  apiUrl: 'https://api.lokkl.com',
  URL_AWS: 'https://lokkl.s3.us-east-2.amazonaws.com',
  googleWebClientId: '776453831528-eslls2r19dj9eko7t8gr3il1uoq4artj.apps.googleusercontent.com'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
