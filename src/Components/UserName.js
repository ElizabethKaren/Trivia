import React from 'react'

const UserName = props => {
    return (
        <div className='form'>
            <br></br>
            <h3>Enter Username</h3>
            <input onChange={props.handleOnChange} placeholder='Player...'></input>
            <br></br><br></br>
            <button onClick={props.updateUser}>Start</button>
        </div>
    )
}

export default UserName