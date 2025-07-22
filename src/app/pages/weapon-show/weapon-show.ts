import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../arsenal/weapons';
import { FRONTIER_73C } from '../../arsenal/weapons.list';
import { CustomAmmoType } from '../../arsenal/ammo';

@Component({
  selector: 'hunt-weapon-show',
  imports: [],
  templateUrl: './weapon-show.html',
  styleUrl: './weapon-show.scss'
})
export class WeaponShow implements OnInit {
  weapon: Weapon = FRONTIER_73C
  weaponCopy: Weapon = new Weapon(FRONTIER_73C);

  ngOnInit(): void {
    this.weaponCopy.activeCustomAmmo = CustomAmmoType.FMJ
  }
}
