import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';
import { Router, RouterLink } from '@angular/router';
import { WEAPON_LIST } from '../../catalogue/__all-weapons';
import { EquipmentCardComponent } from "../../components/equipment-card-component/equipment-card-component";
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { WeaponInfoComponent } from "../../components/weapon-info-component/weapon-info-component";
import { AmmoName, EXPLOSIVE_AMMO_TYPES, BLEED_AMMO_TYPES, INCENDIARY_AMMO_TYPES, POISON_AMMO_TYPES, FMJ_AMMO_TYPES, SUBSONIC_AMMO_TYPES, HIGH_VELOCITY_AMMO_TYPES, RegularAmmo, SpecialAmmo } from '../../arsenal/ammo-name';
import { ALL_FILTERS, BASE_AMMO_FILTERS, CUSTOM_AMMO_FILTERS, CustomAmmoFilter, Filter, RegularAmmoFilter, SIZE_FILTERS, SizeFilter, SpecialAmmoFilter } from '../../arsenal/filter';

@Component({
  selector: 'hunt-weapon-select-page',
  imports: [EquipmentCardComponent, RouterLink, WeaponInfoComponent],
  templateUrl: './weapon-select-page.html',
  styleUrl: './weapon-select-page.scss'
})
export class WeaponSelectPage {
  router = inject(Router)
  weaponsList: Weapon[] = [...WEAPON_LIST]
  weapon = FRONTIER_73C

  // filters
  sizeFilters = SIZE_FILTERS
  baseAmmoFilters = BASE_AMMO_FILTERS
  customAmmoFilters = CUSTOM_AMMO_FILTERS

  searchQuery = signal<string>('')
  appliedSizeFilters = signal<SizeFilter[]>([])
  appliedBaseAmmoFilters = signal<(RegularAmmoFilter | SpecialAmmoFilter)[]>([])
  appliedCustomAmmoFilters = signal<CustomAmmoFilter[]>([])

  filteredWeapons2 = computed(() => {
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

  onHover(w: Weapon) {
    this.weapon = w
  }

  updateSearchQuery(event: HTMLInputElement) {
    this.searchQuery.set(event.value)
  }

  updateSizeFilter(filter: SizeFilter) {
    this.toggleFilter(this.appliedSizeFilters, filter);
  }

  updateBaseAmmoFilter(filter: RegularAmmoFilter | SpecialAmmoFilter) {
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
