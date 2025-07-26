import { Component, OnInit, signal } from '@angular/core';
import { EquipmentCard } from "../../components/equipment-card/equipment-card";
import { FRONTIER_73C } from '../../arsenal/frontier-family';
import { Weapon } from '../../arsenal/weapon';
import { RifleStatsComponent } from "../../components/rifle-stats-component/rifle-stats-component";
import { NavBarComponent } from "../../components/nav-bar-component/nav-bar-component";

@Component({
  selector: 'hunt-weapons',
  imports: [EquipmentCard, RifleStatsComponent, NavBarComponent],
  templateUrl: './weapons.html',
  styleUrl: './weapons.scss'
})
export class Weapons implements OnInit {
  isWeaponListOpen = signal(true)
  weapon: Weapon = FRONTIER_73C

  selectWeapon(weapon: Weapon | number) {
    console.log(`weapon selected ${this.isWeaponListOpen()}`)
    this.isWeaponListOpen.update((isOpen) => !isOpen)
  }

  ngOnInit(): void {
  }
}
