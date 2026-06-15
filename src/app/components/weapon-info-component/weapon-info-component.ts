import { Component, computed, input, ChangeDetectionStrategy } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { StatTableComponent } from "../stat-table-component/stat-table-component";
import { AmmoStats } from '../../model/ammo-stats';
import { DollarIcon } from "../dollar-icon/dollar-icon";
import { AmmoName } from '../../model/ammo-name'

@Component({
  selector: 'hunt-weapon-info-component',
  imports: [StatTableComponent, DollarIcon],
  templateUrl: './weapon-info-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
    if (this.weapon().size > 0 && this.weapon().size < 6) {
      return `ammo-icons/ammo_filter-${this.weapon().size}-slot.svg`
    } else {
      return `ammo-icons/ammo_filter-5-slot.svg`
    }
  })

  activateAmmo(ammo: AmmoStats) {
    if (!this.canChangeActiveAmmo()) {
      return
    }
    this.weapon().activeAmmo = ammo
  }
}
