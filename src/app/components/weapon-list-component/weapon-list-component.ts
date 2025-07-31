import { Component, inject, OnInit, output } from '@angular/core';
import { EquipmentCardComponent } from "../equipment-card-component/equipment-card-component";
import { Router } from '@angular/router';
import { Weapon } from '../../arsenal/weapon';
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { VETTERLI_71 } from '../../catalogue/vetterli-71';
import { WEAPON_LIST } from '../../catalogue/all-weapons';

@Component({
  selector: 'hunt-weapon-list-component',
  imports: [EquipmentCardComponent],
  templateUrl: './weapon-list-component.html',
  styleUrl: './weapon-list-component.scss'
})
export class WeaponListComponent implements OnInit {
  router = inject(Router)
  onWeaponSelect = output<Weapon>()
  onWeaponHover = output<Weapon>()
  weapons = WEAPON_LIST

  hoverOverWeapon(w: Weapon) {
    this.onWeaponHover.emit(w)
  }

  goToWeapon(weapon: Weapon) {
    this.onWeaponSelect.emit(weapon)
  }

  ngOnInit(): void {
    this.weapons.push(FRONTIER_73C, VETTERLI_71)
  }
}
