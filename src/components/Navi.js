import React from 'react';
import {Link} from 'react-router-dom';

const Navi = () => {

    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Profile">Profile</Link>
            </li>
        </ul>
    )
}

export default Navi;