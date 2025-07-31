import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponStatsPage } from './weapon-stats-page';

describe('WeaponStatsPage', () => {
  let component: WeaponStatsPage;
  let fixture: ComponentFixture<WeaponStatsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponStatsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
