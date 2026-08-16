import { Component, computed, effect, inject, signal } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { ChartComponent } from "../../components/chart-component/chart-component";
import { WeaponInfoCardComponent } from "../../components/weapon-info-card/weapon-info-card.component";
import { HunterBodyComponent } from "../../components/hunter-body-component/hunter-body-component";
import { SelectWeaponComponent } from "../../components/select-weapon-component/select-weapon-component";
import { ActivatedRoute, Router } from '@angular/router';
import { WEAPON_MAP } from '../../catalogue/__all-weapons';
import { StatTableComponent } from "../../components/stat-table-component/stat-table-component";
import { FilterButtonComponent } from "../../components/filter-button/filter-button.component";
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { ModalComponent } from "../../components/modal/modal.component";
import { INFANTRY_37L } from '../../catalogue/infantry-73l';
import { WeaponCardOption } from '../../components/equipment-card-component/options.model';
import { AmmoName } from '../../model/ammo-name';
import { AmmoStats } from '../../model/ammo-stats';
import { BottomButtonsComponent } from "../../components/bottom-buttons/bottom-buttons.component";
import { OptionButtonComponent } from "../../components/option-button/option-button.component";
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'hunt-weapon-comparison-page',
  imports: [ChartComponent, WeaponInfoCardComponent, HunterBodyComponent, SelectWeaponComponent, StatTableComponent, FilterButtonComponent, PrimaryButtonComponent, ModalComponent, BottomButtonsComponent, OptionButtonComponent],
  templateUrl: './weapon-comparison-page.html',
  styleUrl: './weapon-comparison-page.scss',
})
export class WeaponComparisonPage {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)
  utilService = inject(UtilService);

  compareList = signal<Weapon[]>([]);

  readonly colors = UtilService.COLORS

  isOptionsModalOpen = false;

  isWeaponSelectionModalOpen = false;
  weaponSelecting = -1;

  isAmmoSelectionModalOpen = false;
  ammoSelecting = 0;

  ammoList = computed(() => this.compareList().map(w => w.activeAmmo));

  range = 10;

  constructor () {
    const items = this.activatedRoute.snapshot.queryParamMap.get("items")?.split(',').map(i => WEAPON_MAP.get(i)).filter(w => !!w) || [INFANTRY_37L];
    this.compareList.set(items);

    if (items.length < 2) {
      this.weaponSelecting = items.length;
      this.isWeaponSelectionModalOpen = true;
    }

    effect(() => {
      this.router.navigate([], {
        queryParams: {
          items: this.compareList().map(w => w.name).join(',')
        },
        queryParamsHandling: 'replace'
      })
    })
  }

  getAmmoSrc(weapon: Weapon) {
    let src = "ammo-icons/ammo_filter";

    switch (weapon.baseAmmo.info.name) {
      case AmmoName.COMPACT:
        src = `${src}-compact`;
        break;
      case AmmoName.MEDIUM:
        src = `${src}-medium`;
        break;
      case AmmoName.LONG:
        src = `${src}-long`;
        break;
      default:
        src = `${src}-special-ammo`;
    }

    src = `${src}.svg`;
    return src;
  }

  openWeaponSelectModal(toReplace: number) {
    this.weaponSelecting = toReplace;
    this.isOptionsModalOpen = false;
    this.isWeaponSelectionModalOpen = true;
  }

  openAmmoSelectModal(toReplace: number) {
    this.ammoSelecting = toReplace;
    this.isOptionsModalOpen = false;
    this.isAmmoSelectionModalOpen = true;
  }

  closeAmmoSelectModal() {
    this.isAmmoSelectionModalOpen = false;
  }

  removeWeapon(toRemove: number) {
    this.compareList.update(l => {
      l.splice(toRemove, 1);
      if (l.length === 0) {
        l = [INFANTRY_37L]
      }
      const result = [...l];
      return result;
    });
  }

  replaceWeapon(option: [Weapon, WeaponCardOption], toReplace: number) {
    const weapon = option[0];
    this.compareList.update(l => {
      l.splice(toReplace, 1, { ...weapon });
      const result = [...l];
      return result;
    });
    this.isOptionsModalOpen = false;
    this.isWeaponSelectionModalOpen = false;
  }

  replaceAmmo(ammo: AmmoStats, toReplace: number) {
    const weapon = this.compareList()[toReplace];
    weapon.activeAmmo = ammo;
    this.compareList.update(l => {
      l.splice(toReplace, 1, { ...weapon });
      const result = [...l];
      return result;
    });
  }
}
