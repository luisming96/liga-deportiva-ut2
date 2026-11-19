import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { EquiposPage } from './features/equipos/pages/equipos-page/equipos-page';
import { JugadoresPage } from './features/jugadores/pages/jugadores-page/jugadores-page';


const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'equipos', component: EquiposPage },
  { path: 'jugadores', component: JugadoresPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
