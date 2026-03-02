import { TestBed } from '@angular/core/testing';

import { AichaResService } from './aicha-res-service';

describe('AichaResService', () => {
  let service: AichaResService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AichaResService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
