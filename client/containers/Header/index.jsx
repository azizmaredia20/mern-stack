import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <div>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/profile'}>Profile</Link>
            </li>
        </ul>
        <button>
            Login
        </button>
    </div>
);


export default Header;