import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-back-icon',
  templateUrl: './back-icon.component.html',
  styleUrls: ['./back-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackIconComponent {
  @Input() @HostBinding('class.spielgruppe-bg-color') public isSpielgruppe =
    false;
}
