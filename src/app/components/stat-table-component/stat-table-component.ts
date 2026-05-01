import { Component, input } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { StatBarComponent } from "../stat-bar-component/stat-bar-component";
import { WeaponV2 } from '../../model/v2/weapon-v2';

@Component({
  selector: 'hunt-stat-table-component',
  imports: [StatBarComponent],
  templateUrl: './stat-table-component.html',
  styleUrl: './stat-table-component.scss',
})
export class StatTableComponent {
  weapon = input.required<WeaponV2>()
}
