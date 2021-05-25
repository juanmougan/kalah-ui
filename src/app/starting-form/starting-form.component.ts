import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameService } from '../game.service';
import { Board } from '../model/Board';
import { Game } from '../model/Game';
import { InitialData } from '../model/InitialData';

@Component({
  selector: 'app-starting-form',
  templateUrl: './starting-form.component.html',
  styleUrls: ['./starting-form.component.css']
})
export class StartingFormComponent implements OnInit {

  southName = '';
  northName = '';
  submitted = false;
  @Output() gameCreated: EventEmitter<Game> = new EventEmitter()

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.gameService.createGame({playerSouth: this.southName, playerNorth: this.northName})
      .subscribe(
        game => this.onGameCreated(game),
        err => this.onError(err),
      );
    
  }

  onGameCreated(game: Game) {
    this.submitted = true;
    this.gameCreated.emit(game);
  }

  onError(err: any) {
    // TODO add error handling
  }

}
