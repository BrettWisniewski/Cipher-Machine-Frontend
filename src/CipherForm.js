import React, { useState } from 'react';

const CipherForm = ({ backendPath, buttonText, sentence, setSentence }) => {
    //const [sentence, setSentence] = useState("");

  
    const handleChange = (event) => {
      setSentence(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Send the form data to the backend
      fetch(backendPath, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sentence: sentence })
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the backend if needed
          sentence(data.sentence);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit} method="POST">
          <label>
            Enter your cipher name:
            <input type="text" value={sentence} onChange={handleChange} />
          </label>
          <input type="submit" value={buttonText} />
        </form>
      </div>
    );
  };

  export default CipherForm;