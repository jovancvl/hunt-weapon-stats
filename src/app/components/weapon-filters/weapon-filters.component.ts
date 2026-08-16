import { Component, effect, ElementRef, HostListener, inject, input, output, signal, viewChild, WritableSignal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { SIZE_FILTERS, BASE_AMMO_FILTERS, CUSTOM_AMMO_FILTERS, SizeFilter, BaseAmmoFilter, CustomAmmoFilter, Filter } from '../../model/filter';
import { UtilService } from '../../services/util.service';
import { WEAPON_LIST } from '../../catalogue/__all-weapons';
import { Weapon } from '../../model/weapon';
import { ModalComponent } from "../modal/modal.component";
import { FilterButtonComponent } from "../filter-button/filter-button.component";
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'hunt-weapon-filters',
  imports: [
    FormField,
    ModalComponent,
    FilterButtonComponent,
    PrimaryButtonComponent
],
  templateUrl: './weapon-filters.component.html',
  styleUrl: './weapon-filters.component.scss',
})
export class WeaponFiltersComponent {
  readonly utilService = inject(UtilService)

  weapons = input([...WEAPON_LIST])

  search = viewChild.required<ElementRef<HTMLInputElement>>('search');

  weaponsChange = output<Weapon[]>()

  @HostListener('window:keydown')
  onInput() {
    this.search().nativeElement.focus();
  }

  isModalOpen = false;

  // filters
  sizeFilters = SIZE_FILTERS;
  baseAmmoFilters = BASE_AMMO_FILTERS;
  customAmmoFilters = CUSTOM_AMMO_FILTERS;

  searchForm = form(signal({ query: '' }));

  appliedSizeFilters = signal<SizeFilter[]>([]);
  appliedBaseAmmoFilters = signal<BaseAmmoFilter[]>([]);
  appliedCustomAmmoFilters = signal<CustomAmmoFilter[]>([]);

  constructor() {
    effect(() => {
      const filtered = this.weapons().filter((w) => {
        const searchText = this.searchForm.query().value();
        const sizeFilters = this.appliedSizeFilters();
        const baseAmmoFilters = this.appliedBaseAmmoFilters();
        const customAmmoFilters = this.appliedCustomAmmoFilters();

        const isSearchFilterOff = searchText.length === 0;
        const isSizeFilterOff = sizeFilters.length === 0;
        const isBaseAmmoFilterOff = baseAmmoFilters.length === 0;
        const isCustomAmmoFilterOff = customAmmoFilters.length === 0;

        const isSearchApplied = w.name.toLowerCase().includes(searchText);
        const isSizeApplied = sizeFilters.some(f => f.apply(w));
        const isBaseAmmoApplied = baseAmmoFilters.some(f => f.apply(w));
        const isCustomAmmoApplied = customAmmoFilters.some(f => f.apply(w));

        return (
          (isSearchFilterOff || isSearchApplied) &&
          (isSizeFilterOff || isSizeApplied) &&
          (isBaseAmmoFilterOff || isBaseAmmoApplied) &&
          (isCustomAmmoFilterOff || isCustomAmmoApplied)
        );
      })

      this.weaponsChange.emit(filtered)
    });
  }

  clearSearchQuery() {
    this.searchForm.query().controlValue.set('');
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
    const list = filterList();
    const index = list.findIndex(f => f.icon === filter.icon);

    if (index >= 0) {
      list.splice(index, 1);
    } else {
      list.push(filter);
    }

    filterList.set([...list]);
  }
}
