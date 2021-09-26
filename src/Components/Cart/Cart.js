import React from 'react';
import './Cart.css'

const Cart = (props) => {
    //destructuring data
    const { cart } = props;
    let totalBand = 0;
    let total = 0;
    // for loop
    for ( const band of cart) {
        if (!band.quantity) {
            band.quantity = 1;
        }
        total = total + band.budget;
        totalBand = totalBand + band.quantity;
    }


    return (
        <div className="cart-section">
            <div className="total-section">
                <h3>Band Added</h3>
                <h5>Total Band Added: {totalBand}</h5>
                <p>Total: BDT {total} TK</p>
            </div>
                {/* this section for listing short data of band */}
                {
                    cart.map(band => <div className="band-section"><img src={band.img} alt="" /><h5>{band.name}</h5></div>)
                }
            
            
        </div>
    );
};

export default Cart;