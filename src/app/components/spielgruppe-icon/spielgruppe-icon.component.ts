import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-spielgruppe-icon',
  standalone: true,
  templateUrl: './spielgruppe-icon.component.html',
  styleUrls: ['./spielgruppe-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpielgruppeIconComponent {
  @Input() hideTypeFont = false;
  @Input() isModuleIcon = false;
}
