import { Component, signal } from '@angular/core';
import { INFANTRY_37L } from '../../catalogue/infantry-73l';
import { CARBINE_1865_SILENCER } from '../../catalogue/1865-carbine-silencer';
import { WeaponInfoCardComponent } from "../../components/weapon-info-card/weapon-info-card.component";
import { StatTableComponent } from "../../components/stat-table-component/stat-table-component";
import { BottomButtonsComponent } from "../../components/bottom-buttons/bottom-buttons.component";
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { ModalComponent } from "../../components/modal/modal.component";
import { OptionButtonComponent } from "../../components/option-button/option-button.component";
import { AmmoName } from '../../model/ammo-name';
import { Weapon } from '../../model/weapon';
import { SelectWeaponComponent } from "../../components/select-weapon-component/select-weapon-component";
import { WeaponCardOption } from '../../components/equipment-card-component/options.model';
import { BERTHIER_1892 } from '../../catalogue/berthier-1892';
import { FilterButtonComponent } from "../../components/filter-button/filter-button.component";
import { AmmoStats } from '../../model/ammo-stats';

@Component({
  selector: 'hunt-test',
  imports: [
    WeaponInfoCardComponent,
    StatTableComponent,
    BottomButtonsComponent,
    PrimaryButtonComponent,
    ModalComponent,
    OptionButtonComponent,
    SelectWeaponComponent,
    FilterButtonComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  compareList = signal([INFANTRY_37L, CARBINE_1865_SILENCER]);

  isOptionsModalOpen = false;

  isWeaponSelectionModalOpen = false;
  weaponSelecting = -1;

  isAmmoSelectionModalOpen = false;
  ammoSelecting = 0;

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
      l.splice(toReplace, 1, {...weapon});
      const result = [...l];
      console.log(result);
      return result;
    });
  }
}
