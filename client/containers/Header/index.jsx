import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    handleAuthClick,
    handleSignoutClick,
    googleAuthorize,
} from '../../oath/goath';

class Header extends Component {
    componentWillMount = () => {
        googleAuthorize();
    }

    render = () => {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/profile'}>Profile</Link>
                    </li>
                </ul>
                <button onClick={handleAuthClick}>
                    Login
                </button>
        
                <button onClick={handleSignoutClick}>
                    Logout
                </button>
            </div>
        );
    }
}

export default Header;