import {ApplicationConfig, LOCALE_ID} from '@angular/core';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling
} from '@angular/router';

import {routes} from './app.routes';
import {bootstrapApplication, provideClientHydration} from '@angular/platform-browser';
import {provideHttpClient} from "@angular/common/http";
import {DatePipe, registerLocaleData} from "@angular/common";
import localeCh from '@angular/common/locales/de-CH';
import Swiper from "swiper";
import {SwiperDirective} from "./directives/swiper.directive";

registerLocaleData(localeCh);
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrollingFeature),
    provideClientHydration(), provideHttpClient(),
    DatePipe, {
      provide: LOCALE_ID,
      useValue: 'de-CH'
    },
    Swiper, provideClientHydration()],
};
