import {Injectable} from '@angular/core';
import {Disziplin} from "../meldungen/disziplin";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../message.service";
import {Observable} from "rxjs/Observable";
import {Ranglisteneintrag} from "./ranglisteneintrag";

@Injectable()
export class RanglisteService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private ranglisteUrl = 'http://localhost:8080/rangliste';

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getRangliste(disziplin: Disziplin): Observable<Ranglisteneintrag[]> {
    this.log('fetched rangliste');
    console.log('fetched rangliste');

    return this.http.get<Ranglisteneintrag[]>(`${this.ranglisteUrl}/${disziplin}`)
      .do(res => console.log('HTTP response:', res));
  }

  /** Log a TurnierService message with the MessageService */
  private log(message: string) {
    this.messageService.add('RanglisteService: ' + message);
  }
}
