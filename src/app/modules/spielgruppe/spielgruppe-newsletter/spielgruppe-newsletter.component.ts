import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-spielgruppe-newsletter',
  templateUrl: './spielgruppe-newsletter.component.html',
  styles: [
    `
      .contactform {
        grid-template-columns: auto 1fr;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpielgruppeNewsletterComponent {}
