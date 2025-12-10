import { Component, input } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';

@Component({
  selector: 'hunt-compare-equipment-card-component',
  imports: [],
  templateUrl: './compare-equipment-card-component.html',
  styleUrl: './compare-equipment-card-component.scss',
})
export class CompareEquipmentCardComponent {
  weapon = input.required<Weapon>()
}
