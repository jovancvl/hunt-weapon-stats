import { Component, inject, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { WeaponInfoComponent } from "../../components/weapon-info-component/weapon-info-component"
import { SelectWeaponComponent } from "../../components/select-weapon-component/select-weapon-component"
import { Weapon } from '../../model/weapon'
import { Overlay } from '@angular/cdk/overlay'
import { BreakpointObserver } from '@angular/cdk/layout'
import { WeaponV2 } from '../../model/v2/weapon-v2';
import { FRONTIER_73C } from '../../catalogue/v2/frontier-73c';

@Component({
  selector: 'hunt-weapon-select-page',
  imports: [WeaponInfoComponent, SelectWeaponComponent],
  templateUrl: './weapon-select-page.html',
  styleUrl: './weapon-select-page.scss'
})
export class WeaponSelectPage implements OnDestroy {
  router = inject(Router)
  overlay = inject(Overlay)
  breakpointObserver = inject(BreakpointObserver)
  weapon: WeaponV2 = FRONTIER_73C

  isSmallScreen = false

  breakpoint$ = this.breakpointObserver.observe('(max-width: 1024px)').subscribe(state => {
    this.isSmallScreen = state.matches
  })

  goToDetails(w: WeaponV2) {
    this.router.navigate(['weapons', w.name])
  }

  onSelect(w: WeaponV2) {
    if (this.isSmallScreen) {
      this.goToDetails(w)
    }
    this.weapon = w
  }

  ngOnDestroy(): void {
    this.breakpoint$.unsubscribe()
  }
}
