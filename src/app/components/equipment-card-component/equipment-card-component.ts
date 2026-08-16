import { Component, computed, inject, input, output } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { DollarIcon } from "../dollar-icon/dollar-icon";
import { WeaponCardOption } from './options.model';
import { CdkMenuTrigger, CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { UtilService } from '../../services/util.service';
import { AmmoName } from '../../model/ammo-name';
import { ModalComponent } from "../modal/modal.component";
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'hunt-equipment-card-component',
  imports: [
    DollarIcon,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    ModalComponent
  ],
  templateUrl: './equipment-card-component.html',
  styleUrl: './equipment-card-component.scss'
})
export class EquipmentCardComponent {
  readonly utilService = inject(UtilService);

  OPTIONS = WeaponCardOption;
  weapon = input.required<Weapon>();
  active = input(false);
  showOptions = input(true);

  optionSelected = output<WeaponCardOption>();

  sizeSrc = computed(() => {
    const size = this.weapon().size;
    return `ammo-icons/ammo_filter-${size}-slot.svg`;
  });

  isOptionsModalOpen = false;
  doubleClickTimerSub?: Subscription;

  toggleOptions(event: PointerEvent) {
    event.stopPropagation();
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

  openOptionsModal() {
    if (this.showOptions()) {
      this.isOptionsModalOpen = true
    } else {
      this.optionClicked(WeaponCardOption.DETAILS)
    }
  }

  optionClicked(option: WeaponCardOption) {
    this.optionSelected.emit(option);
    this.isOptionsModalOpen = false;
  }

  cardClicked() {
    if (this.doubleClickTimerSub && !this.doubleClickTimerSub.closed) {
      this.optionSelected.emit(WeaponCardOption.DETAILS);
      return;
    }

    this.doubleClickTimerSub = timer(500).subscribe(() => this.doubleClickTimerSub?.unsubscribe());
  }
}
