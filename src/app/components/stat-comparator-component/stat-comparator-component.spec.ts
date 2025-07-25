import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatComparatorComponent } from './stat-comparator-component';

describe('StatComparatorComponent', () => {
  let component: StatComparatorComponent;
  let fixture: ComponentFixture<StatComparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatComparatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
