import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import {SidebarComponent} from "./components/home/sidebar/sidebar.component";
import {TopnavComponent} from "./components/home/topnav/topnav.component";
import {OverviewComponent} from "./components/overview/overview.component";
import { DevicesComponent } from './components/devices/devices.component';
import {AddDeviceComponent} from "./components/devices/add-device/add-device.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdministrationComponent,
    SidebarComponent,
    TopnavComponent,
    OverviewComponent,
    DevicesComponent,
    AddDeviceComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdministrationModule { }
