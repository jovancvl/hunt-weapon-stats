import { Component, inject, output } from '@angular/core';
import { EquipmentCard } from "../equipment-card/equipment-card";
import { Router } from '@angular/router';
import { Weapon } from '../../arsenal/weapon';
import { FRONTIER_73C } from '../../arsenal/frontier-family';

@Component({
  selector: 'hunt-weapon-list',
  imports: [EquipmentCard],
  templateUrl: './weapon-list-component.html',
  styleUrl: './weapon-list-component.scss'
})
export class WeaponListComponent {
  router = inject(Router)
  onWeaponSelect = output<Weapon>()
  weapons = [FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C]

  goToWeapon(weapon: Weapon) {
    this.onWeaponSelect.emit(weapon)
  }
}
