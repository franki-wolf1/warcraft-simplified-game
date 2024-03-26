import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-mana-bar',
  templateUrl: './health-mana-bar.component.html',
  styleUrls: ['./health-mana-bar.component.css']
})
export class HealthManaBarComponent implements OnInit {

  @Input() health: number = 1000; // Salud actual del héroe
  @Input() maxHealth: number = 1000; // Salud máxima del héroe
  @Input() mana: number = 500; // Mana actual del héroe
  @Input() maxMana: number = 500; // Mana máximo del héroe

  constructor() { }

  ngOnInit(): void {
  }

}
