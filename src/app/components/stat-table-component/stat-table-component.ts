import { Component, input } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';
import { StatBarComponent } from "../stat-bar-component/stat-bar-component";

@Component({
  selector: 'hunt-stat-table-component',
  imports: [StatBarComponent],
  templateUrl: './stat-table-component.html',
  styleUrl: './stat-table-component.scss',
})
export class StatTableComponent {
  weapon = input.required<Weapon>()
}
