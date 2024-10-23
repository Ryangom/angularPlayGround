import { TestBed } from '@angular/core/testing';

import { PayrollButexService } from './payroll-butex.service';

describe('PayrollButexService', () => {
  let service: PayrollButexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayrollButexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
