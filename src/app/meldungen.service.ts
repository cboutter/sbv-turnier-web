import {Injectable} from '@angular/core';
import {TurnierService} from './turnier.service';

@Injectable()
export class MeldungenService {

  constructor(private turnierService: TurnierService) {
  }

}
