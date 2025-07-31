import { Component, inject, output } from '@angular/core';
import { EquipmentCardComponent } from "../equipment-card-component/equipment-card-component";
import { Router } from '@angular/router';
import { Weapon } from '../../arsenal/weapon';
import { FRONTIER_73C } from '../../arsenal/frontier-family';

@Component({
  selector: 'hunt-weapon-list-component',
  imports: [EquipmentCardComponent],
  templateUrl: './weapon-list-component.html',
  styleUrl: './weapon-list-component.scss'
})
export class WeaponListComponent {
  router = inject(Router)
  onWeaponSelect = output<Weapon>()
  onWeaponHover = output<Weapon>()
  weapons = [FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C, FRONTIER_73C]

  hoverOverWeapon(w: Weapon) {
    this.onWeaponHover.emit(w)
  }

  goToWeapon(weapon: Weapon) {
    this.onWeaponSelect.emit(weapon)
  }
}
