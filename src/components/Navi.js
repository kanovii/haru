import React from 'react';
import {Link} from 'react-router-dom';

const Navi = () => {

    return (
        <ul className='navi_container'>
            <li>
                <Link className='navi' to="/">Home</Link>
            </li>
            <li>
                <Link className='navi' to="/Profile">Profile</Link>
            </li>
        </ul>
    )
}

export default Navi;