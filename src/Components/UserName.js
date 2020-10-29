import React from 'react'

const UserName = props => {
    return (
        <div className='form'>
            <br></br>
            <br></br>
            <h2>Enter Username</h2>
            <input onChange={props.handleOnChange} placeholder='  Trivia Player...'></input>
            <br></br><br></br>
            <button onClick={props.updateUser}>Play Triva</button>
            <h3>Ten Quesiton Trivia Game! Win up to 50 points!</h3>
        </div>
    )
}

export default UserName