import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatComparisonTableComponent } from './stat-comparison-table-component';

describe('StatComparisonTableComponent', () => {
  let component: StatComparisonTableComponent;
  let fixture: ComponentFixture<StatComparisonTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatComparisonTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatComparisonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
