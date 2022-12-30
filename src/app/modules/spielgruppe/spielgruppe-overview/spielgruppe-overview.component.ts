import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-spielgruppe-overview',
  templateUrl: './spielgruppe-overview.component.html',
  styleUrls: ['./spielgruppe-overview.component.scss']
})
export class SpielgruppeOverviewComponent implements OnInit {
  semestername: string = '';
  semesterstart: Date = new Date();

  ngOnInit(): void {
    const semesterStartStr = environment.START_NEXT_SEMESTER;
    if (semesterStartStr){
      this.semesterstart = new Date(semesterStartStr);
      this.semestername = this.semesterstart.getMonth() < 5 ? 'Frühlingssemester' : 'Herbstsemester';
    }
  }
}

