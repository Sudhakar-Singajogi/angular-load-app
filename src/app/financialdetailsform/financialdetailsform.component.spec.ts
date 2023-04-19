import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialdetailsformComponent } from './financialdetailsform.component';

describe('FinancialdetailsformComponent', () => {
  let component: FinancialdetailsformComponent;
  let fixture: ComponentFixture<FinancialdetailsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialdetailsformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialdetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
