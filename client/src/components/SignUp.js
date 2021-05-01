import React from 'react';

function SignUp({onClick, onUserNameChange, onPasswordChange, userExist, setUserExist}) {
    return (userExist ?
        <div className = 'nameError'>
            The name entered already exists
            <button onClick = {() => setUserExist(false)}>sign up</button>
        </div> 
    :
        <div className = 'signUpContainer container'>
            <div className = 'userName'>
                <label>Name:</label>
                <input onChange = {onUserNameChange} type = 'text' />
            </div>
            <div className = 'password'>
                <label>password</label>
                <input onChange = {onPasswordChange} type = 'password' />
            </div>
            <button onClick = {onClick}>Sign-up</button>
        </div>
    );
}

export default SignUp;