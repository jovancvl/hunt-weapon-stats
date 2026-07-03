import { Component, computed, input } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { AmmoName } from '../../model/ammo-name';
import { DollarIcon } from "../dollar-icon/dollar-icon";

@Component({
  selector: 'hunt-aux-stats',
  imports: [DollarIcon],
  templateUrl: './aux-stats.component.html',
  styleUrl: './aux-stats.component.scss',
})
export class AuxStatsComponent {
  weapon = input.required<Weapon>();

  ammoTypeSrc = computed(() => {
    switch (this.weapon().baseAmmo.info.name) {
      case AmmoName.COMPACT:
        return "ammo-icons/ammo_filter-compact.svg";
      case AmmoName.MEDIUM:
        return "ammo-icons/ammo_filter-medium.svg";
      case AmmoName.LONG:
        return "ammo-icons/ammo_filter-long.svg";
      default:
        return "ammo-icons/ammo_filter-special-ammo.svg";
    }
  });

  sizeSrc = computed(() => {
    if (this.weapon().size > 0 && this.weapon().size < 6) {
      return `ammo-icons/ammo_filter-${this.weapon().size}-slot.svg`;
    } else {
      return `ammo-icons/ammo_filter-5-slot.svg`;
    }
  });
}
