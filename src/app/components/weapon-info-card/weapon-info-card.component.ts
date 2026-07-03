import { Component, computed, input, model } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { AuxStatsComponent } from "../aux-stats/aux-stats.component";
import { AmmoSelectorComponent } from "../ammo-selector-component/ammo-selector-component";

@Component({
  selector: 'hunt-weapon-info-card',
  imports: [AuxStatsComponent, AmmoSelectorComponent],
  templateUrl: './weapon-info-card.component.html',
  styleUrl: './weapon-info-card.component.scss',
})
export class WeaponInfoCardComponent {
  weapon = model.required<Weapon>()
  titleSize = input<"small" | "large">("large")

  weaponTitleText = computed(() => `${this.weapon().name} ${this.weapon().activeAmmo !== this.weapon().baseAmmo ? this.weapon().activeAmmo.info.name : '' }`)
}
