import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpielgruppeComponent } from './spielgruppe.component';
import { SpielgruppeInfoComponent } from './spielgruppe-info/spielgruppe-info.component';
import { SpielgruppeOverviewComponent } from './spielgruppe-overview/spielgruppe-overview.component';
import { SpielgruppeLeitungComponent } from './spielgruppe-leitung/spielgruppe-leitung.component';
import { SpielgruppeOrtComponent } from './spielgruppe-ort/spielgruppe-ort.component';
import {SpielgruppeNewsletterComponent} from "./spielgruppe-newsletter/spielgruppe-newsletter.component";

const routes: Routes = [
  {
    path: '',
    component: SpielgruppeComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '', // child route path
        component: SpielgruppeOverviewComponent, // child route component that the router renders
      },
      {
        path: 'info',
        component: SpielgruppeInfoComponent, // another child route component that the router renders
      },
      {
        path: 'leitung',
        component: SpielgruppeLeitungComponent, // another child route component that the router renders
      },
      {
        path: 'ort',
        component: SpielgruppeOrtComponent, // another child route component that the router renders
      },
      {
        path: 'newsletter',
        component: SpielgruppeNewsletterComponent, // another child route component that the router renders
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpielgruppeRoutingModule {}
