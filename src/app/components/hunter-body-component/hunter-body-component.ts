import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'hunt-hunter-body-component',
  imports: [],
  templateUrl: './hunter-body-component.html',
  styleUrl: './hunter-body-component.scss'
})
export class HunterBodyComponent  {
  randomizer = interval(2000).subscribe({
    next: n => this.number = Math.floor(Math.random() * 200)
  })
  number = Math.floor(Math.random() * 200)
}
