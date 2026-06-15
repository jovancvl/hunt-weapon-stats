import { Component, computed, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { DollarIcon } from "../dollar-icon/dollar-icon";

@Component({
  selector: 'hunt-equipment-card-component',
  imports: [DollarIcon],
  templateUrl: './equipment-card-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './equipment-card-component.scss'
})
export class EquipmentCardComponent {
  weapon = input.required<Weapon>()
  active = input<boolean>(false)
  onDetailsClick = output()

  sizeSrc = computed(() => {
    const size = this.weapon().size
    if (size > 0 || size <= 5) {
      return `ammo-icons/ammo_filter-${size}-slot.svg`
    } else {
      return 'ammo-icons/ammo_filter-1-slot.svg'
    }
  })

  goToDetails() {
    this.onDetailsClick.emit()
  }
}
