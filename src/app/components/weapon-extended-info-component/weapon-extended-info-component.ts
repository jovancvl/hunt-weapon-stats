import { Component, computed, input, output } from '@angular/core';
import { ChartComponent } from "../chart-component/chart-component";
import { AmmoStats } from '../../model/ammo-stats'

@Component({
  selector: 'hunt-weapon-extended-info-component',
  imports: [ChartComponent],
  templateUrl: './weapon-extended-info-component.html',
  styleUrl: './weapon-extended-info-component.scss',
})
export class WeaponExtendedInfoComponent {
  ammo = input.required<AmmoStats>()
  rangeSelected = output<number>()

  chestChestRange = computed(() => this.findRange('chest', 'chest'))
  cockCockRange = computed(() => this.findRange('cock', 'cock'))
  armArmRange = computed(() => this.findRange('arms', 'arms'))
  legLegRange = computed(() => this.findRange('legs', 'legs'))

  chestCockRange = computed(() => this.findRange('chest', 'cock'))
  chestArmRange = computed(() => this.findRange('chest', 'arms'))
  chestLegRange = computed(() => this.findRange('chest', 'legs'))

  cockArmRange = computed(() => this.findRange('cock', 'arms'))
  cockLegRange = computed(() => this.findRange('cock', 'legs'))

  armLegRange = computed(() => this.findRange('arms', 'legs'))

  findRange(bodypartOne: 'chest' | 'cock' | 'legs' | 'arms', bodypartTwo: 'chest' | 'cock' | 'legs' | 'arms') {
    let found = false
    let range = 0
    while (range < 100 && !found) {
      const leftDamage = this.ammo().calculateDamage(range)[bodypartOne]
      const rightDamage = this.ammo().calculateDamage(range)[bodypartTwo]
      if (leftDamage + rightDamage < 150) {
        found = true
      } else {
        range++
      }
    }
    const result = range - 1
    if (result < 0) {
      return "not possible"
    }
    if (result === 99 && !found) {
      return "100m+"
    }
    return `${result}m`
  }

  onRangeSelected(range: number) {
    this.rangeSelected.emit(range)
  }
}
