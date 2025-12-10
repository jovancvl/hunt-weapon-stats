import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareEquipmentCardComponent } from './compare-equipment-card-component';

describe('CompareEquipmentCardComponent', () => {
  let component: CompareEquipmentCardComponent;
  let fixture: ComponentFixture<CompareEquipmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareEquipmentCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareEquipmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
