import React from 'react';
import {Link} from 'react-router-dom';

function Login({onPasswordChange, onUserNameChange}) {
    return (
        <>
            <div className = 'loginContainer'>
                <div className = 'userName'>
                    <label>Name:</label>
                    <input onChange = {onUserNameChange} type = 'text' />
                </div>
                <div className = 'password'>
                    <label>password</label>
                    <input type = 'password' />
                </div>
                <button>Login</button>
                <button>Sign-up</button>
            </div>
            <Link to = '/quiz'>Quiz</Link>
        </>
    );
}

export default Login;