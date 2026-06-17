import { Component, computed, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hunt-stat-bar-component',
  imports: [],
  templateUrl: './stat-bar-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './stat-bar-component.scss',
})
export class StatBarComponent {
  value = input.required<number>()
  max = input.required<number>()
  withNumber = input(true)
  color = input<string>()

  statBarStyle = computed(() => {
    let percentage = this.value() * 100 / this.max()
    percentage = percentage < 100 ? percentage : 100
    let result = `width: ${percentage}%;`
    if (this.color()) {
      result = result + `background: ${this.color()};`
    }
    return result
  })
}
