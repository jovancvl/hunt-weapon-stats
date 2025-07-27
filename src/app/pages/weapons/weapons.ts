import { Component, OnInit, signal } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar-component/nav-bar-component";
import { WeaponListComponent } from "../../components/weapon-list-component/weapon-list-component";

@Component({
  selector: 'hunt-weapons',
  imports: [NavBarComponent, WeaponListComponent],
  templateUrl: './weapons.html',
  styleUrl: './weapons.scss'
})
export class Weapons implements OnInit {

  ngOnInit(): void {
  }
}
