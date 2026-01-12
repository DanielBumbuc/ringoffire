import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-2eca7","appId":"1:461366584638:web:3599baf310acd7d66e786f","storageBucket":"ring-of-fire-2eca7.firebasestorage.app","apiKey":"AIzaSyAsed9BDP-pToMt4tlAn0AxaqwkJX5GC7I","authDomain":"ring-of-fire-2eca7.firebaseapp.com","messagingSenderId":"461366584638","projectNumber":"461366584638","version":"2"})), provideFirestore(() => getFirestore())]
};
