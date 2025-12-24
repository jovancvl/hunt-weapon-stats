import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { Weapon } from '../../arsenal/weapon';
import { Router, RouterLink } from '@angular/router';
import { CdkDropList, CdkDragDrop, CdkDrag, CdkDragPlaceholder, CdkDragPreview } from '@angular/cdk/drag-drop';
import { AmmoName } from '../../arsenal/ammo';
import { WEAPON_LIST } from '../../catalogue/__all-weapons';
import { CompareEquipmentCardComponent } from "../../components/compare-equipment-card-component/compare-equipment-card-component";
import { EquipmentCardComponent } from "../../components/equipment-card-component/equipment-card-component";
import { NgTemplateOutlet } from '@angular/common';
import { StatComparisonTableComponent } from "../../components/stat-comparison-table-component/stat-comparison-table-component";

@Component({
  selector: 'hunt-weapon-select-page',
  imports: [CdkDrag, EquipmentCardComponent, CdkDropList, CdkDragPlaceholder, CompareEquipmentCardComponent, CdkDragPreview, NgTemplateOutlet, RouterLink, StatComparisonTableComponent],
  templateUrl: './weapon-select-page.html',
  styleUrl: './weapon-select-page.scss'
})
export class WeaponSelectPage {
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
    return this.weapons.filter((w) => {
      const isNameFilterOff = this.query().length < 1
      const name = w.name.toLowerCase().includes(this.query().toLowerCase())

      const isSizeFilterOff = !this.isOneSlotActive() && !this.isTwoSlotActive() && !this.isThreeSlotActive()
      const size = this.isOneSlotActive() && w.size === 1 || this.isTwoSlotActive() && w.size === 2 || this.isThreeSlotActive() && w.size === 3

      const isAmmoFilterOff = !this.isCompactActive() && !this.isMediumActive() && !this.isLongActive() && !this.isShellActive() && !this.isSpecialActive()
      const ammo = (this.isCompactActive() && w.baseAmmo.info.name === AmmoName.COMPACT) ||
        (this.isMediumActive() && w.baseAmmo.info.name === AmmoName.MEDIUM) ||
        (this.isLongActive() && w.baseAmmo.info.name === AmmoName.LONG) ||
        (this.isShellActive() && w.baseAmmo.info.name === AmmoName.BUCKSHOT) ||
        (this.isSpecialActive() && [AmmoName.ARROW, AmmoName.BOLT, AmmoName.CHUKONU, AmmoName.HAND_CROSSBOW, AmmoName.DOLCH, AmmoName.LANCE, AmmoName.NITRO].includes(w.baseAmmo.info.name))

      const isCustomAmmoFilterOff = !this.isExplosiveActive() &&
        !this.isDumDumActive() &&
        !this.isBurnActive() &&
        !this.isPoisonActive() &&
        !this.isFmjActive() &&
        !this.isSubsonicActive() &&
        !this.isHvActive()
      const customAmmo = (this.isExplosiveActive() && w.availableAmmo.filter((a) => [AmmoName.EXPLOSIVE, AmmoName.EXPLOSIVE_BOLT, AmmoName.EXPLOSIVE_CHUKONU, AmmoName.FRAG_ARROW, AmmoName.WAXED_FRAG_CHARGE].includes(a.info.name)).length > 0) ||
        (this.isDumDumActive() && w.availableAmmo.filter((a) => [AmmoName.DUMDUM, AmmoName.ARROW, AmmoName.FLECHETTE, AmmoName.FRAG_ARROW, AmmoName.WAXED_FRAG_CHARGE, AmmoName.BOLT, AmmoName.CHUKONU, AmmoName.HAND_CROSSBOW, AmmoName.HARPOON, AmmoName.STEEL_BOLT, AmmoName.CONCERTINA_ARROW, AmmoName.SHREDDER].includes(a.info.name)).length > 0) ||
        (this.isBurnActive() && w.availableAmmo.filter((a) => [AmmoName.INCENDIARY, AmmoName.INCENDIARY_CHUKONU, AmmoName.DRAGON_BREATH, AmmoName.DRAGON_BREATH_BOLT, AmmoName.DRAGON_BREATH_CHARGE].includes(a.info.name)).length > 0) ||
        (this.isPoisonActive() && w.availableAmmo.filter((a) => [AmmoName.POISON, AmmoName.POISON_ARROW, AmmoName.POISON_BOLT].includes(a.info.name)).length > 0) ||
        (this.isFmjActive() && w.availableAmmo.filter((a) => a.info.name === AmmoName.FMJ).length > 0) ||
        (this.isSubsonicActive() && w.availableAmmo.filter((a) => a.info.name === AmmoName.SUBSONIC).length > 0) ||
        (this.isHvActive() && w.availableAmmo.filter((a) => a.info.name === AmmoName.HIGH_VELOCITY).length > 0)

      return (name || isNameFilterOff) && (size || isSizeFilterOff) && (ammo || isAmmoFilterOff) && (customAmmo || isCustomAmmoFilterOff)
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
