import { Component, computed, signal } from '@angular/core';
import { INFANTRY_37L } from '../../catalogue/infantry-73l';
import { WeaponInfoCardComponent } from "../../components/weapon-info-card/weapon-info-card.component";
import { AuxStatsComponent } from "../../components/aux-stats/aux-stats.component";
import { AmmoSelectorComponent } from "../../components/ammo-selector-component/ammo-selector-component";
import { StatTableComponent } from "../../components/stat-table-component/stat-table-component";
import { ModalComponent } from "../../components/modal/modal.component";
import { FilterButtonComponent } from "../../components/filter-button/filter-button.component";
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { AmmoStats } from '../../model/ammo-stats';
import { BottomButtonsComponent } from "../../components/bottom-buttons/bottom-buttons.component";

@Component({
  selector: 'hunt-test',
  imports: [
    AuxStatsComponent,
    StatTableComponent,
    ModalComponent,
    FilterButtonComponent,
    PrimaryButtonComponent,
    BottomButtonsComponent
],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  weapon = signal(INFANTRY_37L)
  weaponTitleText = computed(() => `${this.weapon().name} ${this.weapon().activeAmmo !== this.weapon().baseAmmo ? this.weapon().activeAmmo.info.name : ''}`);

  isAmmoModalOpen = false
  isOptionsModalOpen = false

  selectAmmo(ammo: AmmoStats) {
    this.weapon.update(w => {
      const updated = { ...w };
      updated.activeAmmo = ammo;
      return updated;
    })
  }
}
