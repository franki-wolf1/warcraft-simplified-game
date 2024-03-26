import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.css']
})
export class HeroInfoComponent implements OnInit {

  @Input() selectedHero: string = ''; // Héroe seleccionado por el jugador

  // Estadísticas y habilidades del héroe (puedes extender este modelo según tus necesidades)
  heroStats: any = {
    health: 1000,
    mana: 500,
    damage: 50,
    armor: 10
  };
  heroAbilities: string[] = ['Habilidad1', 'Habilidad2', 'Habilidad3']; // Lista de habilidades del héroe

  constructor() { }

  ngOnInit(): void {
  }

}
