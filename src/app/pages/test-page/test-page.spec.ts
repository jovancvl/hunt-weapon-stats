import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPage } from './test-page';

describe('TestPage', () => {
  let component: TestPage;
  let fixture: ComponentFixture<TestPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
