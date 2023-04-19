import { TestBed } from '@angular/core/testing';

import { LoanappService } from './loanapp.service';

describe('LoanappService', () => {
  let service: LoanappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
