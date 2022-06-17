import React from 'react';
import classes from './header.css';
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg'
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

function Header({currentUser}) {

    return (
        <div>
            <Link to='/'><Logo/></Link>
            <Link to='/employee-listing'>Employee listing</Link>
            <Link to='/employee-filter'>Employee filter</Link>
            <Link to='/formik-form'>Formik Form </Link>
            {
                currentUser ?
                    <div onClick={() => auth.signOut()}>Sign out</div>
                    :
                    <Link to='/sign-in'>Sign in</Link>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);