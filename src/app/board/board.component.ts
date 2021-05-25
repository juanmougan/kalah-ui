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
  gameOver = false;
  gameOverMessage = ''
  gameId = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  gameCreatedOrUpdatedHandler(gameData: any) {
    const boardData = gameData.board;
    this.gameStarted = true;
    this.board = boardData;
    this.gameId = gameData.id;
    this.gameOver = gameData.status.endsWith('_WINS') || gameData.status === 'DRAW'
    if (this.gameOver) {
      this.gameOverMessage = this.getGameOverMessage(gameData.status);
    }
  }

  private getGameOverMessage(status: string) {
    return status.split("_").join(" ");
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
