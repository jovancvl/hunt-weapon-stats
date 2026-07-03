import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoSelectorComponent } from './ammo-selector-component';

describe('AmmoSelectorComponent', () => {
  let component: AmmoSelectorComponent;
  let fixture: ComponentFixture<AmmoSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmmoSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmmoSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
