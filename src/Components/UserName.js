import React from 'react'

const UserName = props => {
    return (
        <div>
            <h1>Enter Username</h1>
            <input onChange={props.handleOnChange} placeholder='Trivia Player...'></input>
            <button onClick={props.updateUser}>Play Triva</button>
        </div>
    )
}

export default UserName