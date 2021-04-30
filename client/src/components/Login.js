import React from 'react';
import {Link} from 'react-router-dom';

function Login(props) {
    return (
        <div className = 'loginContainer'>
            
            <Link to = '/quiz'>Quiz</Link>
        </div>
    );
}

export default Login;