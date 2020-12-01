import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdministrationComponent} from './administration.component';
import {OverviewComponent} from "./components/overview/overview.component";
import {DevicesComponent} from "./components/devices/devices.component";

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {path: 'overview', component: OverviewComponent},
      {path: 'devices', component: DevicesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
