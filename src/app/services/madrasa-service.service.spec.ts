import { TestBed } from '@angular/core/testing';

import { MadrasaServiceService } from './madrasa-service.service';

describe('MadrasaServiceService', () => {
  let service: MadrasaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MadrasaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
