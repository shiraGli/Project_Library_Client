import { TestBed } from '@angular/core/testing';

import { BookOnLoanService } from './book-on-loan.service';

describe('BookOnLoanService', () => {
  let service: BookOnLoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookOnLoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
