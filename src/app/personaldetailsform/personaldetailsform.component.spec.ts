import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldetailsformComponent } from './personaldetailsform.component';

describe('PersonaldetailsformComponent', () => {
  let component: PersonaldetailsformComponent;
  let fixture: ComponentFixture<PersonaldetailsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaldetailsformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaldetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
