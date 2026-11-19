import { Component } from '@angular/core';

@Component({
  selector: 'app-equipos-page',
  standalone: false,
  templateUrl: './equipos-page.html',
  styleUrl: './equipos-page.scss',
})
export class EquiposPage {
equipos = [
    {
      nombre: 'Los Halcones',
      competicion: 'futbol',
      curso: '2º DAW',
      capitan: 'Pablo García'
    },
    {
      nombre: 'Canasta Java',
      competicion: 'baloncesto',
      curso: '2º DAM',
      capitan: 'Hugo Pérez'
    },
    {
      nombre: 'Pívot Python',
      competicion: 'balonmano',
      curso: '1º DAM',
      capitan: 'Iván Moreno'
    },
    {
      nombre: 'Remate Web',
      competicion: 'voleibol',
      curso: '2º DAW',
      capitan: 'Adrián Torres'
    }
  ];
}
