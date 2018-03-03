import {TestBed, inject} from '@angular/core/testing';

import {RanglisteService} from './rangliste.service';

describe('RanglisteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RanglisteService]
    });
  });

  it('should be created', inject([RanglisteService], (service: RanglisteService) => {
    expect(service).toBeTruthy();
  }));
});
