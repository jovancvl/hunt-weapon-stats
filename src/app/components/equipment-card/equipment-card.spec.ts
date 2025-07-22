import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCard } from './equipment-card';

describe('EquipmentCard', () => {
  let component: EquipmentCard;
  let fixture: ComponentFixture<EquipmentCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
