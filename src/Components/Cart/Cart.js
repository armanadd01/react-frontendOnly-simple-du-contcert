import React from 'react';
import './Cart.js'

const Cart = (props) => {
    const { cart } = props;
    let totalBand = 0;
    let total = 0;
    let bandName = "";
    for ( const band of cart) {
        
        bandName = bandName + band.name ;
        total = total + band.budget;
        totalBand = totalBand + 1;
    }
    const bandNameShow = () => {
        while(!bandName){
            <h1>{bandName}</h1>
        }
    }


    return (
        <div>
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