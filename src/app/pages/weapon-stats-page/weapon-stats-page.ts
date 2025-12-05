import { Component, inject, OnInit } from '@angular/core';
import { RifleStatsComponent } from "../../components/rifle-stats-component/rifle-stats-component";
import { HunterBodyComponent } from "../../components/hunter-body-component/hunter-body-component";
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { ActivatedRoute, Router } from '@angular/router';
import { WEAPON_LIST } from '../../catalogue/__all-weapons';

@Component({
  selector: 'hunt-weapon-stats-page',
  imports: [RifleStatsComponent, HunterBodyComponent],
  templateUrl: './weapon-stats-page.html',
  styleUrl: './weapon-stats-page.scss'
})
export class WeaponStatsPage implements OnInit {
  rifle = FRONTIER_73C
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)

  constructor() {
    let wn = WEAPON_LIST.find(w => w.name === this.activatedRoute.snapshot.paramMap.get('id'))
    if (wn) {
      this.rifle = wn
    } else {
      alert("weapon name not set, reload the page")
      throw new Error("weapon name not set")
    }
  }

  ngOnInit(): void {
    
  }
}
