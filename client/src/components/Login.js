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
                    <input onChange = {onPasswordChange} type = 'password' />
                </div>
                <button>Login</button>
                <Link to ='/signup'><button>Sign-up</button></Link>
            </div>
            <Link to = '/trivia'>Quiz</Link>
        </>
    );
}

export default Login;