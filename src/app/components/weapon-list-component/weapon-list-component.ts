import { Component, computed, inject, OnInit, output, Signal, signal } from '@angular/core';
import { EquipmentCardComponent } from "../equipment-card-component/equipment-card-component";
import { Router } from '@angular/router';
import { Weapon } from '../../arsenal/weapon';
import { WEAPON_LIST } from '../../catalogue/___all-weapons';
import { AmmoInfo, AmmoName } from '../../arsenal/ammo';

@Component({
  selector: 'hunt-weapon-list-component',
  imports: [EquipmentCardComponent],
  templateUrl: './weapon-list-component.html',
  styleUrl: './weapon-list-component.scss'
})
export class WeaponListComponent implements OnInit {
  router = inject(Router)
  onWeaponSelect = output<Weapon>()
  onWeaponHover = output<Weapon>()
  weapons: Weapon[] = WEAPON_LIST

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

  filteredWeapons: Signal<Weapon[]> = computed(() => {
    return this.weapons.filter((w) => {

      return (
        (
          (
            w.name.toLowerCase().includes(this.query().toLowerCase())
          ) ||
          (
            this.query().length < 1
          )
        )
        &&
        (
          (
            (this.isOneSlotActive() && w.size === 1) ||
            (this.isTwoSlotActive() && w.size === 2) ||
            (this.isThreeSlotActive() && w.size === 3)
          ) ||
          (
            !this.isOneSlotActive() && !this.isTwoSlotActive() && !this.isThreeSlotActive()
          )
        )
        &&
        (
          (
            (this.isCompactActive() && w.baseAmmo.info.name === AmmoName.COMPACT) ||
            (this.isMediumActive() && w.baseAmmo.info.name === AmmoName.MEDIUM) ||
            (this.isLongActive() && w.baseAmmo.info.name === AmmoName.LONG) ||
            (this.isShellActive() && w.baseAmmo.info.name === AmmoName.BUCKSHOT) ||
            (this.isSpecialActive() && [AmmoName.ARROW, AmmoName.BOLT, AmmoName.CHUKONU, AmmoName.HAND_CROSSBOW, AmmoName.DOLCH, AmmoName.LANCE, AmmoName.NITRO].includes(w.baseAmmo.info.name))
          ) ||
          (
            !this.isCompactActive() && !this.isMediumActive() && !this.isLongActive() && !this.isShellActive() && !this.isSpecialActive()
          )
        )
        &&
        (
          (
            (this.isExplosiveActive() && w.availableAmmo.filter((a) => [AmmoName.EXPLOSIVE, AmmoName.EXPLOSIVE_BOLT, AmmoName.EXPLOSIVE_CHUKONU, AmmoName.FRAG_ARROW, AmmoName.WAXED_FRAG_CHARGE].includes(a.info.name)).length > 0) ||
            (this.isDumDumActive() && w.availableAmmo.filter((a) => [AmmoName.DUMDUM, AmmoName.ARROW, AmmoName.FLECHETTE, AmmoName.FRAG_ARROW, AmmoName.WAXED_FRAG_CHARGE, AmmoName.BOLT, AmmoName.CHUKONU, AmmoName.HAND_CROSSBOW, AmmoName.HARPOON, AmmoName.STEEL_BOLT, AmmoName.CONCERTINA_ARROW, AmmoName.SHREDDER].includes(a.info.name)).length > 0) ||
            (this.isBurnActive() && w.availableAmmo.filter((a) => [AmmoName.INCENDIARY, AmmoName.INCENDIARY_CHUKONU, AmmoName.DRAGON_BREATH, AmmoName.DRAGON_BREATH_BOLT, AmmoName.DRAGON_BREATH_CHARGE].includes(a.info.name)).length > 0) ||
            (this.isPoisonActive() && w.availableAmmo.filter((a) => [AmmoName.POISON, AmmoName.POISON_ARROW, AmmoName.POISON_BOLT].includes(a.info.name)).length > 0) ||
            (this.isFmjActive() && w.availableAmmo.filter((a) => a.info.name === AmmoName.FMJ).length > 0) ||
            (this.isSubsonicActive() && w.availableAmmo.filter((a) => a.info.name === AmmoName.SUBSONIC).length > 0) ||
            (this.isHvActive() && w.availableAmmo.filter((a) => a.info.name === AmmoName.HIGH_VELOCITY).length > 0)
          ) ||
          (
            !this.isExplosiveActive() &&
            !this.isDumDumActive() &&
            !this.isBurnActive() &&
            !this.isPoisonActive() &&
            !this.isFmjActive() &&
            !this.isSubsonicActive() &&
            !this.isHvActive()
          )
        )
      )
    })
  })

  hoverOverWeapon(w: Weapon) {
    this.onWeaponHover.emit(w)
  }

  goToWeapon(weapon: Weapon) {
    this.onWeaponSelect.emit(weapon)
  }

  ngOnInit(): void {
  }
}
