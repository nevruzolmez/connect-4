import { getUser,getBoard } from "../../reducers/boardSlice";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";

export default function Usercreator () {
  const dispatch = useDispatch();
  const board = useSelector(getBoard);
  const [loginSuccess, Setloginsuccess] = useState(true)
  
  const createPlayer = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const player1Name = document.querySelector('#playerOneNick') as HTMLInputElement;
    const player1Age = document.querySelector('#playerOneAge') as HTMLInputElement;
    const player2Name = document.querySelector('#playerTwoNick') as HTMLInputElement;
    const player2Age = document.querySelector('#playerTwoAge') as HTMLInputElement;
    console.log(player1Name.value,player2Name.value);
    console.log("HERE IS THE BOARD STATE ==> ",board);
    if(player1Name.value === "" || player2Name.value === "") {
      Setloginsuccess(false)
    }else {
      let userInfo = [player1Name.value,player1Age.value,player2Name.value,player2Age.value];
      dispatch(getUser(userInfo));
      Setloginsuccess(true)
    }
  }
    return (
      <>
      <div className="login">
        <form className="player-form" onSubmit={createPlayer}>
          <div className='player'>
              <div className='player-header'>Player-1</div> 
                <input className='player-input' id='playerOneNick' type='text' placeholder='Player Nickname'></input>
                <input className='player-input' id='playerOneAge' type='number' placeholder='Player Age'></input>
              <div className='player-header'>Player-2</div> 
                <input className='player-input' id='playerTwoNick' type='text' placeholder='Player Nickname'></input>
                <input className='player-input' id='playerTwoAge' type='number' placeholder='Player Age'></input>
                <br></br>
              <div className="btn-login">
                <button className="player-creator" type="submit" >Create Players</button>
              </div>
          </div>
        </form>
        {loginSuccess === false ? <div className="tryagain">Please fill the form</div> : ""}
      </div>
      </>
      );
}
