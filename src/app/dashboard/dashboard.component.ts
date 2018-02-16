import {Component, OnInit} from '@angular/core';
import {Turnier} from '../turnier/turnier';
import {TurnierService} from '../turnier.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  turniere: Turnier[] = [];

  constructor(private turnierService: TurnierService) {
  }

  ngOnInit() {
    this.getTurniere();
  }

  getTurniere(): void {
    this.turnierService.getTurniere()
      .subscribe(t => this.turniere = t.slice(0, 3));
  }
}
