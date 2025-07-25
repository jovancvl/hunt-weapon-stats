import { Component, OnInit } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';
import { FRONTIER_73C } from '../../arsenal/frontier-family';
import { HunterBodyComponent } from "../../components/hunter-body-component/hunter-body-component";
import { RifleStatsComponent } from "../../components/rifle-stats-component/rifle-stats-component";

@Component({
  selector: 'hunt-weapon-show',
  imports: [HunterBodyComponent, RifleStatsComponent],
  templateUrl: './weapon-show.html',
  styleUrl: './weapon-show.scss'
})
export class WeaponShow implements OnInit {
  weapon: Weapon = FRONTIER_73C

  ngOnInit(): void {
  }
}
