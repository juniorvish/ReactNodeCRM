import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Revenue = () => {
    const [revenueData, setRevenueData] = useState([]);

    useEffect(() => {
        const fetchRevenueData = async () => {
            const response = await axios.get('/api/revenue');
            setRevenueData(response.data);
        };

        fetchRevenueData();
    }, []);

    return (
        <div className="container">
            <h2 className="header">Revenue</h2>
            {revenueData.map((item, index) => (
                <div key={index} className="card">
                    <h3 className="content">{item.revenue}</h3>
                </div>
            ))}
        </div>
    );
};

export default Revenue;