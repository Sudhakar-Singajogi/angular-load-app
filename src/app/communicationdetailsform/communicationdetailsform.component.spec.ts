import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationdetailsformComponent } from './communicationdetailsform.component';

describe('CommunicationdetailsformComponent', () => {
  let component: CommunicationdetailsformComponent;
  let fixture: ComponentFixture<CommunicationdetailsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationdetailsformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationdetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
