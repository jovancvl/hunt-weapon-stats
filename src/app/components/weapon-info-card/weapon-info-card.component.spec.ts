import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponInfoCardComponent } from './weapon-info-card.component';

describe('WeaponInfoCardComponent', () => {
  let component: WeaponInfoCardComponent;
  let fixture: ComponentFixture<WeaponInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
