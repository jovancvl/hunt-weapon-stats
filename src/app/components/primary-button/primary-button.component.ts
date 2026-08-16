import { Component, input } from '@angular/core';

@Component({
  selector: 'hunt-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
})
export class PrimaryButtonComponent {
  iconOnly = input(false)
}
