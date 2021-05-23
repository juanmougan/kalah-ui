import { Component, OnInit } from '@angular/core';
import { Board } from '../model/Board';
import { mockBoard } from './mock-board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  // board: Board = mockBoard;
  // TODO receive from network
  board = mockBoard;

  constructor() { }

  ngOnInit(): void {
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
