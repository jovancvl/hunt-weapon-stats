import { Component, inject } from '@angular/core';
import { HunterBodyComponent } from "../../components/hunter-body-component/hunter-body-component";
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { ActivatedRoute, Router } from '@angular/router';
import { WEAPON_MAP } from '../../catalogue/__all-weapons';
import { AmmoStats } from '../../arsenal/ammo';
import { StatTableComponent } from "../../components/stat-table-component/stat-table-component";

@Component({
  selector: 'hunt-weapon-stats-page',
  imports: [HunterBodyComponent, StatTableComponent],
  templateUrl: './weapon-stats-page.html',
  styleUrl: './weapon-stats-page.scss'
})
export class WeaponStatsPage {
  weapon = FRONTIER_73C
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)

  constructor() {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if (!id) {
      alert("weapon name not set, reload the page")
      throw new Error("weapon name not set")
    }

    const wn = WEAPON_MAP.get(id)
    if (wn) {
      this.weapon = Object.assign({ ...wn })
    } else {
      alert("weapon name not found")
      this.router.navigate([''])
    }
  }

  activateAmmo(ammo: AmmoStats) {
    this.weapon.activeAmmo = ammo
  }
}
