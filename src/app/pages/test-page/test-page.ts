import { CdkDrag, CdkDragDrop, CdkDragPlaceholder, CdkDropList, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';
import { WEAPON_LIST } from '../../catalogue/__all-weapons';
import { EquipmentCardComponent } from "../../components/equipment-card-component/equipment-card-component";
import { __NAME } from '../../catalogue/__template';
import { FRONTIER_73C } from '../../catalogue/frontier-73c';

@Component({
  selector: 'hunt-test-page',
  imports: [CdkDrag, EquipmentCardComponent, CdkDropList, CdkDragPlaceholder],
  templateUrl: './test-page.html',
  styleUrl: './test-page.scss',
})
export class TestPage {
  weapons: Weapon[] = [...WEAPON_LIST, ...WEAPON_LIST]
  comparisonOne: Weapon[] = [FRONTIER_73C]
  comparisonTwo: Weapon[] = [FRONTIER_73C]
  @ViewChild('weaponList') weaponListRef!: CdkDropList<Weapon[]>
  @ViewChild('one') one!: CdkDropList<Weapon[]>
  @ViewChild('two') two!: CdkDropList<Weapon[]>

  drop(event: CdkDragDrop<Weapon[]>) {
    if (event.previousContainer !== event.container) {
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }

  moveToComparisonOne(event: CdkDragDrop<Weapon[]>) {
    this.comparisonOne = [event.item.data]
  }

  moveToComparisonTwo(event: CdkDragDrop<Weapon[]>) {
    this.comparisonTwo = [event.item.data]
  }

  moveFromCompare(event: CdkDragDrop<Weapon[]>) {
    // console.log("weaponList", this.weaponListRef)
    // console.log("one", this.one)
    // console.log("two", this.two)
    if (event.previousContainer !== event.container) {
      if (event.previousContainer === this.one) {
        this.comparisonOne = []
      }
      if (event.previousContainer === this.two) {
        this.comparisonTwo = []
      }
    }
  }
}
