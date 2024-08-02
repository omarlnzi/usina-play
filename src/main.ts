import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'usina-play-9c621',
        appId: '1:848533731603:web:4742fea2ecff866a17c2e6',
        storageBucket: 'usina-play-9c621.appspot.com',
        apiKey: 'AIzaSyD3dascwGVDJ8MCPIMbwSv1X9838RMVgmQ',
        authDomain: 'usina-play-9c621.firebaseapp.com',
        messagingSenderId: '848533731603',
        measurementId: 'G-5LPGZFXBE5',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
});
