import { Component, OnInit } from '@angular/core';
import { EquipmentCard } from "../../components/equipment-card/equipment-card";
import { RouterLink } from '@angular/router';
import { FRONTIER_73C } from '../../arsenal/frontier-family';
import { Weapon } from '../../arsenal/weapon';
import { RifleStatsComponent } from "../../components/rifle-stats-component/rifle-stats-component";
import { HunterBodyComponent } from "../../components/hunter-body-component/hunter-body-component";
import { NavBarComponent } from "../../components/nav-bar-component/nav-bar-component";

@Component({
  selector: 'hunt-weapons',
  imports: [EquipmentCard, RifleStatsComponent, HunterBodyComponent, NavBarComponent],
  templateUrl: './weapons.html',
  styleUrl: './weapons.scss'
})
export class Weapons implements OnInit {
  weapon: Weapon = FRONTIER_73C

  ngOnInit(): void {
  }
}
