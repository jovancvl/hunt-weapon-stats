import { Component, input } from '@angular/core';
import { CustomAmmoType, RegularAmmoType } from '../../arsenal/ammo';

@Component({
  selector: 'hunt-ammo-type',
  imports: [],
  templateUrl: './ammo-type-component.html',
  styleUrl: './ammo-type-component.scss'
})
export class AmmoTypeComponent {
  ammoType = input.required<CustomAmmoType | RegularAmmoType>();
}
