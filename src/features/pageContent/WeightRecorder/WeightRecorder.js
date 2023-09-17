// WeightRecorder.js
import React, { useState, useEffect } from 'react';

function WeightRecorder() {
    const [weight, setWeight] = useState(''); // Weight input
    const [weights, setWeights] = useState([]); // List of recorded weights

    useEffect(() => {
        const storedWeights = localStorage.getItem('weights');
        if (storedWeights) {
            setWeights(JSON.parse(storedWeights));
        }
    }, []);

    const handleAddWeight = () => {
        const updatedWeights = [...weights, weight];
        setWeights(updatedWeights);
        localStorage.setItem('weights', JSON.stringify(updatedWeights));
        setWeight(''); // Clear the input after adding
    };

    return (
        <div>
            <h2>Weight Recorder</h2>
            <input 
                type="number" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)} 
                placeholder="Enter your weight" 
            />
            <button onClick={handleAddWeight}>Add Weight</button>
            <ul>
                {weights.map((w, index) => (
                    <li key={index}>{w} kg</li>
                ))}
            </ul>
        </div>
    );
}

export default WeightRecorder;
