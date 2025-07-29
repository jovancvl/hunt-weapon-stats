import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponStatsAndListPage } from './weapon-stats-and-list-page';

describe('WeaponStatsAndListPage', () => {
  let component: WeaponStatsAndListPage;
  let fixture: ComponentFixture<WeaponStatsAndListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponStatsAndListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponStatsAndListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
