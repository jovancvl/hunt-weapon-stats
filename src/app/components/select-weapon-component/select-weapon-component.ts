import { Component, computed, ElementRef, HostListener, output, signal, viewChild, WritableSignal } from '@angular/core'
import { SIZE_FILTERS, BASE_AMMO_FILTERS, CUSTOM_AMMO_FILTERS, SizeFilter, BaseAmmoFilter, CustomAmmoFilter, Filter } from '../../model/filter'
import { Weapon } from '../../model/weapon'
import { EquipmentCardComponent } from "../equipment-card-component/equipment-card-component"
import { WEAPON_LIST } from '../../catalogue/__all-weapons'
import { Field, form } from '@angular/forms/signals'
import { FRONTIER_73C } from '../../catalogue/frontier-73c'

@Component({
  selector: 'hunt-select-weapon-component',
  imports: [EquipmentCardComponent, Field],
  templateUrl: './select-weapon-component.html',
  styleUrl: './select-weapon-component.scss',
})
export class SelectWeaponComponent {
  onSelect = output<Weapon>()
  onDetailsClick = output<Weapon>()
  weaponsList: Weapon[] = [...WEAPON_LIST]
  selectedWeapon = FRONTIER_73C

  search = viewChild.required<ElementRef<HTMLInputElement>>('search')

  @HostListener('window:keydown')
  onInput() {
    this.search().nativeElement.focus()
  }

  // filters
  sizeFilters = SIZE_FILTERS
  baseAmmoFilters = BASE_AMMO_FILTERS
  customAmmoFilters = CUSTOM_AMMO_FILTERS

  searchForm = form(signal({ query: '' }))

  appliedSizeFilters = signal<SizeFilter[]>([])
  appliedBaseAmmoFilters = signal<BaseAmmoFilter[]>([])
  appliedCustomAmmoFilters = signal<CustomAmmoFilter[]>([])

  filteredWeapons = computed(() => {
    return this.weaponsList.filter((w) => {
      const searchText = this.searchForm.query().value()
      const sizeFilters = this.appliedSizeFilters()
      const baseAmmoFilters = this.appliedBaseAmmoFilters()
      const customAmmoFilters = this.appliedCustomAmmoFilters()

      const isSearchFilterOff = searchText.length === 0
      const isSizeFilterOff = sizeFilters.length === 0
      const isBaseAmmoFilterOff = baseAmmoFilters.length === 0
      const isCustomAmmoFilterOff = customAmmoFilters.length === 0

      const isSearchApplied = w.name.toLowerCase().includes(searchText)
      const isSizeApplied = sizeFilters.some(f => f.apply(w))
      const isBaseAmmoApplied = baseAmmoFilters.some(f => f.apply(w))
      const isCustomAmmoApplied = customAmmoFilters.some(f => f.apply(w))

      return (
        (isSearchFilterOff || isSearchApplied) &&
        (isSizeFilterOff || isSizeApplied) &&
        (isBaseAmmoFilterOff || isBaseAmmoApplied) &&
        (isCustomAmmoFilterOff || isCustomAmmoApplied)
      )
    })
  })

  goToDetails(w: Weapon) {
    this.onDetailsClick.emit(w)
  }

  onWeaponSelect(w: Weapon) {
    this.selectedWeapon = w
    this.onSelect.emit(w)
  }


  clearSearchQuery() {
    this.searchForm.query().setControlValue('')
  }

  updateSizeFilter(filter: SizeFilter) {
    this.toggleFilter(this.appliedSizeFilters, filter)
  }

  updateBaseAmmoFilter(filter: BaseAmmoFilter) {
    this.toggleFilter(this.appliedBaseAmmoFilters, filter)
  }

  updateCustomAmmoFilter(filter: CustomAmmoFilter) {
    this.toggleFilter(this.appliedCustomAmmoFilters, filter)
  }

  private toggleFilter(filterList: WritableSignal<Filter[]>, filter: Filter) {
    const list = filterList()
    const index = list.findIndex(f => f.icon === filter.icon)

    if (index >= 0) {
      list.splice(index, 1)
    } else {
      list.push(filter)
    }

    filterList.set([...list])
  }
}
