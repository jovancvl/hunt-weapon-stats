import { Component, computed, input, OnInit, signal } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';
import { StatComparatorComponent } from '../stat-comparator-component/stat-comparator-component';
import { HunterBodyComponent } from "../hunter-body-component/hunter-body-component";

@Component({
  selector: 'hunt-rifle-stats-component',
  imports: [StatComparatorComponent, HunterBodyComponent],
  templateUrl: './rifle-stats-component.html',
  styleUrl: './rifle-stats-component.scss'
})
export class RifleStatsComponent implements OnInit{
  rifle = input.required<Weapon>();
  rifleCopy = signal(Weapon.EMPTY)


  ngOnInit(): void {
    this.rifleCopy.set(new Weapon(this.rifle()))
  }
}
