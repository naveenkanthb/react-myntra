import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdowm.styles.scss'

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
)

export default CartDropdown