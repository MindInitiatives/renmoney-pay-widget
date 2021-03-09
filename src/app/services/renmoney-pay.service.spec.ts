import { TestBed } from '@angular/core/testing';

import { RenmoneyPayService } from './renmoney-pay.service';

describe('RenmoneyPayService', () => {
  let service: RenmoneyPayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenmoneyPayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
