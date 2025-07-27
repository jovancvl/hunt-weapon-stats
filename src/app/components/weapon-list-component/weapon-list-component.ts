import { Component, inject, signal } from '@angular/core';
import { EquipmentCard } from "../equipment-card/equipment-card";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'hunt-weapon-list',
  imports: [EquipmentCard, RouterLink],
  templateUrl: './weapon-list-component.html',
  styleUrl: './weapon-list-component.scss'
})
export class WeaponListComponent {
  startAnimateOut = signal(false);
  router = inject(Router)

  goToWeapon(index: number) {
    this.startAnimateOut.set(true)
    setTimeout(() => this.router.navigate(['asdasdasdasdasd']), 1000)
  }
}
