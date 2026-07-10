import { Component, model } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { StatTableComponent } from "../stat-table-component/stat-table-component";
import { WeaponInfoCardComponent } from "../weapon-info-card/weapon-info-card.component";

@Component({
  selector: 'hunt-weapon-info-component',
  imports: [StatTableComponent, WeaponInfoCardComponent],
  templateUrl: './weapon-info-component.html',
  styleUrl: './weapon-info-component.scss',
})
export class WeaponInfoComponent {
  weapon = model.required<Weapon>()
}
