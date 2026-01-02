import { HttpClient } from '@angular/common/http';
import { Component, computed, ElementRef, input, OnInit, viewChild, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { Weapon } from '../../model/weapon';

@Component({
  selector: 'hunt-hunter-body-component',
  imports: [],
  templateUrl: './hunter-body-component.html',
  styleUrl: './hunter-body-component.scss'
})
export class HunterBodyComponent  {
  weapon = input.required<Weapon>()
  range = input.required<number>()

  chest = computed(() => this.weapon().activeAmmo.calculateDamage(this.range()).chest)
  cock = computed(() => this.weapon().activeAmmo.calculateDamage(this.range()).cock)
  arms = computed(() => this.weapon().activeAmmo.calculateDamage(this.range()).arms)
  legs = computed(() => this.weapon().activeAmmo.calculateDamage(this.range()).legs)
}
