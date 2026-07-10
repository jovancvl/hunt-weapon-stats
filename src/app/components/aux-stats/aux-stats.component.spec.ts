import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxStatsComponent } from './aux-stats.component';

describe('AuxStatsComponent', () => {
  let component: AuxStatsComponent;
  let fixture: ComponentFixture<AuxStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuxStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuxStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
