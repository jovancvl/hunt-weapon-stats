import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponComparisonPage } from './weapon-comparison-page';

describe('WeaponComparisonPage', () => {
  let component: WeaponComparisonPage;
  let fixture: ComponentFixture<WeaponComparisonPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponComparisonPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponComparisonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
