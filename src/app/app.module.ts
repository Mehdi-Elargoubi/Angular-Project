import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { LoginComponent } from './components/login/login.component';
import { ListeEmployeesComponent } from './components/pages/employees/liste-employees/liste-employees.component';
import { RecrutementComponent } from './components/pages/employees/recrutement/recrutement.component';
import { DepartComponent } from './components/pages/employees/depart/depart.component';
import { ProfileComponent } from './components/pages/employees/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    LoginComponent,
    ListeEmployeesComponent,
    RecrutementComponent,
    DepartComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
