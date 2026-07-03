import { Component, computed, input, model } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { AmmoStats } from '../../model/ammo-stats';

@Component({
  selector: 'hunt-ammo-selector',
  imports: [],
  templateUrl: './ammo-selector-component.html',
  styleUrl: './ammo-selector-component.scss',
})
export class AmmoSelectorComponent {
  weapon = model.required<Weapon>();

  sizeSrc = computed(() => {
    if (this.weapon().size > 0 && this.weapon().size < 6) {
      return `ammo-icons/ammo_filter-${this.weapon().size}-slot.svg`;
    } else {
      return `ammo-icons/ammo_filter-5-slot.svg`;
    }
  });

  activateAmmo(ammo: AmmoStats) {
    this.weapon.update(w => {
      w.activeAmmo = ammo
      return w
    })
  }
}
