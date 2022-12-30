import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {name: 'description', content:'Kind und Natur - die Indoor- und Outdoor-Spielgruppe in Luzern. Auf dem Tribschenhorn in Luzern. Für Kinder ab 3 bis 5 Jahre. Jeden Dienstag.'}
    ])
    this.setTitle('Kind und Natur - Home');
  }
  setTitle(newTitle: string){
    this.title.setTitle(newTitle);
  }
}
