import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { SpielgruppeRoutingModule } from './spielgruppe-routing.module';
import { SpielgruppeComponent } from './spielgruppe.component';
import { SharedModule } from '../shared/shared.module';
import { SpielgruppeInfoComponent } from './spielgruppe-info/spielgruppe-info.component';
import { SpielgruppeLeitungComponent } from './spielgruppe-leitung/spielgruppe-leitung.component';
import { SpielgruppeOrtComponent } from './spielgruppe-ort/spielgruppe-ort.component';
import { SpielgruppeNewsletterComponent } from './spielgruppe-newsletter/spielgruppe-newsletter.component';
import {
  SpielgruppeLeitungEvamariaComponent
} from "./spielgruppe-leitung-evamaria/spielgruppe-leitung-evamaria.component";

@NgModule({
  declarations: [
    SpielgruppeComponent,
    SpielgruppeInfoComponent,
    SpielgruppeLeitungComponent,
    SpielgruppeLeitungEvamariaComponent,
    SpielgruppeOrtComponent,
    SpielgruppeNewsletterComponent,
  ],
  imports: [CommonModule, SpielgruppeRoutingModule, SharedModule, NgOptimizedImage],
})
export class SpielgruppeModule {}
