// import React, {useEffect, useState} from 'react'
// want to import cube canvas here
import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
 import CubeCanvas from './CubeCanvas'

function App() {
  // add a state to determine cipher requests
  const [backendData, setBackendData] = useState([{}])
  const [cipheredSentence, setCipheredSentence] = useState("")
  const [sentence, setSentence] = useState("")
  

  useEffect(() => {
    fetch('/api').then
    (res => res.json()).then
    (data => setBackendData(data))
  }, [])

  // create onSubmit for the form that sends the input to the backend
  const handleSubmit = (e) => {
    e.preventDefault()
    const sentence = e.target.sentence.value
    console.log(sentence)
    fetch('/api').then(res => res.json()).then(data => console.log(data)) }

    const handlePost = (e) => {
      e.preventDefault()
      const sentence = e.target.sentence.value
      console.log(sentence)
      fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({sentence: sentence})
        
      }).then(res => res.json()).then(data => console.log(data))
    }
  // create function that on press, sends the sentence hello to the backend

  const handleGet = (e) => {
    e.preventDefault()
    fetch('/api').then(res => res.json()).then(data => setCipheredSentence(data))
  }

  const logData = () => () => {
    console.log("THIS IS THE DATA")
    fetch('/caesar').then(res => res.json()).then(data => setCipheredSentence(data.sentence))


    // what this does is bascially res is data and data is the json

    
   
  }

  // create a function that takes the input from the form and sends it to the backend
  // create a function that takes the output from the backend and displays it on the screen


  const handleChange = (event) => {
    {setSentence( event.target.value)};
  }

  const handleFormSubmit =  (event) => {
  //  alert('A name was submitted: ' + event.state.value);

  event.preventDefault();

  // Send the form data to the Express backend
  fetch('/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sentence: sentence })
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the backend if needed
      console.log(data);
    })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });


  }

  const cipherFormName = (event) => {
    event.preventDefault();
  }

  // create cube canvas


  
  return (
    <div>
      <h1>Backend Data</h1>
   {typeof backendData.users !== 'undefined' ? backendData.users.map(user => <div key={user}>{user}</div>) : null}


    {/* Make a hard coded post request on the press of a button that sends the sentences RPTHPG */}
    <button onClick = {logData()}> Send RPTHPG to the backend</button>

    <form onSubmit={handleFormSubmit} method = "POST">
        <label>
          Name:
          <input type="text" value={sentence} onChange={handleChange} />
        </label>
        <input type="submit"/>
      </form>
    
    <h1> {cipheredSentence}</h1>
    {/* // create cube canvas */}
    <CubeCanvas/>
    

  

    </div>

  )
}





export default App