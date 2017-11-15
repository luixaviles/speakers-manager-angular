import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Speakers, Speaker } from '../model';

const SPEAKERS_URL = 'http://localhost:3000/speakers';

@Injectable()
export class SpeakerService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Speakers> {
    return this.httpClient.get<Speakers>(`${SPEAKERS_URL}`);
  }

  get(id: number | string): Observable<Speaker> {
    return this.httpClient.get<Speaker>(`${SPEAKERS_URL}/${id}`);
  }

  add(speaker: Speaker): Observable<Speaker> {
    return this.httpClient.post<Speaker>(`${SPEAKERS_URL}`, speaker);
  }

  update(speaker: Speaker): Observable<Speaker> {
    return this.httpClient.put<Speaker>(`${SPEAKERS_URL}/${speaker.id.value}`, speaker);
  }


}
