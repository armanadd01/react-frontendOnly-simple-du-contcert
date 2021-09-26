import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import Cart from '../Cart/Cart';
import './Main.css'

const Main = () => {
    //useState
    const [bands, setBands] = useState([]);
    const [cart, setCart] = useState([]);
    // useEffect for fetch data
    useEffect(() => {
        fetch('./bandDb.JSON')
        .then(res => res.json())
        .then(data => setBands(data));
    }, []);
    // Arrow function for handle cart data
    const addToCart = (band) => {
        const newCart = [...cart, band];
        setCart(newCart);
    }

    return (
        <div className="main">
            <div className="band-container">
                {
                    bands.map(band => <Band
                        key={band.key}
                        band={band}
                        addToCart={addToCart}
                    >
                    </Band>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                
            
            </div>
        </div>
    );
};

export default Main;