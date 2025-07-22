import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusEffectComponent } from './status-effect-component';

describe('StatusEffectComponent', () => {
  let component: StatusEffectComponent;
  let fixture: ComponentFixture<StatusEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
