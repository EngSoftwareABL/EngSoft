import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReservaVeiculoComponent } from './reserva-veiculos/reserva-veiculos.component';
import { ListaVeiculosComponent } from './lista-veiculos/lista-veiculos.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{path: "", redirectTo: "/login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "app", component: HomeComponent},
  {path: "reserva", component: ReservaVeiculoComponent},
  {path: "lista", component: ListaVeiculosComponent},
  {path: "dashboard", component: DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
