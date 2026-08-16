import { Component, input } from '@angular/core';

@Component({
  selector: 'hunt-dollar-icon',
  imports: [],
  templateUrl: './dollar-icon.html',
  styleUrl: './dollar-icon.scss',
})
export class DollarIcon {
  size = input('24px')
}
