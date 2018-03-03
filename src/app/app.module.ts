import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule,
  MatSelectModule, MatTableModule
} from '@angular/material';


import { AppComponent } from './app.component';
import {TurnierComponent} from './turnier/turnier.component';
import {TurnierDetailComponent} from './turnier-detail/turnier-detail.component';
import {TurnierService} from './turnier.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MeldungenComponent} from './meldungen/meldungen.component';
import {MeldungenService} from './meldungen.service';
import {RanglisteComponent} from './rangliste/rangliste.component';
import {RanglisteService} from "./rangliste/rangliste.service";


@NgModule({
  declarations: [
    AppComponent,
    TurnierComponent,
    TurnierDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MeldungenComponent,
    RanglisteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [TurnierService, RanglisteService, MessageService, MeldungenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
