import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpielgruppeRoutingModule } from './spielgruppe-routing.module';
import { SpielgruppeComponent } from './spielgruppe.component';
import { SharedModule } from '../shared/shared.module';
import { SpielgruppeInfoComponent } from './spielgruppe-info/spielgruppe-info.component';
import { SpielgruppeOverviewComponent } from './spielgruppe-overview/spielgruppe-overview.component';
import { SpielgruppeLeitungComponent } from './spielgruppe-leitung/spielgruppe-leitung.component';
import { SpielgruppeOrtComponent } from './spielgruppe-ort/spielgruppe-ort.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SpielgruppeNewsletterComponent } from './spielgruppe-newsletter/spielgruppe-newsletter.component';
import {
  SpielgruppeLeitungEvamariaComponent
} from "./spielgruppe-leitung-evamaria/spielgruppe-leitung-evamaria.component";

@NgModule({
  declarations: [
    SpielgruppeComponent,
    SpielgruppeInfoComponent,
    SpielgruppeOverviewComponent,
    SpielgruppeLeitungComponent,
    SpielgruppeLeitungEvamariaComponent,
    SpielgruppeOrtComponent,
    ContactFormComponent,
    SpielgruppeNewsletterComponent,
  ],
  imports: [CommonModule, SpielgruppeRoutingModule, SharedModule],
})
export class SpielgruppeModule {}
