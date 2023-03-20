import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Gametype } from "../types";

const initialState: Gametype = {
    board: [
        ["-","-","-","-","-","-","-"],
        ["-","-","-","-","-","-","-"],
        ["-","-","-","-","-","-","-"],
        ["-","-","-","-","-","-","-"],
        ["-","-","-","-","-","-","-"],
        ["-","-","-","-","-","-","-"],
    ],
    players:[],
    turn: "",
    counter: 42,
    winner:"",
    history: [],
  };
  
  export const boardSlice = createSlice({
    name: 'board',
    initialState: initialState,
    reducers: {
        getUser: (state, action) => {
            console.log("GET USER CLICEKD")
            state.players = action.payload;
            let player1 = state.players[0];
            let player2 = state.players[2];
            if(state.turn === "") {
                let temp = Math.round(Math.random());
                let tempArr = [player1,player2];
                state.turn = tempArr[temp]
            }
        },
        play: (state,action) => {
            let coordinate = action.payload.split("-");
            let table = state.board;
            let counter = state.counter - 1;
            let col = coordinate[1];
            let player1 = state.players[0];
            let player2 = state.players[2];
            for(let row = table.length-1; row >=0; row--) {
                if(table[row][col] === "-") {
                    if(state.turn === player1) {
                        table[row][col] = "R";
                        state.turn = player2;
                        break;
                    }else if (state.turn === player2) {
                        table[row][col] = "Y";
                        state.turn = player1;
                        break;
                    }
                }
            }
            state.counter = counter

        },
        scoreCheck: (state,action) => {
            let table = state.board;
            let player1 = state.players[0];
            let player2 = state.players[2];
            function rowCheck() {
                for(let r = 0; r < table.length; r++) {
                    for(let c = 0; c + 3< table[0].length; c++) {
                        if(table[r].slice(c,c+4).join("") === "RRRR"){
                            state.winner = player1;
                        }else if (table[r].slice(c,c+4).join("") === "YYYY") {
                            state.winner = player2;
                        }
                    }
                }
                return state.winner;
            };
            function colCheck() {
                let stack:String[] = [];
                let tempStr:String = "";
                for(let c = 0; c < table[0].length; c++) {
                    tempStr = "";
                    for(let r = table.length-1; r > 0; r--) {
                        tempStr+= table[r][c];
                    }
                    stack.push(tempStr);
                }
                for(let str of stack) {
                    for(let i = 0; i+3<str.length; i++) {
                        let temp = str.substring(i,i+4);
                        if(str.substring(i,i+4) === "RRRR") {
                            state.winner = player1;
                            return state.winner;
                        }
                        if(str.substring(i,i+4) === "YYYY"){
                            state.winner = player2;
                            return state.winner;
                        }
                    }
                }
            };
            function diagonalCheck() {
                let stack:String[] = [];
                let tempStr:String = "";
                for(let r = 0; r < 3; r++) {
                    let row = r;
                    let col = 0;
                    tempStr = ""
                    while(col < table[0].length && row < table.length) {
                        tempStr+= table[row][col];
                        row++;
                        col++;
                    }
                    stack.push(tempStr)
                };
                for(let c = 1; c < 4; c++) {
                    let col = c;
                    let row = 0;
                    tempStr = "";
                    while(col < table[0].length && row < table.length) {
                        tempStr +=table[row][col];
                        row++;
                        col++
                    }
                    stack.push(tempStr)
                };
                for(let r = 0; r < 3; r++) {
                    let row = r;
                    let col = table[0].length-1;
                    tempStr = "";
                    while(col >=0 && row <table.length) {
                        tempStr +=table[row][col];
                        row++;
                        col--;
                    }
                    stack.push(tempStr)
                };
                for(let c = table[0].length-2; c >=4; c--) {
                    let col = c;
                    let row = 0;
                    tempStr = "";
                    while(col >=0 && row < table.length) {
                        tempStr += table[row][col];
                        row++;
                        col--
                    }
                    stack.push(tempStr)
                }
                for(let str of stack) {
                    for(let i = 0; i+3<str.length; i++) {
                        let temp = str.substring(i,i+4);
                        if(str.substring(i,i+4) === "RRRR") {
                            state.winner = player1;
                            return state.winner;
                        }
                        if(str.substring(i,i+4) === "YYYY"){
                            state.winner = player2;
                            return state.winner;
                        }
                    }
                }
                };
                rowCheck();
                colCheck();
                diagonalCheck();
                if(state.winner === player1 || state.winner === player2){
                    console.log("THE WINNER IS ==> ", state.winner)
                }
                if(state.winner !== "") {
                    state.history.push([state.winner,state.counter])
                }
        },
        getTurn: (state,action) => {
            return state.turn
        },
        historyGet: (state,action) => {
            state.history = action.payload
        },
        resetGame: () => initialState,
        },
    },
);
export const {play, getUser, scoreCheck,getTurn,resetGame,historyGet} = boardSlice.actions;
export const getBoard = (state:RootState) => state.board;
export const getPlayers = (state:RootState) => state.board.players
export default boardSlice.reducer;
//   export const selectCategories = (state:RootState) => state.item.categories;
//   export const selectItems = (state:RootState) => state.item.items;
//   export const selectUser = (state:RootState) => state.item.user;
  
//   export default itemSlice.reducer;
  
  
  