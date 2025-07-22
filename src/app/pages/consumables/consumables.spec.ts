import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumables } from './consumables';

describe('Consumables', () => {
  let component: Consumables;
  let fixture: ComponentFixture<Consumables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Consumables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consumables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
