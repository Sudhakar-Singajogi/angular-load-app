import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewapplicantComponent } from './newapplicant.component';

describe('NewapplicantComponent', () => {
  let component: NewapplicantComponent;
  let fixture: ComponentFixture<NewapplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewapplicantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewapplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
