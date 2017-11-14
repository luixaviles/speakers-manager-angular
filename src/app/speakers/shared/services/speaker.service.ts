import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Speakers } from '../model';

const SPEAKERS_URL = 'http://localhost:3000/speakers';

@Injectable()
export class SpeakerService {

  constructor(private httpClient: HttpClient) { }

  getSpeakers(): Observable<Speakers> {
    return this.httpClient.get<Speakers>(`${SPEAKERS_URL}`);
  }
}
