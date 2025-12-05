import { Component, computed, input, model, output, ViewChild } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';
import { StatComparatorComponent } from '../stat-comparator-component/stat-comparator-component';
import { __NAME } from '../../catalogue/___template';

@Component({
  selector: 'hunt-rifle-compare-component',
  imports: [StatComparatorComponent],
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
