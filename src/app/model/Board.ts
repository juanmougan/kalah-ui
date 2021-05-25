import { Player } from "./Player";

export class Board {
    id: string;
    currentPlayer: Player;
    south: Player;
    north: Player;

    constructor(id: string, currentPlayer: Player, south: Player, north: Player) {
        this.id = id;
        this.currentPlayer = currentPlayer;
        this.south = south;
        this.north = north;
        this.currentPlayer = currentPlayer;
        this.south = south;
        this.north = north;
    }
}
