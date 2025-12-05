import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifleCompareComponent } from './rifle-compare-component';

describe('RifleCompareComponent', () => {
  let component: RifleCompareComponent;
  let fixture: ComponentFixture<RifleCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RifleCompareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RifleCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
