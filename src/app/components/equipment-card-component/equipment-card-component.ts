import { Component, computed, inject, input, output } from '@angular/core';
import { Weapon } from '../../model/weapon';
import { DollarIcon } from "../dollar-icon/dollar-icon";
import { WeaponCardOption } from './options.model';
import { CdkMenuTrigger, CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'hunt-equipment-card-component',
  imports: [
    DollarIcon,
    CdkMenuTrigger, 
    CdkMenu, 
    CdkMenuItem
  ],
  templateUrl: './equipment-card-component.html',
  styleUrl: './equipment-card-component.scss'
})
export class EquipmentCardComponent {
  readonly utilService = inject(UtilService)
  OPTIONS = WeaponCardOption
  weapon = input.required<Weapon>()
  active = input(false)
  showOptions = input(true)
  optionSelected = output<WeaponCardOption>()

  _showOptions = computed(() => this.showOptions() || this.utilService.isSmallScreen())

  sizeSrc = computed(() => {
    const size = this.weapon().size
    if (size > 0 || size <= 5) {
      return `ammo-icons/ammo_filter-${size}-slot.svg`
    } else {
      return 'ammo-icons/ammo_filter-1-slot.svg'
    }
  })

  toggleOptions(event: PointerEvent) {
    event.stopPropagation()
  }
}
