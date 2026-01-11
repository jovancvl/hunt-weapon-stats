import { Component, inject, Injector, inputBinding, OnDestroy, ViewContainerRef } from '@angular/core'
import { Router } from '@angular/router'
import { WeaponInfoComponent } from "../../components/weapon-info-component/weapon-info-component"
import { SelectWeaponComponent } from "../../components/select-weapon-component/select-weapon-component"
import { FRONTIER_73C } from '../../catalogue/frontier-73c'
import { Weapon } from '../../model/weapon'
import { Overlay, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'
import { BreakpointObserver } from '@angular/cdk/layout'
import { PopupComponent } from './popup-component/popup-component'
import { Subscription, timer } from 'rxjs'

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
  overlayRef?: OverlayRef

  isSmallScreen = false

  popupTimerSub = Subscription.EMPTY

  doubleClickTimerSub = Subscription.EMPTY
  isDoubleClickTimerRunning = false

  breakpoint$ = this.breakpointObserver.observe('(max-width: 1024px)').subscribe(state => {
    this.isSmallScreen = state.matches
  })

  onHover(w: Weapon) {
    // this.weapon = w
  }

  onSelect(w: Weapon) {
    if ((this.isDoubleClickTimerRunning && this.weapon.name === w.name) || this.isSmallScreen) {
      this.router.navigate(['weapons', w.name])
    } else {
      this.weapon = w

      this.isDoubleClickTimerRunning = true
      this.doubleClickTimerSub = timer(500).subscribe(() => this.isDoubleClickTimerRunning = false)
      this.showPopup()
    }
  }

  showPopup() {
    const positionStrategy = this.overlay.position().global().centerHorizontally().top("-8px")

    if (this.overlayRef) {
      this.overlayRef.dispose()
      this.popupTimerSub.unsubscribe()
    }

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close(),
    })

    const component = new ComponentPortal(PopupComponent)

    this.overlayRef.attach(component)

    this.popupTimerSub = timer(2300).subscribe(() => {
      this.overlayRef?.dispose()
    })
  }

  ngOnDestroy(): void {
    this.breakpoint$.unsubscribe()
    this.overlayRef?.dispose()
    this.popupTimerSub.unsubscribe()
    this.doubleClickTimerSub.unsubscribe()
  }
}
