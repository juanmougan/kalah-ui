import { Kalah } from "./Kalah";
import { Pit } from "./Pit";

export class Player {
    id: string;
    name: string;
    type: string;
    pits: Pit;
    kalah: Kalah;

    constructor(id: string, name: string, type: string, pits: Pit, kalah: Kalah) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.pits = pits;
        this.kalah = kalah;
    }
}
