import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifleStatsComponent } from './rifle-stats-component';

describe('RifleStatsComponent', () => {
  let component: RifleStatsComponent;
  let fixture: ComponentFixture<RifleStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RifleStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RifleStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
