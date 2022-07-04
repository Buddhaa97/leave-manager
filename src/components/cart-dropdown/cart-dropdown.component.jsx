import React from 'react';
import Button from '../button/button.component';
import './cart-dropdown.style.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-item"/>
        <Button>go to checkout</Button>
    </div>
)

export default CartDropdown;