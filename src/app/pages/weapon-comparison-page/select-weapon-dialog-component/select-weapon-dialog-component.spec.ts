import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWeaponDialogComponent } from './select-weapon-dialog-component';

describe('SelectWeaponDialogComponent', () => {
  let component: SelectWeaponDialogComponent;
  let fixture: ComponentFixture<SelectWeaponDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectWeaponDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectWeaponDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
