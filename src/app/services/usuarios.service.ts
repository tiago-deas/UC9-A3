import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = "http://localhost:3000/users"

  constructor(private httpClient: HttpClient) { }

  getUsuarios(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url)
}
}
