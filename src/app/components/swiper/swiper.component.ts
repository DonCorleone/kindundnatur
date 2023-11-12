import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {
  Card,
  ImagesService,
  Netlifile,
} from 'src/app/services/images.service';
import {EMPTY, map, Observable, Subject, take, takeUntil} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {CommonModule} from '@angular/common';
import {environment} from "../../../environments/environment.custom";
import {register} from 'swiper/element/bundle';
import {SwiperDirective} from "../../directives/swiper.directive";
import {SwiperContainer} from "swiper/element";
import {SwiperOptions} from "swiper/types";

// Swiper
register();

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CommonModule, SwiperDirective],
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent implements OnInit, AfterViewInit {

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;

  files$: Observable<Netlifile[]> = EMPTY;

  private _ngDestroy$ = new Subject<void>();

  constructor(
    private imageService: ImagesService,
    private breakpointObserver: BreakpointObserver
  ) {
  }

  index = 0;

  // Swiper
  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    navigation: true,
  }

  swiperThumbsConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  }

  ngAfterViewInit() {
/*    this.swiper.nativeElement.swiper.activeIndex = this.index;
    this.swiperThumbs.nativeElement.swiper.activeIndex = this.index;

    this.swiper.nativeElement.addEventListener('swipe', (evt) => this.slideChange(evt));*/
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
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
            map(p => {
              p.forEach(
                (image) =>
                  (image.path = `${environment.URL}${image.path}?nf_resize=fit&w=${width}`)
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
