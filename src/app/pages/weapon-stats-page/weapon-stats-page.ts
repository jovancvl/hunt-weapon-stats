import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { RifleStatsComponent } from "../../components/rifle-stats-component/rifle-stats-component";
import { HunterBodyComponent } from "../../components/hunter-body-component/hunter-body-component";
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBarComponent } from "../../components/nav-bar-component/nav-bar-component";

@Component({
  selector: 'hunt-weapon-stats-page',
  imports: [RifleStatsComponent, HunterBodyComponent, NavBarComponent],
  templateUrl: './weapon-stats-page.html',
  styleUrl: './weapon-stats-page.scss'
})
export class WeaponStatsPage implements OnInit {
  rifle = FRONTIER_73C
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)
  private weaponName: string;

  constructor() {
    let wn = this.activatedRoute.snapshot.paramMap.get('id')
    if (wn) {
      this.weaponName = wn
    } else {
      throw new Error("weapon name not set")
    }
    console.log(`selected weapon: ${this.weaponName}`)
  }

  ngOnInit(): void {
    
  }
}
