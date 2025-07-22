import { Component } from '@angular/core';

@Component({
  selector: 'hunt-equipment-card',
  imports: [],
  templateUrl: './equipment-card.html',
  styleUrl: './equipment-card.scss'
})
export class EquipmentCard {
  cost = (Math.random() * 100).toFixed(0)
}
