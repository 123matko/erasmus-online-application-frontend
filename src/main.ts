import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGLrascb2El7UfkcPfYSHiXxx7-z7HpAE",
  authDomain: "erasmus-online-application.firebaseapp.com",
  projectId: "erasmus-online-application",
  storageBucket: "erasmus-online-application.appspot.com",
  messagingSenderId: "1085264843550",
  appId: "1:1085264843550:web:5fe45f324f2e17b86daf0f",
  measurementId: "G-CY6CHEMYGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);