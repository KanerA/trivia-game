import React from 'react';
import {Link} from 'react-router-dom';

function Login({onPasswordChange, onUserNameChange, onClick, loginError, setLoginError}) {
    return ( loginError ? 
            <div className = 'loginError'>
                Name or Password are incorrect, please try again or sign up
                <button onClick = {() => setLoginError(false)}>login</button>
                <Link to = '/signup'><button>sign up</button></Link>
            </div> 
        :
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
                    <button onClick = {onClick}>Login</button>
                    <Link to ='/signup'><button>Sign-up</button></Link>
                </div>
                <Link to = '/trivia'>Quiz</Link>
            </>
    );
}

export default Login;