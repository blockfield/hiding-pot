export class TakerModel {
    constructor(
        public amount: number = 10,
        public proof: string = '',
        public nullifierHash: string = '',
        public root: string = '',
    ) {}
}