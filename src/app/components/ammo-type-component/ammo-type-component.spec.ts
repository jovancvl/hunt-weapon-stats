import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoTypeComponent } from './ammo-type-component';

describe('AmmoTypeComponent', () => {
  let component: AmmoTypeComponent;
  let fixture: ComponentFixture<AmmoTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmmoTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmmoTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
