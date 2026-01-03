import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponExtendedInfoComponent } from './weapon-extended-info-component';

describe('WeaponExtendedInfoComponent', () => {
  let component: WeaponExtendedInfoComponent;
  let fixture: ComponentFixture<WeaponExtendedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponExtendedInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponExtendedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
