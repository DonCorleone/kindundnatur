import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SeoService} from "./services/seo.service";
import {NavigationEnd, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(private seoService: SeoService) {

    this.seoService.setDescription(
      'Kind und Natur - die Indoor- und Outdoor-Spielgruppe in Luzern. Auf dem Tribschenhorn in Luzern. Für Kinder ab 3 bis 5 Jahre. Jeden Dienstag.', '/'
    );
    this.seoService.setTitle('Kind und Natur', '/');
  }
}
