import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdministrationComponent} from './administration.component';
import {OverviewComponent} from "./components/overview/overview.component";
import {DevicesComponent} from "./components/devices/devices.component";
import {AddDeviceComponent} from "./components/devices/add-device/add-device.component";
import {DetailsDeviceComponent} from "./components/devices/details-device/details-device.component";

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {path: 'overview', component: OverviewComponent},
      {path: 'devices', component: DevicesComponent},
      {path: 'add-device', component: AddDeviceComponent},
      {path: 'details/:deviceId', component: DetailsDeviceComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
