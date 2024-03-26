import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-shop',
  templateUrl: './item-shop.component.html',
  styleUrls: ['./item-shop.component.css']
})
export class ItemShopComponent implements OnInit {

  availableItems: string[] = ['Item1', 'Item2', 'Item3']; // Lista de ítems disponibles
  selectedItem: string = ''; // Ítem seleccionado por el jugador

  constructor() { }

  ngOnInit(): void {
  }

  purchaseItem(item: string): void {
    this.selectedItem = item; // Asignar el ítem seleccionado
    // Aquí podrías realizar acciones adicionales, como pasar el ítem seleccionado al servicio del juego, etc.
  }

}
