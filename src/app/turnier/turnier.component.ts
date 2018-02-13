import {Component, OnInit} from '@angular/core';
import {Turnier} from './turnier';
import {TurnierService} from '../turnier.service';
import {Observable} from 'rxjs/Observable';

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

  createNew(): void {
    const newTurnier = new Turnier(-1, 'Platzhalter', null, null, null);
    this.turnierService.save(newTurnier).subscribe(
      data => {
        console.log(`created turnier ${data}`);
        this.getTurniere();
      },
      error => {
        console.error('Error creating Turnier!');
        return Observable.throw(error);
      });
  }
}
