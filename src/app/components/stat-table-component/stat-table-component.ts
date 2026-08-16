import { Component, input } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { StatBarComponent } from "../stat-bar-component/stat-bar-component";

@Component({
  selector: 'hunt-stat-table-component',
  imports: [StatBarComponent],
  templateUrl: './stat-table-component.html',
  styleUrl: './stat-table-component.scss',
})
export class StatTableComponent {
  weapons = input.required<Weapon[]>()

  readonly RIGHT_STAT_BAR_COLOR = "goldenrod";
}
