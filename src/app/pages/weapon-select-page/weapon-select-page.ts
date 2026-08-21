import { Component, inject, OnDestroy, signal } from '@angular/core';
import { Router } from '@angular/router';
import { WeaponInfoComponent } from "../../components/weapon-info-component/weapon-info-component";
import { SelectWeaponComponent } from "../../components/select-weapon-component/select-weapon-component";
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { Weapon } from '../../model/weapon';
import { Overlay } from '@angular/cdk/overlay';
import { UtilService } from '../../services/util.service';
import { WeaponCardOption } from '../../components/equipment-card-component/options.model';

@Component({
  selector: 'hunt-weapon-select-page',
  imports: [WeaponInfoComponent, SelectWeaponComponent],
  templateUrl: './weapon-select-page.html',
  styleUrl: './weapon-select-page.scss'
})
export class WeaponSelectPage {
  router = inject(Router);
  overlay = inject(Overlay);
  utilService = inject(UtilService);

  weapon = FRONTIER_73C;

  goToOption(event: [Weapon, WeaponCardOption]) {
    this.weapon = event[0];
    const option = event[1];
    switch (option) {
      case (WeaponCardOption.COMPARE): {
        this.goToCompare()
        break;
      }
      case (WeaponCardOption.DETAILS): {
        this.goToDetails()
        break;
      }
    }
  }

  weaponTouched(w: Weapon) {
    this.weapon = w;

    // specifically for medium screens
    if (!this.utilService.isSmallScreen() && this.utilService.isMediumScreen()) {
      this.goToDetails()
    }
  }

  goToCompare() {
    this.router.navigate(['/compare'], {
      queryParams: {
        items: this.weapon.name
      }
    });
  }

  goToDetails() {
    this.router.navigate(['/weapons', this.weapon.name]);
  }
}
