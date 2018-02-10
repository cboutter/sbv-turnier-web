import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {TurnierComponent} from './turnier/turnier.component';
import {TurnierDetailComponent} from './turnier-detail/turnier-detail.component';
import {TurnierService} from './turnier.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    TurnierComponent,
    TurnierDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TurnierService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
