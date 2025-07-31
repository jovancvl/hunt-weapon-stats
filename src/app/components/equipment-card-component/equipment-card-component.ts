import { Component, input } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';

@Component({
  selector: 'hunt-equipment-card-component',
  imports: [],
  templateUrl: './equipment-card-component.html',
  styleUrl: './equipment-card-component.scss'
})
export class EquipmentCardComponent {
  weapon = input.required<Weapon>()
}
