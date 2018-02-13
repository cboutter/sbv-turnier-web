import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Turnier} from '../turnier/turnier';
import {TurnierService} from '../turnier.service';

@Component({
  selector: 'app-turnier-detail',
  templateUrl: './turnier-detail.component.html',
  styleUrls: ['./turnier-detail.component.css']
})
export class TurnierDetailComponent implements OnInit {

  @Input() turnier: Turnier;

  constructor(private route: ActivatedRoute,
              private turnierService: TurnierService,
              private location: Location) {
  }

  ngOnInit() {
    this.getTurnier();
  }

  getTurnier(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.turnierService.getTurnier(id)
      .subscribe(t => this.turnier = t);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.turnierService.save(this.turnier).subscribe(t => this.turnier = t);
  }

}
