import {Routes} from "@angular/router";
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import("./components/spielgruppe/spielgruppe.component").then((c) => c.SpielgruppeComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import("./components/spielgruppe-overview/spielgruppe-overview.component").then((c) => c.SpielgruppeOverviewComponent),
      },
      {
        path: 'info',
        loadComponent: () =>
          import("./components/spielgruppe-info/spielgruppe-info.component").then((c) => c.SpielgruppeInfoComponent) // another child route component that the router renders
      },
      {
        path: 'leitung',
        loadComponent: () =>
          import("./components/spielgruppe-leitung/spielgruppe-leitung.component").then((c) => c.SpielgruppeLeitungComponent) // another child route component that the router renders
      }, {
        path: 'leitungEvamaria',
        loadComponent: () =>
          import("./components/spielgruppe-leitung-evamaria/spielgruppe-leitung-evamaria.component").then((c) => c.SpielgruppeLeitungEvamariaComponent) // another child route component that the router renders
      },
      {
        path: 'ort',
        loadComponent: () =>
          import("./components/spielgruppe-ort/spielgruppe-ort.component").then((c) => c.SpielgruppeOrtComponent) // another child route component that the router renders
      },
      {
        path: 'newsletter',
        loadComponent: () =>
          import("./components/spielgruppe-newsletter/spielgruppe-newsletter.component").then((c) => c.SpielgruppeNewsletterComponent), // another child route component that the router renders
      },
      {
        path: 'contact',
        loadComponent: () =>
          import("./components/contact-form/contact-form.component").then((c) => c.ContactFormComponent), // another child route component that the router renders
      },
      {
        path: 'success',
        loadComponent: () =>
          import("./components/success/success.component").then((c) => c.SuccessComponent), // another child route component that the router renders
      },
    ],
  },
];
