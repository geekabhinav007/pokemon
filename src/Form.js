// Form.js

import React, { useState } from 'react';
import Pokemon from './Pokemon';
import './Form.css'; // Import the CSS file for the form

function NameForm() {
    const [num, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Pokemon Number: 
                    <input 
                        type="text" 
                        className='input' 
                        value={num} 
                        onChange={handleChange} 
                        placeholder="Enter Pokemon Number" // Placeholder text
                    />
                </label>
                <button type="submit" value={num} className='button'>Submit</button>
            </form>
            {submitted && (
                <div>
                    <Pokemon num={num} />
                </div>
            )}
        </div>
    );
}

export default NameForm;
