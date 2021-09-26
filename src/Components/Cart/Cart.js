import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let totalBand = 0;
    let total = 0;
    let bandName = "";
    for ( const band of cart) {
        if (!band.quantity) {
            band.quantity = 1;
        }
        bandName = bandName + band.name ;
        total = total + band.budget;
        totalBand = totalBand + band.quantity;
    }


    return (
        <div className="cart-section">
            <div className="total-section">
                <h3>Band Added</h3>
                <h5>Total Band Added: {totalBand}</h5>
                <p>Total: {total}</p>
            </div>
            <div className="band-section">
                <h1>{bandName}</h1>
            </div>
            
        </div>
    );
};

export default Cart;