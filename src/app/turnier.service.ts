import {Injectable} from '@angular/core';

import {Turnier} from './turnier/turnier';
import {TURNIERE} from './mock-turniere';

@Injectable()
export class TurnierService {

  constructor() {
  }

  getTurniere(): Turnier[] {
    return TURNIERE;
  }

}
