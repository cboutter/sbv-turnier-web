import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SBV Rangliste';
  admin = false;

  constructor(private route: ActivatedRoute) {
    console.log(route);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.admin = params['admin'];
    });
  }
}
