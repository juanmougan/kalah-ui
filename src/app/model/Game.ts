import { Board } from "./Board";

export class Game {
    id: string;
    status: string;
    board: Board;

    constructor(id: string, status: string, board: Board) {
        this.id = id;
        this.status = status;
        this.board = board;
    }
}
