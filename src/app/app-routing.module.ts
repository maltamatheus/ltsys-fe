import { A } from '@angular/cdk/keycodes';
import{NgModule}from'@angular/core';
import {RouterModule, Routes }from '@angular/router';

import { CursosComponent } from './src/app/components/cursos/cursos.component';
import { HomeComponent } from './src/app/components/home/home.component';
import { LoginComponent } from './src/app/components/login/login.component';

const APP_ROUTES: Routes = [
{path: 'cursos', component: CursosComponent},
{path: 'home', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: '', component: LoginComponent},
];

@NgModule({
imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
