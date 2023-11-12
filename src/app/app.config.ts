import {ApplicationConfig, LOCALE_ID} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideHttpClient} from "@angular/common/http";
import {DatePipe, registerLocaleData} from "@angular/common";
import localeCh from '@angular/common/locales/de-CH';
import Swiper from "swiper";


registerLocaleData(localeCh);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(), DatePipe, {
    provide: LOCALE_ID,
    useValue: 'de-CH'
  }, Swiper]
};
