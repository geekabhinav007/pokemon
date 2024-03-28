import React, { useState } from 'react';
import Pokemon from './Pokemon';

function NameForm(){

    const [num , setName] = useState('');
    const [submitted , setSubmitted] = useState(false)
    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
       
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>Pokemon Number : <input type="text" className='input' value={num} onChange={handleChange}/>

            </label>
            <button type="submit" value = {num} className='counter-button'>Submit</button>
        </form>
         {submitted && (
            <div>
              <Pokemon num= {num} />
            </div>
          )}
        </div>
        
      );
}

export default NameForm;