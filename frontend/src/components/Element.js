import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Element = () => {
    const [elementData, setElementData] = useState([]);

    useEffect(() => {
        fetchElementData();
    }, []);

    const fetchElementData = async () => {
        const response = await axios.get('/api/element');
        setElementData(response.data);
    };

    const handleDragStart = (e, id) => {
        e.dataTransfer.setData('id', id);
    };

    return (
        <div className="container">
            {elementData.map((element) => (
                <div
                    key={element.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, element.id)}
                    className="card"
                >
                    <h2 className="header">{element.name}</h2>
                    <p className="content">{element.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Element;