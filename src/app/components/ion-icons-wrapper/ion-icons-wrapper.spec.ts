import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonIconsWrapper } from './ion-icons-wrapper';

describe('IonIconsWrapper', () => {
  let component: IonIconsWrapper;
  let fixture: ComponentFixture<IonIconsWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonIconsWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IonIconsWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
