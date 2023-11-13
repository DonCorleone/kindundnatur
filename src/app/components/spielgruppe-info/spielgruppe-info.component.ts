import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-spielgruppe-info',
  templateUrl: './spielgruppe-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class SpielgruppeInfoComponent {}
