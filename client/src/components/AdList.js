import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdList = () => {
    const [ads, setAds] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/advertisements');
                setAds(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {ads.filter(ad => ad.pixelWidth === ad.pixelHeight).map(ad => (
                <div key={ad._id}>
                    <img src={ad.image} alt={ad.name} width={ad.pixelWidth} height={ad.pixelHeight} />
                    <h2>{ad.name}</h2>
                    <p>{ad.details}</p>
                    <p>Cost: {ad.cost}</p>
                </div>
            ))}
        </div>
    );
}
    
export default AdList;