import { Component } from '@angular/core';

@Component({
  selector: 'hunt-equipment-card-component',
  imports: [],
  templateUrl: './equipment-card-component.html',
  styleUrl: './equipment-card-component.scss'
})
export class EquipmentCardComponent {
  cost = (Math.random() * 100).toFixed(0)
}
