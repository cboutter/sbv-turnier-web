import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {MessageService} from './message.service';
import {Turnier} from './turnier/turnier';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {environment} from "../environments/environment";


@Injectable()
export class TurnierService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private turniereUrl = `${environment.apiUrl}/turnier`;

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getTurniere(): Observable<Turnier[]> {
    // Todo: send the message _after_ fetching the heroes
    this.log('fetched turniere');
    console.log('fetched turniere');

    return this.http.get<Turnier[]>(this.turniereUrl)
      .do(res => console.log('HTTP response:', res));
  }

  getTurnier(id: number): Observable<Turnier> {
    // Todo: send the message _after_ fetching the hero
    this.log(`fetched turnier id=${id}`);
    console.log(`fetched turnier id=${id}`);
    return this.http.get<Turnier>(`${this.turniereUrl}/${id}`)
      .do(res => console.log('HTTP response:', res));
  }

  /** Log a TurnierService message with the MessageService */
  private log(message: string) {
    this.messageService.add('TurnierService: ' + message);
  }

  save(turnier: Turnier): Observable<Turnier> {
    this.log('saved turnier');
    const turnierJson = JSON.stringify(turnier);
    console.log(`saving turnier ${turnierJson}`);
    return this.http.post<Turnier>(this.turniereUrl, turnier, this.httpOptions)
      .do(res => console.log('HTTP response:', res));
  }
}
