import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path:'', component: LoginComponent},
  { path: 'admin', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
