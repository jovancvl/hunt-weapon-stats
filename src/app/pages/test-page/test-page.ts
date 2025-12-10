import { CdkDrag, CdkDragDrop, CdkDragPlaceholder, CdkDragPreview, CdkDropList } from '@angular/cdk/drag-drop';
import { Component, viewChild } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';
import { WEAPON_LIST } from '../../catalogue/__all-weapons';
import { EquipmentCardComponent } from "../../components/equipment-card-component/equipment-card-component";
import { FRONTIER_73C } from '../../catalogue/frontier-73c';
import { CompareEquipmentCardComponent } from "../../components/compare-equipment-card-component/compare-equipment-card-component";
import { NgTemplateOutlet } from '@angular/common';


@Component({
  selector: 'hunt-test-page',
  imports: [CdkDrag, EquipmentCardComponent, CdkDropList, CdkDragPlaceholder, CompareEquipmentCardComponent, CdkDragPreview, NgTemplateOutlet],
  templateUrl: './test-page.html',
  styleUrl: './test-page.scss',
})
export class TestPage {
  weapons: Weapon[] = [...WEAPON_LIST]
  comparisonOne: Weapon[] = [FRONTIER_73C]
  comparisonTwo: Weapon[] = [FRONTIER_73C]
  weaponListRef = viewChild.required<CdkDropList<Weapon[]>>('weaponList')
  oneRef = viewChild.required<CdkDropList<Weapon[]>>('one')
  twoRef = viewChild.required<CdkDropList<Weapon[]>>('two')

  switch() {
    const one = this.comparisonOne
    this.comparisonOne = [...this.comparisonTwo]
    this.comparisonTwo = one
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
}
