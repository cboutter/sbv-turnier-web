import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TurnierComponent} from './turnier/turnier.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TurnierDetailComponent} from './turnier-detail/turnier-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'turniere', component: TurnierComponent},
  {path: 'turnier/:id', component: TurnierDetailComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
