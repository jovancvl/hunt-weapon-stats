import { Component, computed, input } from '@angular/core';
import { StatComparatorComponent } from "../stat-comparator-component/stat-comparator-component";
import { Weapon } from '../../arsenal/weapon';

@Component({
  selector: 'hunt-comparison-table-component',
  imports: [StatComparatorComponent],
  templateUrl: './comparison-table-component.html',
  styleUrl: './comparison-table-component.scss',
})
export class ComparisonTableComponent {
  left = input.required<Weapon>()
  right = input.required<Weapon>()

  showComparison = computed(() => this.right() !== Weapon.EMPTY)
}
