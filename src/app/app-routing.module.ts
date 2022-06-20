import { NavbarComponent } from './components/navbar/navbar.component';
import { ListeEmployeesComponent } from './components/pages/employees/liste-employees/liste-employees.component';
import { RecrutementComponent } from './components/pages/employees/recrutement/recrutement.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'login',component:LoginComponent},
  {path:'listeEmployees',component:ListeEmployeesComponent},
  {path:'recrutement',component:RecrutementComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
