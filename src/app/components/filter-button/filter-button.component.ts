import { Component, input } from '@angular/core';

@Component({
  selector: 'hunt-filter-button',
  imports: [],
  templateUrl: './filter-button.component.html',
  styleUrl: './filter-button.component.scss',
})
export class FilterButtonComponent {
  icon = input.required<string>();
  label = input('');
  isActive = input(false)
}
