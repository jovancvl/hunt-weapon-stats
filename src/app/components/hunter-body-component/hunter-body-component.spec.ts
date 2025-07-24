import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HunterBodyComponent } from './hunter-body-component';

describe('HunterBodyComponent', () => {
  let component: HunterBodyComponent;
  let fixture: ComponentFixture<HunterBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HunterBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HunterBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
