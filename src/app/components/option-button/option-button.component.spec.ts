import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionButtonComponent } from './option-button.component';

describe('OptionButtonComponent', () => {
  let component: OptionButtonComponent;
  let fixture: ComponentFixture<OptionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
