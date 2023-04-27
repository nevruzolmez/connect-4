import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getBoard,getTurn} from '../../reducers/boardSlice';

export default function Header() {
    const state = useSelector(getBoard);
    const turn = state.turn
    
    useEffect(() => {
    },[turn])
  return (
    <div className='bxheader'>
        <h2>{state.turn} IS PLAYING!!</h2>
        <br></br>
        <h3>Move Counter : {state.counter}</h3>
    </div>
  )
}
