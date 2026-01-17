import { Component, inject, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { WeaponInfoComponent } from "../../components/weapon-info-component/weapon-info-component"
import { SelectWeaponComponent } from "../../components/select-weapon-component/select-weapon-component"
import { FRONTIER_73C } from '../../catalogue/frontier-73c'
import { Weapon } from '../../model/weapon'
import { Overlay } from '@angular/cdk/overlay'
import { BreakpointObserver } from '@angular/cdk/layout'

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
  weapon: Weapon = FRONTIER_73C

  isSmallScreen = false

  breakpoint$ = this.breakpointObserver.observe('(max-width: 1024px)').subscribe(state => {
    this.isSmallScreen = state.matches
  })

  goToDetails(w: Weapon) {
    this.router.navigate(['weapons', w.name])
  }

  onSelect(w: Weapon) {
    if (this.isSmallScreen) {
      this.goToDetails(w)
    }
    this.weapon = w
  }

  ngOnDestroy(): void {
    this.breakpoint$.unsubscribe()
  }
}
