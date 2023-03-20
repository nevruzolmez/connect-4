export interface Playertype {
    player1: any,
    player1Age: number,
    player2: any,
    player2Age:number
}

export interface Gametype {
    board: string[][],
    players: any[],
    turn: any,
    counter: number,
    winner:any,
    history: [string,number] []

}