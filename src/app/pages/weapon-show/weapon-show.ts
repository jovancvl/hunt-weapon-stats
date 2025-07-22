import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../arsenal/weapons';
import { FRONTIER_73C } from '../../arsenal/weapons.list';

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
    console.log(this.weapon);
    this.weaponCopy.activeCustomAmmo = this.weaponCopy.customAmmos[0].type
    console.log(this.weaponCopy)
    this.weaponCopy.activeCustomAmmo = this.weaponCopy.customAmmos[1].type
    console.log(this.weaponCopy)
    this.weaponCopy.activeCustomAmmo = this.weaponCopy.customAmmos[2].type
    console.log(this.weaponCopy)
    // this.weaponCopy.activeCustomAmmo = undefined
    // console.log(this.weaponCopy)
  }
}
