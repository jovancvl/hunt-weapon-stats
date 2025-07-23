import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoEffectComponent } from './ammo-effect-component';

describe('AmmoEffectComponent', () => {
  let component: AmmoEffectComponent;
  let fixture: ComponentFixture<AmmoEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmmoEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmmoEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
