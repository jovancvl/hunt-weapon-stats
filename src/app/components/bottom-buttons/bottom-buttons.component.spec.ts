import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomButtonsComponent } from './bottom-buttons.component';

describe('BottomButtonsComponent', () => {
  let component: BottomButtonsComponent;
  let fixture: ComponentFixture<BottomButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomButtonsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
