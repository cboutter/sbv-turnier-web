import {TestBed, inject} from '@angular/core/testing';

import {TurnierService} from './turnier.service';

describe('TurnierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TurnierService]
    });
  });

  it('should be created', inject([TurnierService], (service: TurnierService) => {
    expect(service).toBeTruthy();
  }));
});
