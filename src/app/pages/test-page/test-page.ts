import { CdkDrag, CdkDragDrop, CdkDragPlaceholder, CdkDropList } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';
import { WEAPON_LIST } from '../../catalogue/__all-weapons';
import { EquipmentCardComponent } from "../../components/equipment-card-component/equipment-card-component";
import { FRONTIER_73C } from '../../catalogue/frontier-73c';

@Component({
  selector: 'hunt-test-page',
  imports: [CdkDrag, EquipmentCardComponent, CdkDropList, CdkDragPlaceholder],
  templateUrl: './test-page.html',
  styleUrl: './test-page.scss',
})
export class TestPage {
  weapons: Weapon[] = [...WEAPON_LIST]
  comparisonOne: Weapon[] = [FRONTIER_73C]
  comparisonTwo: Weapon[] = [FRONTIER_73C]
  @ViewChild('weaponList') weaponListRef!: CdkDropList<Weapon[]>
  @ViewChild('one') one!: CdkDropList<Weapon[]>
  @ViewChild('two') two!: CdkDropList<Weapon[]>

  switch() {
    const one = this.comparisonOne
    this.comparisonOne = [...this.comparisonTwo]
    this.comparisonTwo = one
  }

  moveToComparisonOne(event: CdkDragDrop<Weapon[]>) {
    this.comparisonOne = [event.item.data]
  }

  moveToComparisonTwo(event: CdkDragDrop<Weapon[]>) {
    this.comparisonTwo = [event.item.data]
  }

  moveFromCompare(event: CdkDragDrop<Weapon[]>) {
    if (event.previousContainer === event.container) {
      return
    }

    if (event.previousContainer === this.one) {
      this.comparisonOne = []
      return
    }

    if (event.previousContainer === this.two) {
      this.comparisonTwo = []
      return
    }
  }
}
