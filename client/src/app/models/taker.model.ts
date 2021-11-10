export class TakerModel {
    constructor(
        public amount: number = 0,
        public proof: string = '',
        public nullifierHash: string = '',
        public root: string = '',
    ) {}
}