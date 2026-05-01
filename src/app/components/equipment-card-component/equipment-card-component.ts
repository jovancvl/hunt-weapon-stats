import { Component, computed, input, output } from '@angular/core';
import { DollarIcon } from "../dollar-icon/dollar-icon";
import { Weapon } from '../../model/v2/weapon';

@Component({
  selector: 'hunt-equipment-card-component',
  imports: [DollarIcon],
  templateUrl: './equipment-card-component.html',
  styleUrl: './equipment-card-component.scss'
})
export class EquipmentCardComponent {
  weapon = input.required<Weapon>()
  active = input<boolean>(false)
  onDetailsClick = output()

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

  goToDetails() {
    this.onDetailsClick.emit()
  }
}
