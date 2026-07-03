import { BreakpointObserver } from '@angular/cdk/layout';
import { inject, Service } from '@angular/core';

@Service()
export class UtilService {
  breakpointObserver = inject(BreakpointObserver);

  isSmallScreen = false;

  constructor () {
    this.breakpointObserver.observe(['(max-width: 1024px)']).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }
}
