import { Component, OnInit } from '@angular/core';
import { Board } from '../model/Board';
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

  constructor() { }

  ngOnInit(): void {
  }

  // gameCreatedHandler(boardData: Board) {
  gameCreatedHandler(boardData: any) {
    console.log(boardData);
    this.gameStarted = true;
    // TODO get from response
    console.log("Board data>>>");
    console.log(boardData);
    console.log("next player");
    console.log(boardData.nextPlayer);
    this.board = boardData;
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
