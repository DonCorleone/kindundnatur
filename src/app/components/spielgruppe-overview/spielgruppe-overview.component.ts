import {ChangeDetectionStrategy, Component, LOCALE_ID, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ContactFormComponent} from "../contact-form/contact-form.component";
import {SwiperComponent} from "../swiper/swiper.component";
import {DatePipe} from "@angular/common";
import {environment} from "../../../environments/environment.custom";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-spielgruppe-overview',
  standalone: true,
  imports: [SwiperComponent, RouterLink, ContactFormComponent, DatePipe],
  templateUrl: './spielgruppe-overview.component.html',
  styles: [
    `
      app-swiper {
        justify-content: center;
        flex-direction: row;
        display: flex;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpielgruppeOverviewComponent implements OnInit {
  semestername: string = '';
  semesterstart: string | null = '';
  constructor(private datePipe: DatePipe) {}
  ngOnInit(): void {
    const semesterStartStr = environment.START_NEXT_SEMESTER;
    if (semesterStartStr) {
      const semesterStartDate = new Date(semesterStartStr);
      if (semesterStartDate) {
        this.semesterstart = this.datePipe.transform(
          semesterStartDate,
          'fullDate',
          '+0200',
          'de-CH'
        );
        this.semestername =
          semesterStartDate.getMonth() < 5
            ? 'Frühlingssemester'
            : 'Herbstsemester';
      }
    }
  }
}
