import { Component, inject } from '@angular/core';
import { HunterBodyComponent } from "../../components/hunter-body-component/hunter-body-component";
import { ActivatedRoute, Router } from '@angular/router';
import { WEAPON_MAP } from '../../catalogue/__all-weapons';
import { Weapon } from '../../arsenal/weapon';
import { WeaponInfoComponent } from "../../components/weapon-info-component/weapon-info-component";

@Component({
  selector: 'hunt-weapon-stats-page',
  imports: [HunterBodyComponent, WeaponInfoComponent],
  templateUrl: './weapon-stats-page.html',
  styleUrl: './weapon-stats-page.scss'
})
export class WeaponStatsPage {
  weapon = Weapon.EMPTY
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
}
