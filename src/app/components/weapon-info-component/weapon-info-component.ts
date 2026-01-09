import { Component, computed, input } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { StatTableComponent } from "../stat-table-component/stat-table-component";
import { AmmoStats } from '../../model/ammo-stats';
import { DollarIcon } from "../dollar-icon/dollar-icon";
import { AmmoName } from '../../model/ammo-name'

@Component({
  selector: 'hunt-weapon-info-component',
  imports: [StatTableComponent, DollarIcon],
  templateUrl: './weapon-info-component.html',
  styleUrl: './weapon-info-component.scss',
})
export class WeaponInfoComponent {
  weapon = input.required<Weapon>()
  canChangeActiveAmmo = input<boolean>(false)

  ammoTypeSrc = computed(() => {
    switch (this.weapon().baseAmmo.info.name) {
      case AmmoName.COMPACT:
        return "ammo-icons/ammo_filter-compact.svg"
      case AmmoName.MEDIUM:
        return "ammo-icons/ammo_filter-medium.svg"
      case AmmoName.LONG:
        return "ammo-icons/ammo_filter-long.svg"
      default:
        return "ammo-icons/ammo_filter-special-ammo.svg"
    }
  })

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

  activateAmmo(ammo: AmmoStats) {
    if (!this.canChangeActiveAmmo()) {
      return
    }
    this.weapon().activeAmmo = ammo
  }
}
