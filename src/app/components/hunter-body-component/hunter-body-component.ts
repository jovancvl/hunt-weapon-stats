import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, input, OnInit, viewChild, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { Weapon } from '../../arsenal/weapon';

@Component({
  selector: 'hunt-hunter-body-component',
  imports: [],
  templateUrl: './hunter-body-component.html',
  styleUrl: './hunter-body-component.scss'
})
export class HunterBodyComponent  {
  weapon = input.required<Weapon>()
}
