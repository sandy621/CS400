import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LOCATION } from './models/location';

@Injectable({
  providedIn: 'root'
})

export class ApiCallService {

  constructor(private httpClient: HttpClient) { }

  private url = 'localhost:3000/ps6?ip=';

  getLocation(ipAddress: string): Observable<LOCATION[]> {
    return this.httpClient.get<LOCATION[]>(this.url + ipAddress);

  }
}
