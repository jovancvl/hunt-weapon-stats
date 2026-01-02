import { CdkDropList, CdkDragDrop, CdkDrag, CdkDragPlaceholder, CdkDragPreview } from '@angular/cdk/drag-drop';
import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Weapon } from '../../model/weapon';
import { WEAPON_LIST } from '../../catalogue/__all-weapons';
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { StatComparisonTableComponent } from "../../components/stat-comparison-table-component/stat-comparison-table-component";
import { EquipmentCardComponent } from "../../components/equipment-card-component/equipment-card-component";
import { CompareEquipmentCardComponent } from "../../components/compare-equipment-card-component/compare-equipment-card-component";
import { NgTemplateOutlet } from '@angular/common';
import { AmmoName, BLEED_AMMO_TYPES, EXPLOSIVE_AMMO_TYPES, FMJ_AMMO_TYPES, HIGH_VELOCITY_AMMO_TYPES, INCENDIARY_AMMO_TYPES, POISON_AMMO_TYPES, SUBSONIC_AMMO_TYPES } from '../../model/ammo-name';

@Component({
  selector: 'hunt-test-page',
  imports: [CdkDrag, EquipmentCardComponent, CdkDropList, CdkDragPlaceholder, CompareEquipmentCardComponent, CdkDragPreview, NgTemplateOutlet, RouterLink, StatComparisonTableComponent],
  templateUrl: './test-page.html',
  styleUrl: './test-page.scss',
})
export class TestPage {
  router = inject(Router)
  weapons: Weapon[] = [...WEAPON_LIST]
  comparisonOne: Weapon[] = [Object.assign({ ...FRONTIER_73C })]
  comparisonTwo: Weapon[] = []
  weaponListRef = viewChild.required<CdkDropList<Weapon[]>>('weaponList')
  oneRef = viewChild.required<CdkDropList<Weapon[]>>('one')
  twoRef = viewChild.required<CdkDropList<Weapon[]>>('two')

  get weaponOne() {
    return this.comparisonOne.length > 0 ? this.comparisonOne[0] : Weapon.EMPTY
  }

  get weaponTwo() {
    return this.comparisonTwo.length > 0 ? this.comparisonTwo[0] : Weapon.EMPTY
  }

  isComparing = false
  isDragging = false

  // filters
  query = signal('')

  isOneSlotActive = signal(false);
  isTwoSlotActive = signal(false);
  isThreeSlotActive = signal(false);

  isCompactActive = signal(false);
  isMediumActive = signal(false);
  isLongActive = signal(false);
  isShellActive = signal(false);
  isSpecialActive = signal(false);

  isExplosiveActive = signal(false);
  isDumDumActive = signal(false);
  isBurnActive = signal(false);
  isPoisonActive = signal(false);
  isFmjActive = signal(false);
  isSubsonicActive = signal(false);
  isHvActive = signal(false);

  filteredWeapons = computed(() => {
      return this.weapons.filter((item) => {
        const isNameFilterOff = this.query().length < 1
        const name = item.name.toLowerCase().includes(this.query().toLowerCase())
  
        const isSizeFilterOff = !this.isOneSlotActive() && !this.isTwoSlotActive() && !this.isThreeSlotActive()
        const size = 
          this.isOneSlotActive() && item.size === 1 || 
          this.isTwoSlotActive() && item.size === 2 || 
          this.isThreeSlotActive() && item.size === 3
  
        const isBaseAmmoFilterOff = !this.isCompactActive() && !this.isMediumActive() && !this.isLongActive() && !this.isShellActive() && !this.isSpecialActive()
        const baseAmmo = 
          (this.isCompactActive() && item.baseAmmoEquals(AmmoName.COMPACT)) ||
          (this.isMediumActive() && item.baseAmmoEquals(AmmoName.MEDIUM)) ||
          (this.isLongActive() && item.baseAmmoEquals(AmmoName.LONG)) ||
          (this.isShellActive() && item.baseAmmoEquals(AmmoName.BUCKSHOT)) ||
          (this.isSpecialActive() && item.isBaseAmmoSpecialAmmo())
  
        const isCustomAmmoFilterOff = 
          !this.isExplosiveActive() &&
          !this.isDumDumActive() &&
          !this.isBurnActive() &&
          !this.isPoisonActive() &&
          !this.isFmjActive() &&
          !this.isSubsonicActive() &&
          !this.isHvActive()
        const customAmmo = 
          (this.isExplosiveActive() && item.hasAnyOfTheseCustomAmmoTypes(EXPLOSIVE_AMMO_TYPES)) ||
          (this.isDumDumActive() && item.hasAnyOfTheseCustomAmmoTypes(BLEED_AMMO_TYPES)) ||
          (this.isBurnActive() && item.hasAnyOfTheseCustomAmmoTypes(INCENDIARY_AMMO_TYPES)) ||
          (this.isPoisonActive() && item.hasAnyOfTheseCustomAmmoTypes(POISON_AMMO_TYPES)) ||
          (this.isFmjActive() && item.hasAnyOfTheseCustomAmmoTypes(FMJ_AMMO_TYPES)) ||
          (this.isSubsonicActive() && item.hasAnyOfTheseCustomAmmoTypes(SUBSONIC_AMMO_TYPES)) ||
          (this.isHvActive() && item.hasAnyOfTheseCustomAmmoTypes(HIGH_VELOCITY_AMMO_TYPES))
  
        return (name || isNameFilterOff) && (size || isSizeFilterOff) && (baseAmmo || isBaseAmmoFilterOff) && (customAmmo || isCustomAmmoFilterOff)
      })
    })

  hoverOverWeapon(weapon: Weapon) {
    if (this.isComparing) {
      return
    }
    this.comparisonOne = [weapon]
  }

  goToWeapon(weapon: Weapon) {
    // if (this.isComparing) {
    //   return
    // }
    this.router.navigate([weapon.name])
  }

  moveToComparisonOne(event: CdkDragDrop<Weapon[]>) {
    this.comparisonOne = [Object.assign({ ...event.item.data })]
  }

  moveToComparisonTwo(event: CdkDragDrop<Weapon[]>) {
    this.comparisonTwo = [Object.assign({ ...event.item.data })]
  }

  moveFromCompare(event: CdkDragDrop<Weapon[]>) {
    if (event.previousContainer === event.container) {
      return
    }

    if (event.previousContainer === this.oneRef()) {
      this.comparisonOne = []
      return
    }

    if (event.previousContainer === this.twoRef()) {
      this.comparisonTwo = []
      return
    }
  }

  onToggle(on: boolean) {
    this.isComparing = on
    if (!on) {
      this.comparisonTwo = []
    }
  }

  onDragStart() {
    this.isDragging = true
  }

  onDragEnd() {
    this.isDragging = false
  }
}
