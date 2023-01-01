import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import {DatePipe, registerLocaleData} from '@angular/common';
import localeCh from '@angular/common/locales/de-CH';
registerLocaleData(localeCh);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ScullyLibModule],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'de-CH' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
