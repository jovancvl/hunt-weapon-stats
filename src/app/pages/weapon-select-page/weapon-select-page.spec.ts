import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponSelectPage } from './weapon-select-page';

describe('WeaponSelectPage', () => {
  let component: WeaponSelectPage;
  let fixture: ComponentFixture<WeaponSelectPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponSelectPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
