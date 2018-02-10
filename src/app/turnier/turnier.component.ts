import {Component, OnInit} from '@angular/core';
import {Turnier} from './turnier';
import {TurnierService} from '../turnier.service';

@Component({
  selector: 'app-turnier',
  templateUrl: './turnier.component.html',
  styleUrls: ['./turnier.component.css']
})
export class TurnierComponent implements OnInit {

  turniere: Turnier[];

  constructor(private turnierService: TurnierService) {
  }

  getTurniere(): void {
    this.turnierService.getTurniere().subscribe(t => this.turniere = t);
  }

  ngOnInit() {
    this.getTurniere();
  }

}
