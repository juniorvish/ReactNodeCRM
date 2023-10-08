import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sales = () => {
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        fetchSalesData();
    }, []);

    const fetchSalesData = async () => {
        try {
            const response = await axios.get('/api/sales');
            setSalesData(response.data.sales);
        } catch (error) {
            console.error('Error fetching sales data:', error);
        }
    };

    return (
        <div className="container">
            <h2 className="header">Sales</h2>
            {salesData.map((sale, index) => (
                <div key={index} className="card">
                    <h3 className="content">{sale.name}</h3>
                    <p className="content">{sale.amount}</p>
                </div>
            ))}
        </div>
    );
};

export default Sales;