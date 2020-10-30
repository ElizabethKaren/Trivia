import React from 'react'

const UserName = props => {
    return (
        <div className='form'>
            <br></br>
            <h3>Enter Username</h3>
            <input onChange={props.handleOnChange} placeholder='Player...'></input>
            <br></br><br></br>
            <button onClick={props.updateUser}>Start</button>
            <p><strong>Nerd Trivia: Ten Question Power Round!</strong></p> 
            <p><strong>Win up to 50 points!</strong></p>
            <p><strong>Two Rounds Per Player</strong></p>
        </div>
    )
}

export default UserName