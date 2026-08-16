import { Component, input } from '@angular/core';

@Component({
  selector: 'hunt-option-button',
  imports: [],
  templateUrl: './option-button.component.html',
  styleUrl: './option-button.component.scss',
})
export class OptionButtonComponent {
  icon = input('')
  img = input('')
}
