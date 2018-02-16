///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {MeldungenService} from '../meldungen.service';
import {Disziplin} from './disziplin';

@Component({
  selector: 'app-meldungen',
  templateUrl: './meldungen.component.html',
  styleUrls: ['./meldungen.component.css']
})
export class MeldungenComponent implements OnInit {
  keys: string[];

  disziplinen = Disziplin;

  constructor(private meldungenService: MeldungenService) {
    this.keys = Object.keys(this.disziplinen).filter(String);
  }

  ngOnInit() {
  }

}
