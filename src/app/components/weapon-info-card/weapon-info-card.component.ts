import { Component, computed, HostBinding, inject, input, model, output, signal } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { AuxStatsComponent } from "../aux-stats/aux-stats.component";
import { AmmoSelectorComponent } from "../ammo-selector-component/ammo-selector-component";
import { AmmoStats } from '../../model/ammo-stats';
import { BottomButtonsComponent } from "../bottom-buttons/bottom-buttons.component";
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { ModalComponent } from "../modal/modal.component";
import { FilterButtonComponent } from "../filter-button/filter-button.component";
import { UtilService } from '../../services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hunt-weapon-info-card',
  imports: [
    AuxStatsComponent, BottomButtonsComponent, PrimaryButtonComponent, ModalComponent, FilterButtonComponent, AmmoSelectorComponent
  ],
  templateUrl: './weapon-info-card.component.html',
  styleUrl: './weapon-info-card.component.scss',
})
export class WeaponInfoCardComponent {
  utilService = inject(UtilService);
  router = inject(Router);

  weapon = model.required<Weapon>();
  withBottomButtons = input(true)

  color = input('')

  @HostBinding('style.color')
  get hostColor() {
    return this.color()
  }
  

  weaponTitleText = computed(() => `${this.weapon().name} ${this.weapon().activeAmmo !== this.weapon().baseAmmo ? this.weapon().activeAmmo.info.name : ''}`);

  isAmmoModalOpen = false;
  isOptionsModalOpen = false;

  selectAmmo(ammo: AmmoStats) {
    this.weapon.update(w => {
      const updated = { ...w };
      updated.activeAmmo = ammo;
      return updated;
    });
  }

  goToCompare() {
    this.isOptionsModalOpen = false;
    this.router.navigate(['/compare'], {
      queryParams: {
        items: this.weapon().name
      }
    });
  }
}
