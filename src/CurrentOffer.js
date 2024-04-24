import React from 'react';
import './CurrentOffer.css'; 

function CurrentOffer() {
    const offers = [
        {
            title: '10% Off on Your Next Ride',
            code: 'RIDE10',
        },
        {
            title: '15% Off on Outstation Rides',
            code: 'OUT15',
        },
        {
            title: 'Flat ₹200 Off on Premium Rides',
            code: 'PREMIUM200',
        },
        {
            title: '₹50 Off on Auto Rides',
            code: 'AUTO50',
        },
        {
            title: '₹100 Off on SUVs',
            code: 'SUV100',
        },
    ];

    return (
        <div className="offers-container">
            <h1>Current Offers</h1>
            {offers.map((offer, index) => (
                <div className="offer-card" key={index}>
                    <h2>{offer.title}</h2>
                    <p>Use code: <span className="offer-code">{offer.code}</span></p>
                </div>
            ))}
        </div>
    );
}

export default CurrentOffer;
