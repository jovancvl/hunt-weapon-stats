import { Component, inject, OnDestroy, signal } from '@angular/core'
import { Router } from '@angular/router'
import { WeaponInfoComponent } from "../../components/weapon-info-component/weapon-info-component"
import { SelectWeaponComponent } from "../../components/select-weapon-component/select-weapon-component"
import { FRONTIER_73C } from '../../catalogue/frontier-73c'
import { Weapon } from '../../model/weapon'
import { Overlay } from '@angular/cdk/overlay'
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'hunt-weapon-select-page',
  imports: [WeaponInfoComponent, SelectWeaponComponent],
  templateUrl: './weapon-select-page.html',
  styleUrl: './weapon-select-page.scss'
})
export class WeaponSelectPage {
  router = inject(Router)
  overlay = inject(Overlay)
  utilService = inject(UtilService)

  weapon = signal(FRONTIER_73C)

  goToDetails(w: Weapon) {
    this.router.navigate(['weapons', w.name])
  }

  onSelect(w: Weapon) {
    if (this.utilService.isSmallScreen) {
      this.goToDetails(w)
    }
    this.weapon.set(w)
  }
}
