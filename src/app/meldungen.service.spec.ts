import {TestBed, inject} from '@angular/core/testing';

import {MeldungenService} from './meldungen.service';

describe('MeldungenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeldungenService]
    });
  });

  it('should be created', inject([MeldungenService], (service: MeldungenService) => {
    expect(service).toBeTruthy();
  }));
});
