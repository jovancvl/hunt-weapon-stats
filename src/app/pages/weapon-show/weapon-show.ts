import { Component, computed, inject, OnInit } from '@angular/core';
import { Weapon } from '../../arsenal/weapon';
import { FRONTIER_73C } from '../../arsenal/frontier-family';
import { NavBarComponent } from "../../components/nav-bar-component/nav-bar-component";
import { RifleStatsComponent } from "../../components/rifle-stats-component/rifle-stats-component";
import { Location } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'hunt-weapon-show',
  imports: [NavBarComponent, RifleStatsComponent],
  templateUrl: './weapon-show.html',
  styleUrl: './weapon-show.scss'
})
export class WeaponShow implements OnInit {
  weapon: Weapon = FRONTIER_73C
  id = ''
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id']
    })
  }

  goBack() {
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

  ngOnInit(): void {
    console.log(this.id)
  }
}
