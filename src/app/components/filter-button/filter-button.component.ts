import { Component, input } from '@angular/core';
import { Filter } from '../../model/filter';

@Component({
  selector: 'hunt-filter-button',
  imports: [],
  templateUrl: './filter-button.component.html',
  styleUrl: './filter-button.component.scss',
})
export class FilterButtonComponent {
  filter = input.required<Filter>()
  withLabel = input(false)
  isActive = input(false)
}
