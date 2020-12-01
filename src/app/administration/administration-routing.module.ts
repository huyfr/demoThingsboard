import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdministrationComponent} from './administration.component';
import {OverviewComponent} from "./components/overview/overview.component";

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: 'overview', component: OverviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
