import { TestBed } from '@angular/core/testing';

import { OrphansServiceService } from './orphans-service.service';

describe('OrphansServiceService', () => {
  let service: OrphansServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrphansServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
