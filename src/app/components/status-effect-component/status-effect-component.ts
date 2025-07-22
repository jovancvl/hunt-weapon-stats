import { Component, input } from '@angular/core';
import { StatusEffect } from '../../arsenal/status-effects';

@Component({
  selector: 'hunt-status-effect',
  imports: [],
  templateUrl: './status-effect-component.html',
  styleUrl: './status-effect-component.scss'
})
export class StatusEffectComponent {
  statusEffect = input.required<StatusEffect>()
}
