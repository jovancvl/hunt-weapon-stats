import { Component, input, output } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';
import { ComparisonTableComponent } from "../comparison-table-component/comparison-table-component";

@Component({
  selector: 'hunt-rifle-compare-component',
  imports: [ComparisonTableComponent],
  templateUrl: './rifle-compare-component.html',
  styleUrl: './rifle-compare-component.scss',
})
export class RifleCompareComponent {
  left = input.required<Weapon>()
  leftSelected = input.required<boolean>()
  right = input.required<Weapon>()
  rightSelected = input.required<boolean>()

  comparisonModeFlipped = output<boolean>()

  flipComparisonMode(input: HTMLInputElement) {
    this.comparisonModeFlipped.emit(input.checked)
  }
}
