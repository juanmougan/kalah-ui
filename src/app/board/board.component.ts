import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  southPlayerName = 'South'
  northPlayerName = 'North'
  southPlayerKalahSeeds = 3
  northPlayerKalahSeeds = 2

  southOwnSeeds = [1, 0, 1, 1, 0, 1]
  southRivalSeeds = [0, 1, 1, 3, 2, 5]
  northOwnSeeds = [6, 6, 6, 6, 6, 6]
  northRivalSeeds = [3, 1, 2, 3, 1, 0]

  constructor() { }

  ngOnInit(): void {
  }

}
