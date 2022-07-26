import {Component, OnDestroy, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import {BehaviorSubject, EMPTY, filter, Observable, of, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-spielgruppe',
  templateUrl: './spielgruppe.component.html',
  styleUrls: ['./spielgruppe.component.scss'],
})
export class SpielgruppeComponent implements OnInit, OnDestroy {
  home: boolean = false;

  private _ngDestroy$ = new Subject<void>();

  constructor(private location: Location, private router: Router) {}
  back(): void {
    if (this.router.url === '/') {
      this.location.back();
    } else {
      this.location.back();
    }
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
      takeUntil(this._ngDestroy$),
      filter((event) => event instanceof NavigationEnd))
      .subscribe((x) => {
        this.home = (x as NavigationEnd).url === '/';
      });
  }

  ngOnDestroy() {
    this._ngDestroy$.next();
    this._ngDestroy$.complete();
  }
}
