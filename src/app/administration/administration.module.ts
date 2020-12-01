import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import {SidebarComponent} from "./components/home/sidebar/sidebar.component";
import {TopnavComponent} from "./components/home/topnav/topnav.component";
import {OverviewComponent} from "./components/overview/overview.component";


@NgModule({
  declarations: [
    AdministrationComponent,
    SidebarComponent,
    TopnavComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
