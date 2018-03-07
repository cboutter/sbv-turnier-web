import {Component, OnInit} from '@angular/core';
import {Disziplin} from "../meldungen/disziplin";
import {Ranglisteneintrag} from "./ranglisteneintrag";
import {RanglisteService} from "./rangliste.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-rangliste',
  templateUrl: './rangliste.component.html',
  styleUrls: ['./rangliste.component.css']
})
export class RanglisteComponent implements OnInit {

  disziplin: Disziplin;
  datasource: Ranglisteneintrag[];
  displayedColumns = ['position', 'name', 'vorname', 'club', 'placement1', 'placement2', 'placement3',
    'points1', 'points2', 'points3', 'points_overall'];

  constructor(private ranglisteService: RanglisteService, private spinner: NgxSpinnerService) {
    this.disziplin = Disziplin.DE;
  }

  getRangliste(): void {
    this.spinner.show();
    this.ranglisteService.getRangliste(this.disziplin).subscribe(r => {
      this.datasource = r;
      this.spinner.hide();
    });
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 10000);
  }

  ngOnInit() {
    this.getRangliste();
  }

  onChange(newDisz: Disziplin) {
    this.disziplin = newDisz;
    this.getRangliste();
  }

}
