import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
<<<<<<< HEAD
=======

>>>>>>> origin/main
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
<<<<<<< HEAD
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient()
=======
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
>>>>>>> origin/main
  ]
};
