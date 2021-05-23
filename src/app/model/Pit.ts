export class Pit {
    id: string;
    index: number;
    ownSeeds: number;
    rivalSeeds: number;

    constructor(id: string, index: number, ownSeeds: number, rivalSeeds: number) {
        this.id = id;
        this.index = index;
        this.ownSeeds = ownSeeds;
        this.rivalSeeds = rivalSeeds;
    }
}
