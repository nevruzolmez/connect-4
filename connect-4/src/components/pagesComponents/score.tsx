import React from 'react'
import { useSelector } from 'react-redux'
import { getBoard } from '../../reducers/boardSlice'

export default function Score() {
    const state = useSelector(getBoard);
    if(state.history.length === 0) return null;
    console.log(state.history.length)

  return (
    <div>
      {state.history.map(e => {
        return <li key={state.history.indexOf(e)}>{e[1] !== 0 ? `${e[0]} with ${e[1]}` : "Round Draw"}</li>
      })}
    </div>
  )
}
