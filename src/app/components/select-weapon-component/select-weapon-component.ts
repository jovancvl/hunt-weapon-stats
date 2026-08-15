import { Component, computed, output, inject, input, viewChild, effect, ElementRef } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { EquipmentCardComponent } from "../equipment-card-component/equipment-card-component";
import { WEAPON_LIST } from '../../catalogue/__all-weapons';
import { Subscription, timer } from 'rxjs';
import { UtilService } from '../../services/util.service';
import { WeaponCardOption } from '../equipment-card-component/options.model';
import { WeaponFiltersComponent } from "../weapon-filters/weapon-filters.component";

@Component({
  selector: 'hunt-select-weapon-component',
  imports: [
    EquipmentCardComponent,
    WeaponFiltersComponent
  ],
  templateUrl: './select-weapon-component.html',
  styleUrl: './select-weapon-component.scss',
})
export class SelectWeaponComponent {
  readonly utilService = inject(UtilService);

  showOptionsOnWeaponCards = input(true);

  onSelect = output<Weapon>();
  goToOption = output<[Weapon, WeaponCardOption]>();

  showOptions = computed(() => this.showOptionsOnWeaponCards() || this.utilService.isSmallScreen());

  weaponsList: Weapon[] = [...WEAPON_LIST];
  selectedWeapon = Weapon.EMPTY;

  doubleClickTimerSub?: Subscription;

  filteredWeapons: Weapon[] = []; // the component emits an event immediately with all the weapons

  optionSelected(w: Weapon, option: WeaponCardOption) {
    this.goToOption.emit([w, option]);
  }

  onWeaponSelect(w: Weapon) {
    if ((!this.doubleClickTimerSub?.closed && this.selectedWeapon.name === w.name) || this.utilService.isSmallScreen()) {
      this.optionSelected(w, WeaponCardOption.DETAILS);
      return;
    }

    this.selectedWeapon = w;
    this.doubleClickTimerSub = timer(500).subscribe(() => this.doubleClickTimerSub?.unsubscribe());
    this.onSelect.emit(w);
  }

  applyFilters(weapons: Weapon[]) {
    this.filteredWeapons = weapons;
  }
}
