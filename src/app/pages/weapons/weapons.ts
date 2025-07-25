import { Component } from '@angular/core';
import { EquipmentCard } from "../../components/equipment-card/equipment-card";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'hunt-weapons',
  imports: [EquipmentCard, RouterLink],
  templateUrl: './weapons.html',
  styleUrl: './weapons.scss'
})
export class Weapons {

}
