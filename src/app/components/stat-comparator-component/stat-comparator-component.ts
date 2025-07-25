import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'hunt-stat-comparator-component',
  imports: [],
  templateUrl: './stat-comparator-component.html',
  styleUrl: './stat-comparator-component.scss'
})
export class StatComparatorComponent {
  max = input.required<number>();
  originalValue = input.required<number>();
  newValue = input.required<number>();
  showComparison = input.required<boolean>();

  originalValueStatBarStyle = computed(() => {
    const percentage = this.originalValue() * 100 / this.max();
    const background = "#dddddd";
    return `width: ${percentage}%; background: ${background};`;
  });

  newValueStatBarStyle = computed(() => {
    const percentage = this.newValue() * 100 / this.max();
    const background = "#e0c528ff";
    return `width: ${percentage}%; background: ${background};`;
  });
}
