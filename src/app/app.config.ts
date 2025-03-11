import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headerReqInterceptor } from './core/interceptors/header-req.interceptor';
import { errorResInterceptor } from './core/interceptors/error-res.interceptor';
import { lodingInterceptor } from './core/interceptors/loding.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    provideHttpClient(withFetch(),withInterceptors([headerReqInterceptor,errorResInterceptor,lodingInterceptor])),
    importProvidersFrom(BrowserAnimationsModule,NgxSpinnerModule),
    provideToastr()
  ],
};
