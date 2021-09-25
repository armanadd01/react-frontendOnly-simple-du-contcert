import React from 'react';
import './Band.css'

const Band = (props) => {
    const { name, estublished, img, song, member, budget} = props.band
    return (
        <div className="single-band">
            <div className="band-img">
                <img src={img} alt="" />
            </div>
            <div className="band-details">
                <h4><span>Band Name:</span> {name}</h4>
                <h5><span>Established:</span> {estublished}</h5>
                <p><span>Famous Song:</span> {song}</p>
                <p><span>Band Member:</span> {member}</p>
                <p><span>Budget:</span> BDT {budget} TK</p>
                <button
                    onClick={() => props.handleAddToCart(props.band)}
                    className="btn-info"
                >Add This Band</button>
            
            </div>
        </div>
    );
};

export default Band;