import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-spielgruppe-leitung',
  styles: [
    `
      img {
        width: 100%;
        max-width: 300px;
        filter: brightness(80%);
      }
    `,
  ],
  templateUrl: './spielgruppe-leitung.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpielgruppeLeitungComponent {}
