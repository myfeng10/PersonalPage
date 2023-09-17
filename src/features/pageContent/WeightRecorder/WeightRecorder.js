import React, { useState, useEffect } from 'react';
import "./WeightRecorder.css";

function WeightRecorder() {
    const [weight, setWeight] = useState(''); 
    const [weights, setWeights] = useState([]);

    useEffect(() => {
        const storedWeights = localStorage.getItem('weights');
        if (storedWeights) {
            setWeights(JSON.parse(storedWeights));
        }
    }, []);

    const handleAddWeight = () => {
        const currentDate = new Date();
        const timestamp = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
        const updatedWeights = [...weights, { weight, timestamp }];
        
        setWeights(updatedWeights);
        localStorage.setItem('weights', JSON.stringify(updatedWeights));
        setWeight(''); // Clear the input after adding
    };

    return (
        <div className="weight-browser">
            <h2>Weight Recorder</h2>
            <div className="weight-content">
                <input className="weight-element"
                    type="number" 
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)} 
                    placeholder="Enter your weight" 
                />
                <button onClick={handleAddWeight} className="btn-weight-submit">Add Weight</button>
    
            <div className="weight-display">
                <ul>
                {weights.map((entry, index) => (
                    <li key={index}>
                        <span className="weight">{entry.weight} kg</span>
                        <span className="timestamp">Recorded on: {entry.timestamp}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
        </div>
    );
}

export default WeightRecorder;
