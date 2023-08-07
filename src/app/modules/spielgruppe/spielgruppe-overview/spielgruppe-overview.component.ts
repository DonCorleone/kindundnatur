import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-spielgruppe-overview',
  styles: [
    `
      app-swiper {
        justify-content: center;
        flex-direction: row;
        display: flex;
      }
    `,
  ],
  templateUrl: './spielgruppe-overview.component.html',
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
