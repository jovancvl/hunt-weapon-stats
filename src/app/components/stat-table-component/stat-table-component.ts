import { Component, input } from '@angular/core';
import { StatBarComponent } from "../stat-bar-component/stat-bar-component";
import { Weapon } from '../../model/v2/weapon';

@Component({
  selector: 'hunt-stat-table-component',
  imports: [StatBarComponent],
  templateUrl: './stat-table-component.html',
  styleUrl: './stat-table-component.scss',
})
export class StatTableComponent {
  weapon = input.required<Weapon>()
}
