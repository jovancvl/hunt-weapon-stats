import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'hunt-stat-bar-component',
  imports: [],
  templateUrl: './stat-bar-component.html',
  styleUrl: './stat-bar-component.scss',
})
export class StatBarComponent {
  value = input.required<number>()
  max = input.required<number>()
  withNumber = input(true)
  color = input<string>('')

  _color = computed(() => this.color() || "#f0f0f0")

  barWidth = computed(() => {
    let percentage = this.value() * 100 / this.max()
    percentage = percentage < 100 ? percentage : 100
    return `${percentage}%`
  })
}
