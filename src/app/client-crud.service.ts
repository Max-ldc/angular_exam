import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Client from './client/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientCrudService {

  clientsUrl = "https://macmickey.azurewebsites.net/Client";

  constructor(private http: HttpClient) { }

  getClient(): Observable<Client> {
    return this.http.get<Client>(this.clientsUrl);
  }
}
