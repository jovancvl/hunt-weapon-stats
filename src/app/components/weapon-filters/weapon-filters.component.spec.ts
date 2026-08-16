import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponFiltersComponent } from './weapon-filters.component';

describe('WeaponFiltersComponent', () => {
  let component: WeaponFiltersComponent;
  let fixture: ComponentFixture<WeaponFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponFiltersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
