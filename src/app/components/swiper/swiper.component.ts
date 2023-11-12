import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  ImagesService,
  Netlifile,
} from 'src/app/services/images.service';
import { EMPTY, map, Observable, Subject, take, takeUntil } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {environment} from "../../../environments/environment.custom";

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent implements OnInit, AfterViewInit {

  @ViewChild('swiper-container') swiperContainer!: ElementRef;
  files$: Observable<Netlifile[]> = EMPTY;

  private _ngDestroy$ = new Subject<void>();

  constructor(
    private imageService: ImagesService,
    private breakpointObserver: BreakpointObserver
  ) {}
  ngAfterViewInit(): void {
    this.files$.pipe(take(1)).subscribe((p) => {
      // swiper parameters
      const swiperParams = {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        spaceBetween: 30,
      };

      const swiperEl: any = document.querySelector('swiper-container');

      Object.assign(swiperEl, swiperParams);
      // const swiper = new Swiper(this.swiperContainer.nativeElement, swiperParams);
      swiperEl.initialize();
    });
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this._ngDestroy$))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            const match = query.match('\\(max-width:\\s(\\d+)\\.98px\\)');
            const width = match?.length ? match[1] : '2048';

            this.files$ = this.imageService.listAssets().pipe(
              map((p) => {
                p.forEach(
                  (image) =>
                    (image.path = `${environment.URL}${image.path}?nf_resize=smartcrop&w=600&h=450`)
                );
                return p;
              })
            );
            break;
          }
        }
      });
  }
}
