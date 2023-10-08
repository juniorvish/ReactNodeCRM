import React, { useState, useEffect } from 'react';
import Element from './Element';
import axios from 'axios';

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState([]);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        const response = await axios.get('/api/dashboard');
        setDashboardData(response.data);
    };

    const handleDragStart = (e, id) => {
        e.dataTransfer.setData('id', id);
    };

    const handleDrop = (e, id) => {
        const draggedId = e.dataTransfer.getData('id');
        // Implement logic to update the state based on the dragged and dropped element
    };

    return (
        <div className="container">
            {dashboardData.map((element) => (
                <div
                    key={element.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, element.id)}
                    onDrop={(e) => handleDrop(e, element.id)}
                    className="card"
                >
                    <Element data={element} />
                </div>
            ))}
        </div>
    );
};

export default Dashboard;