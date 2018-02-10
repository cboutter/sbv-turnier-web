import {Component, OnInit, Input} from '@angular/core';
import {Turnier} from '../turnier/turnier';

@Component({
  selector: 'app-turnier-detail',
  templateUrl: './turnier-detail.component.html',
  styleUrls: ['./turnier-detail.component.css']
})
export class TurnierDetailComponent implements OnInit {

  @Input() turnier: Turnier;

  constructor() {
  }

  ngOnInit() {
  }

}
