import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-selection',
  templateUrl: './hero-selection.component.html',
  styleUrls: ['./hero-selection.component.css']
})
export class HeroSelectionComponent implements OnInit {

  availableHeroes: string[] = ['Heroe1', 'Heroe2', 'Heroe3']; // Lista de héroes disponibles
  selectedHero: string = ''; // Héroe seleccionado por el jugador

  constructor() { }

  ngOnInit(): void {
  }

  selectHero(hero: string): void {
    this.selectedHero = hero; // Asignar el héroe seleccionado
    // Aquí podrías realizar acciones adicionales, como pasar el héroe seleccionado al servicio del juego, etc.
  }

}
