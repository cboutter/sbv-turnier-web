import {Component, OnInit} from '@angular/core';
import {Turnier} from './turnier';

@Component({
  selector: 'app-turnier',
  templateUrl: './turnier.component.html',
  styleUrls: ['./turnier.component.css']
})
export class TurnierComponent implements OnInit {

  turnier: Turnier = {id: 1, name: 'SM 2017'};

  constructor() {
  }

  ngOnInit() {
  }

}
