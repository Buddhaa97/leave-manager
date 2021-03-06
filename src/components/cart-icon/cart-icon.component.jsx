import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg.svg';
import './cart-icon.styles.scss';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';

const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToprops = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToprops)(CartIcon);
