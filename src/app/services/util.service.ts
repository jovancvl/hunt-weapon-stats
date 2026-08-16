import { BreakpointObserver } from '@angular/cdk/layout';
import { computed, inject, Service, signal } from '@angular/core';

@Service()
export class UtilService {
  breakpointObserver = inject(BreakpointObserver);

  private _isSmallScreen = signal(false);

  static readonly COLORS = [
    'white',
    'goldenrod',
    'lightcoral',
    'lightskyblue',
    'lightgreen',
    'plum',
    'khaki',
    'lightsalmon',
    'powderblue',
    'palegreen',
    'violet',
    'peachpuff',
  ];

  get isSmallScreen() {
    return computed(() => this._isSmallScreen());
  }

  constructor () {
    this.breakpointObserver.observe(['(max-width: 576px)']).subscribe(result => {
      this._isSmallScreen.set(result.matches);
    });
  }
}
