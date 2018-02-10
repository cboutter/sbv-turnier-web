import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {MessageService} from './message.service';
import {Turnier} from './turnier/turnier';
import {TURNIERE} from './mock-turniere';

@Injectable()
export class TurnierService {

  constructor(private messageService: MessageService) {
  }

  getTurniere(): Observable<Turnier[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');

    return of(TURNIERE);
  }

}
