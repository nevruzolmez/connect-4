import { getUser,getBoard } from "../../reducers/boardSlice";
import { useSelector,useDispatch } from "react-redux";

const createPlayer = () => {
  const dispatch = useDispatch();
  const board = useSelector(getBoard);

    return (
        <div className='player'>
            <div className='playerHeader'>Player-1</div> 
            <div className='playerCreator'>
              <input className='playerInput' id='playerOneNick' type='text' placeholder='Player Nickname'></input>
              <input className='playerInput' id='playerOneAge' type='number' placeholder='Player Age'></input>
            </div>
            <div className='playerHeader'>Player-2</div> 
            <div className='playerCreator'>
              <input className='playerInput' id='playerTwoNick' type='text' placeholder='Player Nickname'></input>
              <input className='playerInput' id='playerTwoAge' type='number' placeholder='Player Age'></input>
              {/* <button className='signUpButton' onClick={ onSignUpButtonClick }>Sign Up</button> */}
              {/* <button className='signUpButton' onClick={ onHaveAccountButtonClick }>Already Have Account?</button> */}
              {/* <div id="signUpFailText">{ passOrEmailErr }</div> */}
            </div>
            <div>
                {/* <button className="playerCreator" onClick={} >Create Players</button> */}
            </div>
        </div>
        
      );
}

export default createPlayer;