import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TurnierComponent} from './turnier/turnier.component';

const routes: Routes = [
  {path: 'turniere', component: TurnierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
