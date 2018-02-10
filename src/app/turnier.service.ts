import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Turnier} from './turnier/turnier';
import {TURNIERE} from './mock-turniere';

@Injectable()
export class TurnierService {

  constructor() {
  }

  getTurniere(): Observable<Turnier[]> {
    return of(TURNIERE);
  }

}
