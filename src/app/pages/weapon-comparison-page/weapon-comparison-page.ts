import { Component, effect, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { Weapon } from '../../model/weapon';
import { ChartComponent } from "../../components/chart-component/chart-component";
import { StatComparisonTableComponent } from "../../components/stat-comparison-table-component/stat-comparison-table-component";
import { WeaponInfoCardComponent } from "../../components/weapon-info-card/weapon-info-card.component";
import { HunterBodyComponent } from "../../components/hunter-body-component/hunter-body-component";
import { SelectWeaponComponent } from "../../components/select-weapon-component/select-weapon-component";
import { UtilService } from '../../services/util.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WEAPON_MAP } from '../../catalogue/__all-weapons';
import { Location } from '@angular/common';

@Component({
  selector: 'hunt-weapon-comparison-page',
  imports: [ChartComponent, StatComparisonTableComponent, WeaponInfoCardComponent, HunterBodyComponent, SelectWeaponComponent],
  templateUrl: './weapon-comparison-page.html',
  styleUrl: './weapon-comparison-page.scss',
})
export class WeaponComparisonPage {
  readonly utilService = inject(UtilService);
  readonly activatedRoute = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly location = inject(Location);

  container = viewChild<ElementRef>('container');
  modal = viewChild<ElementRef>('modal');

  leftWeapon = signal<Weapon>(Object.assign({ ...FRONTIER_73C }));
  rightWeapon = signal<Weapon>(Object.assign({ ...Weapon.EMPTY }));
  range = signal(10);
  isWeaponSelectorOpen = signal(true);
  weaponSelecting = signal<"left" | "right">("right");

  isMobile = this.utilService.isSmallScreen;

  constructor () {
    const leftWeaponName = this.activatedRoute.snapshot.queryParamMap.get('left');
    if (leftWeaponName) {
      const leftWeapon = WEAPON_MAP.get(leftWeaponName);
      if (leftWeapon) {
        this.leftWeapon.set(Object.assign({ ...leftWeapon }));
      }
    }

    const rightWeaponName = this.activatedRoute.snapshot.queryParamMap.get('right');
    if (rightWeaponName) {
      const rightWeapon = WEAPON_MAP.get(rightWeaponName);
      if (rightWeapon) {
        this.rightWeapon.set(Object.assign({ ...rightWeapon }));
      }
    }

    this.isWeaponSelectorOpen.set(!(leftWeaponName && rightWeaponName));

    effect(() => {
      if (!this.isMobile()) {
        return
      }
      if (this.isWeaponSelectorOpen()) {
        this.modal()?.nativeElement.scrollIntoView({
          behavior: "smooth"
        });
      } else {
        this.container()?.nativeElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  }

  rangeSelected(r: number) {
    this.range.set(r);
  }

  openWeaponSelection(side: "left" | "right") {
    this.isWeaponSelectorOpen.set(!(this.weaponSelecting() === side && this.isWeaponSelectorOpen()));
    this.weaponSelecting.set(side);
  }

  weaponSelected(w: Weapon) {
    let queryParams = {
      left: this.leftWeapon().name,
      right: this.rightWeapon().name
    };
    if (this.weaponSelecting() === 'left') {
      queryParams.left = w.name;
      this.leftWeapon.set(w);
    } else {
      queryParams.right = w.name;
      this.rightWeapon.set(w);
    }

    const urlTree = this.router.createUrlTree(['.'], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });

    this.location.replaceState(this.router.serializeUrl(urlTree));
  }

  setComparisonWeapon(w: Weapon) {
    this.weaponSelected(w);

    this.isWeaponSelectorOpen.set(false);
  }
}
