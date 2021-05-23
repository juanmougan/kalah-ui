import { Player } from "./Player";

export class Board {
    id: string;
    nextPlayer: Player;
    south: Player;
    north: Player;

    constructor(id: string, nextPlayer: Player, south: Player, north: Player) {
        this.id = id;
        this.nextPlayer = nextPlayer;
        this.south = south;
        this.north = north;
        this.nextPlayer = nextPlayer;
        this.south = south;
        this.north = north;
    }
}
