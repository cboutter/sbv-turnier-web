import {Component, OnInit} from '@angular/core';
import {Disziplin} from "../meldungen/disziplin";

@Component({
  selector: 'app-rangliste',
  templateUrl: './rangliste.component.html',
  styleUrls: ['./rangliste.component.css']
})
export class RanglisteComponent implements OnInit {

  disziplin: Disziplin;

  constructor() {
    this.disziplin = Disziplin.DE;
  }

  ngOnInit() {
  }

}
