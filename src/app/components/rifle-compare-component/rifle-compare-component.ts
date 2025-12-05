import { Component, computed, input } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';
import { StatComparatorComponent } from '../stat-comparator-component/stat-comparator-component';

@Component({
  selector: 'hunt-rifle-compare-component',
  imports: [StatComparatorComponent],
  templateUrl: './rifle-compare-component.html',
  styleUrl: './rifle-compare-component.scss',
})
export class RifleCompareComponent {
  left = input.required<Weapon>()
  right = input.required<Weapon>()

  showComparison = computed(() => {
    return this.left().name !== this.right().name
  })
}
