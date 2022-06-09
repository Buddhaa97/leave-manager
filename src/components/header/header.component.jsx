import React from 'react';
import classes from './header.css';
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg'
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

function Header({currentUser}) {

    return (
        <div>
            <Link to='/'><Logo/></Link>
            <Link to='/employee-listing'>Employee listing</Link>
            <Link to='/employee-filter'>Employee filter</Link>
            {
                currentUser ?
                    <div onClick={() => auth.signOut()}>Sign out</div>
                    :
                    <Link to='/sign-in'>Sign in</Link>
            }
        </div>
    )
}

export default Header;