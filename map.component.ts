import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  // Definir las ubicaciones de los héroes y bestias neutrales
  heroesLocations: any[] = [];
  neutralLocations: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Obtener las ubicaciones de los héroes y bestias neutrales del servicio o de la lógica del juego
    // Ejemplo:
    this.heroesLocations = [
      { name: 'Heroe1', x: 100, y: 150 },
      { name: 'Heroe2', x: 200, y: 250 },
      // Agregar más ubicaciones de héroes según sea necesario
    ];

    this.neutralLocations = [
      { name: 'Bestia1', x: 300, y: 350 },
      { name: 'Bestia2', x: 400, y: 450 },
      // Agregar más ubicaciones de bestias neutrales según sea necesario
    ];
  }

}
