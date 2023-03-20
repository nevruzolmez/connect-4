import { useSelector, useDispatch } from 'react-redux';
import { getBoard,getPlayers,play,scoreCheck } from '../../reducers/boardSlice';
import Usercreator from '../pages/userForm';
import Header from './header';
import Winnermodal from '../pages/winnerModal';


const Board = () => {
    const dispatch = useDispatch();
    const state = useSelector(getBoard);
    const players = useSelector(getPlayers);
    const board = state.board
    const boxes = [];
    let rows = []


    const playGame = (e:any) => {
      dispatch(play(e.target.id));
      dispatch(scoreCheck(e.target.id));
    }

    for(let r = 0; r < board.length; r++) {
      rows = [];
      for(let c = 0; c < board[0].length; c++) {
        const boxid = `${r}-${c}`;
        const boxValue = board[r][c];
        if(boxValue === "-") {
          rows.push(<button className='btn4' key={boxid} id={boxid} onClick={playGame}>{boxValue}</button>)
        }else if (boxValue === "R") {
          rows.push(<button className='btn4R' key={boxid} id={boxid} onClick={playGame}>{boxValue}</button>)
        }else if (boxValue === "Y") {
          rows.push(<button className='btn4Y' key={boxid} id={boxid} onClick={playGame}>{boxValue}</button>)
        }
      }
      boxes.push(rows);
    }

    const handleClick = () => {
      console.log(board);
    }
    return (
      <>
        <Winnermodal/>
        {
          players.length === 0 ?
          <Usercreator/>:
          <div>
            <Header />
            <br></br>
            {boxes[0]}
            <br></br>
            {boxes[1]}
            <br></br>
            {boxes[2]}
            <br></br>
            {boxes[3]}
            <br></br>
            {boxes[4]}
            <br></br>
            {boxes[5]}
            <br></br>
          </div>
        }
      </>
      );
}

export default Board;