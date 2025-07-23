import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';
import { FRONTIER_73C } from '../../arsenal/frontier-family';

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
    this.weaponCopy.activeCustomAmmo = this.weaponCopy.customAmmos[0]
  }
}
