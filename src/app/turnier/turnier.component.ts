import {Component, OnInit} from '@angular/core';
import {Turnier} from './turnier';
import {TURNIERE} from '../mock-turniere';

@Component({
  selector: 'app-turnier',
  templateUrl: './turnier.component.html',
  styleUrls: ['./turnier.component.css']
})
export class TurnierComponent implements OnInit {

  turniere = TURNIERE;
  selectedTurnier: Turnier;

  constructor() {
  }

  onSelect(turnier: Turnier): void {
    this.selectedTurnier = turnier;
  }

  ngOnInit() {
  }

}
