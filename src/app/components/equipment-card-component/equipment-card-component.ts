import { Component, computed, input } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { DollarIcon } from "../dollar-icon/dollar-icon";

@Component({
  selector: 'hunt-equipment-card-component',
  imports: [DollarIcon],
  templateUrl: './equipment-card-component.html',
  styleUrl: './equipment-card-component.scss'
})
export class EquipmentCardComponent {
  weapon = input.required<Weapon>()

  sizeSrc = computed(() => {
    switch (this.weapon().size) {
      case 1:
        return "ammo-icons/ammo_filter-1-slot.svg"
      case 2:
        return "ammo-icons/ammo_filter-2-slot.svg"
      default: 
        return "ammo-icons/ammo_filter-3-slot.svg"
    }
  })
}
