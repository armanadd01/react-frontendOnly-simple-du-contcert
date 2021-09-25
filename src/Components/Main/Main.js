import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import Cart from '../Cart/Cart';
import './Main.css'

const Main = () => {
    const [bands, setBands] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./bandDb.JSON')
        .then(res => res.json())
        .then(data => setBands(data));
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="main">
            <div className="band-container">
                {
                    bands.map(band => <Band
                        key={band.key}
                        band={band}
                        handleAddToCart={handleAddToCart}
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