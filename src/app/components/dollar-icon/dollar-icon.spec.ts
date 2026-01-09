import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarIcon } from './dollar-icon';

describe('DollarIcon', () => {
  let component: DollarIcon;
  let fixture: ComponentFixture<DollarIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DollarIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DollarIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
