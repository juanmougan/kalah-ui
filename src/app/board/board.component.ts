import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Board } from '../model/Board';
import { Game } from '../model/Game';
import { mockBoard, emptyBoard } from './mock-board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  // board: Board = mockBoard;
  // TODO receive from network
  board = emptyBoard;
  gameStarted = false;
  gameId = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  gameCreatedOrUpdatedHandler(gameData: any) {
    const boardData = gameData.board;
    this.gameStarted = true;
    // TODO get from response
    console.log("Board data>>>");
    console.log(boardData);
    console.log("next player");
    console.log(boardData.currentPlayer);
    this.board = boardData;
    this.gameId = gameData.id;
    console.log(this.gameId);
  }

  onPitSelected(pitIndex: number, type: string) {
    this.gameService.move(this.gameId, {pit: pitIndex, playerType: type})
      .subscribe(
        game => this.gameCreatedOrUpdatedHandler(game),
        err => this.errorPerformingMovement(err),
      );
  }

  errorPerformingMovement(err: any) {
    // TODO show some error here
    console.error("Error performing movement: ", err);
  }

  // TODO refactor these methods, they look almost the same
  getSouthOwnSeeds() {
    return this.board.south.pits.map(p => p.ownSeeds);
  }

  getNorthOwnSeeds() {
    return this.board.north.pits.map(p => p.ownSeeds);
  }

  getSouthRivalSeeds() {
    return this.board.south.pits.map(p => p.rivalSeeds);
  }

  getNorthRivalSeeds() {
    return this.board.north.pits.map(p => p.rivalSeeds);
  }
}
