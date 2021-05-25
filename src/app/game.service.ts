import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InitialData } from './model/InitialData';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl = 'http://localhost:8080/games'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpCliant: HttpClient) {}

  createGame(playerNames: InitialData) {
    // TODO add error handling
    return this.httpCliant.post(this.baseUrl, playerNames, this.httpOptions);
  }
}
