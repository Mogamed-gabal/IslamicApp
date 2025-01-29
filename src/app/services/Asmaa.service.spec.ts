import { TestBed } from '@angular/core/testing';

import { AzkarService } from './Aamaa.service';

describe('AzkarService', () => {
  let service: AzkarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzkarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
