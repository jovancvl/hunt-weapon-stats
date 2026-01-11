import { Component, inject } from '@angular/core'
import { HunterBodyComponent } from "../../components/hunter-body-component/hunter-body-component"
import { ActivatedRoute, Router } from '@angular/router'
import { WEAPON_MAP } from '../../catalogue/__all-weapons'
import { Weapon } from '../../model/weapon'
import { WeaponInfoComponent } from "../../components/weapon-info-component/weapon-info-component"
import { WeaponExtendedInfoComponent } from "../../components/weapon-extended-info-component/weapon-extended-info-component";

@Component({
  selector: 'hunt-weapon-stats-page',
  imports: [HunterBodyComponent, WeaponInfoComponent, WeaponExtendedInfoComponent],
  templateUrl: './weapon-stats-page.html',
  styleUrl: './weapon-stats-page.scss'
})
export class WeaponStatsPage {
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)

  weapon = Weapon.EMPTY
  range = 10
  
  constructor () {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if (!id) {
      alert("weapon name not set, reload the page")
      throw new Error("weapon name not set")
    }

    const wn = WEAPON_MAP.get(id)
    if (!wn) {
      alert("weapon name not found")
      this.router.navigate([''])
      return
    }

    this.weapon = Object.assign({ ...wn })
    
  }

  onRangeSelected(event: number) {
    this.range = event
  }
}
