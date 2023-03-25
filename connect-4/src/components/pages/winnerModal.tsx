import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBoard, getUser, historyGet, resetGame } from '../../reducers/boardSlice'
import ReactDOM  from 'react-dom';
import Score from '../pagesComponents/score';

export default function Winnermodal() {
    const state = useSelector(getBoard);
    const dispatch = useDispatch();

    if(state.winner === "" && state.counter > 0) return null;

    function newGame () {
        let players = state.players;
        let history = state.history;
        dispatch(resetGame())
        dispatch(getUser(players));
        dispatch(historyGet(history))
    }

  return ReactDOM.createPortal (
    <>
    <div className='page-modal-overlay'></div>
    <div className='page-modal'>
        <div className='text-winner'>{state.winner !== "" ? `CONGRATS! ${state.winner}, YOU WON` : "Round Draw!"}</div>
        <br></br>
        <div className='text-winner'> {state.counter !== 0 ? `Score : ${state.counter}` : ""} </div>
        <br></br>
        <button className='btn-modal' onClick={newGame}>Start a new game!</button>
        <br></br>
        <Score/>
    </div>
    </>,
    document.getElementById('winner') as HTMLElement
  )
}
