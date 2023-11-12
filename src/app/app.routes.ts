import { Routes } from "@angular/router";
import {SpielgruppeComponent} from "./components/spielgruppe/spielgruppe.component";
import {SpielgruppeOverviewComponent} from "./components/spielgruppe-overview/spielgruppe-overview.component";
import {SpielgruppeInfoComponent} from "./components/spielgruppe-info/spielgruppe-info.component";
import {SpielgruppeLeitungComponent} from "./components/spielgruppe-leitung/spielgruppe-leitung.component";
import {
  SpielgruppeLeitungEvamariaComponent
} from "./components/spielgruppe-leitung-evamaria/spielgruppe-leitung-evamaria.component";
import {SpielgruppeOrtComponent} from "./components/spielgruppe-ort/spielgruppe-ort.component";
import {SpielgruppeNewsletterComponent} from "./components/spielgruppe-newsletter/spielgruppe-newsletter.component";
import {ContactFormComponent} from "./components/contact-form/contact-form.component";
import {SuccessComponent} from "./components/success/success.component";

export const routes: Routes = [
  {
    path: "about",
    loadComponent: () =>
      import("./components/spielgruppe/spielgruppe.component").then((m) => m.SpielgruppeComponent),
  }, {path: '',
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
      },{
        path: 'leitungEvamaria',
        component: SpielgruppeLeitungEvamariaComponent, // another child route component that the router renders
      },
      {
        path: 'ort',
        component: SpielgruppeOrtComponent, // another child route component that the router renders
      },
      {
        path: 'newsletter',
        component: SpielgruppeNewsletterComponent, // another child route component that the router renders
      },
      {
        path: 'contact',
        component: ContactFormComponent, // another child route component that the router renders
      },
      {
        path: 'success',
        component: SuccessComponent, // another child route component that the router renders
      },
    ],
  },
];
