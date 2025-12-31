export class Game {
    public players: Array<{
        name: string;
        id: number; 
        profileImg: string;
        backgroundColor: string;
    }> = []; 
    public cardStack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        this.addCards();
    }

    addCards() {
        for (let i = 1; i <= 13; i++) {
            this.cardStack.push(`ace_${i}`);
            this.cardStack.push(`clubs_${i}`);
            this.cardStack.push(`diamonds_${i}`);
            this.cardStack.push(`hearts_${i}`);
        }
        this.shuffle();
    }

    shuffle() {
        for (let i = this.cardStack.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [this.cardStack[i], this.cardStack[randomIndex]] = [this.cardStack[randomIndex], this.cardStack[i]];
        }
    }
}