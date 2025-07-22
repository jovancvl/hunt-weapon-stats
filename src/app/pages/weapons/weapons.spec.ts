import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weapons } from './weapons';

describe('Weapons', () => {
  let component: Weapons;
  let fixture: ComponentFixture<Weapons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Weapons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Weapons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
