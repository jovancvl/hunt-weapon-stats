import { Component, computed, input } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { AmmoStats } from '../../model/ammo-stats'

@Component({
  selector: 'hunt-hunter-body-component',
  imports: [],
  templateUrl: './hunter-body-component.html',
  styleUrl: './hunter-body-component.scss'
})
export class HunterBodyComponent  {
  ammo = input.required<AmmoStats>()
  range = input.required<number>()

  chest = computed(() => Math.floor(this.ammo().calculateDamage(this.range()).chest))
  cock = computed(() => Math.floor(this.ammo().calculateDamage(this.range()).cock))
  arms = computed(() => Math.floor(this.ammo().calculateDamage(this.range()).arms))
  legs = computed(() => Math.floor(this.ammo().calculateDamage(this.range()).legs))
}
