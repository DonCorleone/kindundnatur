import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import {
  BehaviorSubject,
  EMPTY,
  filter,
  Observable,
  of,
  Subject,
  takeUntil,
} from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-spielgruppe',
  templateUrl: './spielgruppe.component.html',
  styleUrls: ['./spielgruppe.component.scss'],
})
export class SpielgruppeComponent implements OnInit, OnDestroy {
  home: boolean = false;

  private _ngDestroy$ = new Subject<void>();

  constructor(
    private location: Location,
    private router: Router,
    private meta: Meta,
    private title: Title
  ) {}
  back(): void {
    if (this.router.url === '/') {
      this.location.back();
    } else {
      this.location.back();
    }
  }

  ngOnInit(): void {
    this.home = this.router.url === '/';
    this.router.events
      .pipe(
        takeUntil(this._ngDestroy$),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((x) => {
        this.setDescription(
          'Kind und Natur - die Indoor- und Outdoor-Spielgruppe in Luzern. Auf dem Tribschenhorn in Luzern. Für Kinder ab 3 bis 5 Jahre. Jeden Dienstag.',
          (x as NavigationEnd).url
        );
        this.setTitle('Kind und Natur', (x as NavigationEnd).url);

        this.home = (x as NavigationEnd).url === '/';
      });
  }

  setTitle(newTitle: string, postfix: string) {
    const postfixStripped = postfix == '/' ? 'Home' : postfix.replace('/', '');
    this.title.setTitle(`${newTitle} - ${postfixStripped}`);
  }

  setDescription(newDescription: string, prefix: string) {

    const prefixStripped = prefix == '/' ? 'Home' : prefix.replace('/', '');
    this.meta.addTags([
      {
        name: 'description',
        content: `${prefixStripped} : ${newDescription}`
      },
    ]);
  }

  ngOnDestroy() {
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
