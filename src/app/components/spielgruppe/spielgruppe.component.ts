import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
} from '@angular/core';
import {Location, NgIf} from '@angular/common';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {
  filter,
  Subject,
  takeUntil,
} from 'rxjs';
import { SeoService } from '../../services/seo.service';
import {HeaderComponent} from "../header/header.component";
import {SpielgruppeIconComponent} from "../spielgruppe-icon/spielgruppe-icon.component";
import {BackIconComponent} from "../back-icon/back-icon.component";

@Component({
  selector: 'app-spielgruppe',
  standalone: true,
  imports: [
    HeaderComponent,
    SpielgruppeIconComponent,
    BackIconComponent,
    RouterOutlet,
    RouterLink,
    NgIf
  ],
  templateUrl: './spielgruppe.component.html',
  styleUrls: ['./spielgruppe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpielgruppeComponent implements OnDestroy {
  home: boolean = false;

  private _ngDestroy$ = new Subject<void>();

  constructor(
    private location: Location,
    private router: Router,
    private seoService: SeoService
  ) {
    this.home = this.router.url === '/';
    router.events
      .pipe(
        takeUntil(this._ngDestroy$),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((x) => {
        this.seoService.setDescription(
          'Kind und Natur - die Indoor- und Outdoor-Spielgruppe in Luzern. Auf dem Tribschenhorn in Luzern. Für Kinder ab 3 bis 5 Jahre. Jeden Dienstag.',
          (x as NavigationEnd).url
        );
        this.seoService.setTitle('Kind und Natur', (x as NavigationEnd).url);

        this.home = (x as NavigationEnd).url === '/';
      });
  }
  back(): void {
    if (this.router.url === '/') {
      this.location.back();
    } else {
      this.location.back();
    }
  }
  ngOnDestroy() {
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
