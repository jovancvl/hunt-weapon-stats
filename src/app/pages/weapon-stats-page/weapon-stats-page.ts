import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { RifleStatsComponent } from "../../components/rifle-stats-component/rifle-stats-component";
import { HunterBodyComponent } from "../../components/hunter-body-component/hunter-body-component";
import { FRONTIER_73C } from '../../arsenal/frontier-family';
import { ActivatedRoute } from '@angular/router';
import { NavBarComponent } from "../../components/nav-bar-component/nav-bar-component";

@Component({
  selector: 'hunt-weapon-stats-page',
  imports: [RifleStatsComponent, HunterBodyComponent, NavBarComponent],
  templateUrl: './weapon-stats-page.html',
  styleUrl: './weapon-stats-page.scss'
})
export class WeaponStatsPage implements OnInit {
  rifle = FRONTIER_73C
  private activatedRoute = signal(inject(ActivatedRoute))
  private weaponName = computed(() => this.activatedRoute().snapshot.paramMap.get('id'))

  ngOnInit(): void {
    console.log(`selected weapon: ${this.weaponName()}`)
  }
}
