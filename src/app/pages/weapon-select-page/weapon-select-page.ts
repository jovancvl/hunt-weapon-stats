import { Component, inject, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { WeaponInfoComponent } from "../../components/weapon-info-component/weapon-info-component"
import { SelectWeaponComponent } from "../../components/select-weapon-component/select-weapon-component"
import { FRONTIER_73C } from '../../catalogue/frontier-73c'
import { Weapon } from '../../model/weapon'
import { Overlay, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal } from '@angular/cdk/portal'
import { BreakpointObserver} from '@angular/cdk/layout'
import { PopupComponent } from './popup-component/popup-component'

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

  breakpoint$ = this.breakpointObserver.observe('(max-width: 1024px)').subscribe(state => {
    this.isSmallScreen = state.matches
  })

  onHover(w: Weapon) {
    // this.weapon = w
  }

  onSelect(w: Weapon, event: PointerEvent) {
    if (this.weapon.name === w.name || this.isSmallScreen) {
      this.router.navigate(['weapons', w.name])
    } else {
      this.weapon = w

      this.showPopup(event)
    }
  }

  showPopup(event: PointerEvent) {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo({ x: event.clientX, y: event.clientY })
      .withPositions([
        {
          originX: 'end',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom',
        },
      ])

    if (this.overlayRef) {
      this.overlayRef.dispose()
    }

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close(),
    })

    this.overlayRef.attach(new ComponentPortal(PopupComponent))

    setTimeout(() => {
      this.overlayRef?.dispose()
    }, 3000)
  }

  ngOnDestroy(): void {
    this.breakpoint$.unsubscribe()
  }
}
