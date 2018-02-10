import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {TurnierComponent} from './turnier/turnier.component';
import {TurnierDetailComponent} from './turnier-detail/turnier-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TurnierComponent,
    TurnierDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
