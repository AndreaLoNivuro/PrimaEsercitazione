import { TestBed } from '@angular/core/testing';

import { RouteGuardLoginService } from './route-guard-login.service';

describe('RouteGuardLoginService', () => {
  let service: RouteGuardLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
