import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-spielgruppe-leitung-evamaria',
  styles: [
    `
      img {
        width: 100%;
        max-width: 300px;
        filter: brightness(80%);
      }
    `,
  ],
  templateUrl: './spielgruppe-leitung-evamaria.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpielgruppeLeitungEvamariaComponent {}
