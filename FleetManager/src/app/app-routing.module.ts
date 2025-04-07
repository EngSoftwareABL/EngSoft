import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReservaVeiculosComponent } from './reserva-veiculos/reserva-veiculos.component';
import { ListaVeiculosComponent } from './lista-veiculos/lista-veiculos.component';

const routes: Routes = [{path: "", redirectTo: "/login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "app", component: HomeComponent},
  {path: "reserva", component: ReservaVeiculosComponent},
  {path: "lista", component: ListaVeiculosComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
