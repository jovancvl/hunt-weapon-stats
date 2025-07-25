import { Component, input, OnInit } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';
import { StatComparatorComponent } from '../stat-comparator-component/stat-comparator-component';

@Component({
  selector: 'hunt-rifle-stats-component',
  imports: [StatComparatorComponent],
  templateUrl: './rifle-stats-component.html',
  styleUrl: './rifle-stats-component.scss'
})
export class RifleStatsComponent implements OnInit{
  rifle = input.required<Weapon>();
  rifleCopy?: Weapon;


  ngOnInit(): void {
    this.rifleCopy = new Weapon(this.rifle());
  }
}
