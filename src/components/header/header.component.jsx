import React from 'react';
import classes from './header.css';
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg'
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

function Header({currentUser, hidden}) {

    return (
        <div>
            <div>
            <Link to='/'><Logo/></Link> <br/>
            <Link to='/employee-listing'>Employee listing</Link><br/>
            <Link to='/employee-filter'>Employee filter</Link><br/>
            <Link to='/formik-form'>Formik Form </Link><br/>
            <Link to='/record-level'>Record Level </Link><br/>
            <Link to='/final-form'>Final form </Link><br/>
            {/*<Link to='/redux-example'>Redux Example </Link><br/>*/}
            {
                currentUser ?
                    <div onClick={() => auth.signOut()}>Sign out</div>
                    :
                    <Link to='/sign-in'>Sign in</Link>
            }
            <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({//state is root reducer
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);