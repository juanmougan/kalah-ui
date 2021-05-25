import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InitialData } from './model/InitialData';
import { Game } from './model/Game';
import { Observable } from 'rxjs';
import { MoveRequest } from './model/MoveRequest';

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

  constructor(private httpClient: HttpClient) {}

  createGame(playerNames: InitialData): Observable<Game> {
    // TODO add error handling
    return this.httpClient.post<Game>(this.baseUrl, playerNames, this.httpOptions);
  }

  move(gameId: string, request: MoveRequest): Observable<Game> {
    return this.httpClient.patch<Game>(`${this.baseUrl}/${gameId}`, request, this.httpOptions);
  }
}
