import React from 'react'

const UserName = props => {
    return (
        <div className='form'>
            <br></br>
            <h3>Enter Username</h3>
            <input onChange={props.handleOnChange} placeholder='Player...'></input>
            <br></br><br></br>
            <button onClick={props.updateUser}>Begin</button>
            <h3>Ten Quesitons A Game! Win up to 50 points!</h3>
        </div>
    )
}

export default UserName