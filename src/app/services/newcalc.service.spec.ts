import { TestBed, inject } from '@angular/core/testing';

import { NewcalcService } from './newcalc.service';

describe('NewcalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewcalcService]
    });
  });

  it('should be created', inject([NewcalcService], (service: NewcalcService) => {
    expect(service).toBeTruthy();
  }));
});
