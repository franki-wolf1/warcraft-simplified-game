import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.css']
})
export class OptionsMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  exitGame(): void {
    // Aquí puedes implementar la lógica para salir del juego
    console.log('Saliendo del juego...');
  }

  restartGame(): void {
    // Aquí puedes implementar la lógica para reiniciar el juego
    console.log('Reiniciando el juego...');
  }

  adjustSettings(): void {
    // Aquí puedes implementar la lógica para ajustar las configuraciones del juego
    console.log('Ajustando configuraciones...');
  }

}
