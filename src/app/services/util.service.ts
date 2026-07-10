import { BreakpointObserver } from '@angular/cdk/layout';
import { computed, inject, Service, signal } from '@angular/core';

@Service()
export class UtilService {
  breakpointObserver = inject(BreakpointObserver);

  private _isSmallScreen = signal(false);

  get isSmallScreen() {
    return computed(() => this._isSmallScreen())
  }

  constructor () {
    this.breakpointObserver.observe(['(max-width: 1024px)']).subscribe(result => {
      this._isSmallScreen.set(result.matches);
    });
  }
}
