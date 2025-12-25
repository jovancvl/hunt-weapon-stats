import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponInfoComponent } from './weapon-info-component';

describe('WeaponInfoComponent', () => {
  let component: WeaponInfoComponent;
  let fixture: ComponentFixture<WeaponInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
