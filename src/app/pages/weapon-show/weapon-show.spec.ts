import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponShow } from './weapon-show';

describe('WeaponShow', () => {
  let component: WeaponShow;
  let fixture: ComponentFixture<WeaponShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponShow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponShow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
