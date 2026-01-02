import { Component, computed, output, signal, WritableSignal } from '@angular/core';
import { SIZE_FILTERS, BASE_AMMO_FILTERS, CUSTOM_AMMO_FILTERS, SizeFilter, BaseAmmoFilter, CustomAmmoFilter, Filter } from '../../model/filter';
import { Weapon } from '../../model/weapon';
import { EquipmentCardComponent } from "../equipment-card-component/equipment-card-component";
import { WEAPON_LIST } from '../../catalogue/__all-weapons';

@Component({
  selector: 'hunt-select-weapon-component',
  imports: [EquipmentCardComponent],
  templateUrl: './select-weapon-component.html',
  styleUrl: './select-weapon-component.scss',
})
export class SelectWeaponComponent {
  weaponsList: Weapon[] = [...WEAPON_LIST]
  onHover = output<Weapon>()
  onSelect = output<Weapon>()

  // filters
  sizeFilters = SIZE_FILTERS
  baseAmmoFilters = BASE_AMMO_FILTERS
  customAmmoFilters = CUSTOM_AMMO_FILTERS

  searchQuery = signal<string>('')
  appliedSizeFilters = signal<SizeFilter[]>([])
  appliedBaseAmmoFilters = signal<BaseAmmoFilter[]>([])
  appliedCustomAmmoFilters = signal<CustomAmmoFilter[]>([])

  filteredWeapons = computed(() => {
    return this.weaponsList.filter((w) => {
      const searchText = this.searchQuery().toLowerCase()
      const sizeFilters = this.appliedSizeFilters()
      const baseAmmoFilters = this.appliedBaseAmmoFilters()
      const customAmmoFilters = this.appliedCustomAmmoFilters()

      const isSearchFilterOff = searchText.length === 0
      const isSizeFilterOff = sizeFilters.length === 0
      const isBaseAmmoFilterOff = baseAmmoFilters.length === 0
      const isCustomAmmoFilterOff = customAmmoFilters.length === 0

      const isSearchApplied = w.name.toLowerCase().includes(searchText)
      const isSizeApplied = sizeFilters.some(f => f.apply(w))
      const isBaseAmmoApplied = baseAmmoFilters.some(f => f.apply(w));
      const isCustomAmmoApplied = customAmmoFilters.some(f => f.apply(w));

      return (
        (isSearchFilterOff || isSearchApplied) && 
        (isSizeFilterOff || isSizeApplied) && 
        (isBaseAmmoFilterOff || isBaseAmmoApplied) && 
        (isCustomAmmoFilterOff || isCustomAmmoApplied)
      )
    })
  })

  onWeaponSelect(w: Weapon) {
    this.onSelect.emit(w)
  }

  onWeaponHover(w: Weapon) {
    this.onHover.emit(w)
  }

  updateSearchQuery(event: HTMLInputElement) {
    this.searchQuery.set(event.value)
  }

  updateSizeFilter(filter: SizeFilter) {
    this.toggleFilter(this.appliedSizeFilters, filter);
  }

  updateBaseAmmoFilter(filter: BaseAmmoFilter) {
    this.toggleFilter(this.appliedBaseAmmoFilters, filter);
  }

  updateCustomAmmoFilter(filter: CustomAmmoFilter) {
    this.toggleFilter(this.appliedCustomAmmoFilters, filter);
  }

  private toggleFilter(filterList: WritableSignal<Filter[]>, filter: Filter) {
    const list = filterList()
    const index = list.findIndex(f => f.icon === filter.icon);
    
    if (index >= 0) {
      list.splice(index, 1)
    } else {
      list.push(filter);
    }

    filterList.set([...list])
  }
}
