import { TestBed } from '@angular/core/testing';

import { RouteGuardEditService } from './route-guard-edit.service';

describe('RouteGuardEditService', () => {
  let service: RouteGuardEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
