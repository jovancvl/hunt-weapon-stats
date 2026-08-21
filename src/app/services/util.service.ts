import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { computed, inject, Service, signal } from '@angular/core';

@Service()
export class UtilService {
  breakpointObserver = inject(BreakpointObserver);

  private readonly smallScreenBreakpointQuery = '(max-width: 576px)';
  private readonly mediumScreenBreakpointQuery = '(max-width: 1024px)';
  private readonly _isSmallScreen = signal(false);
  isSmallScreen = computed(() => this._isSmallScreen());
  private readonly _isMediumScreen = signal(false);
  isMediumScreen = computed(() => this._isMediumScreen());

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

  constructor () {
    this.breakpointObserver.observe([this.smallScreenBreakpointQuery, this.mediumScreenBreakpointQuery]).subscribe((result: BreakpointState) => {
      this._isSmallScreen.set(result.breakpoints[this.smallScreenBreakpointQuery]);
      this._isMediumScreen.set(result.breakpoints[this.mediumScreenBreakpointQuery]);
    });
  }
}
