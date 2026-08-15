import { Component } from '@angular/core';
import { WEAPON_LIST } from '../../catalogue/__all-weapons';
import { WeaponFiltersComponent } from "../../components/weapon-filters/weapon-filters.component";

@Component({
  selector: 'hunt-test',
  imports: [
    WeaponFiltersComponent
],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  weapons = [...WEAPON_LIST]
}
