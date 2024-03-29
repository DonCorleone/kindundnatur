import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {
  ImagesService,
  Netlifile,
} from 'src/app/services/images.service';
import {EMPTY, map, Observable, Subject, takeUntil} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {CommonModule, NgOptimizedImage} from '@angular/common';
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
  imports: [CommonModule, SwiperDirective, NgOptimizedImage],
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent implements OnInit {

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  files$: Observable<Netlifile[]> = EMPTY;
  width= 0;
  height= 0;

  private _ngDestroy$ = new Subject<void>();

  constructor(
    private imageService: ImagesService,
    private breakpointObserver: BreakpointObserver
  ) {
  }

  // Swiper
  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    navigation: true,
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
            this.width = +(match?.length ? match[1] : '2048');
            this.height = 3/4*this.width;
            this.files$ = this.imageService.listAssets().pipe(
            map(p => {
              p.forEach(
                (image) =>
                  (image.path = `${environment.URL}${image.path}?nf_resize=smartcrop&w=${this.width}&h=${Math.round(this.height)}`)
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
