import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './shared/components/navbar/navbar';
import { HomePage } from './features/home/pages/home-page/home-page';
import { Footer } from './shared/components/footer/footer';
import { EquiposPage } from './features/equipos/pages/equipos-page/equipos-page';
import { JugadoresPage } from './features/jugadores/pages/jugadores-page/jugadores-page';

@NgModule({
  declarations: [
    App,
    Navbar,
    HomePage,
    Footer,
    EquiposPage,
    JugadoresPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
