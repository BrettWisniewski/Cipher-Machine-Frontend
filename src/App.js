import React, {useEffect, useState} from 'react'

function App() {
  // add a state to determine cipher requests
  const [backendData, setBackendData] = useState([{}])
  const [cipheredSentence, setCipheredSentence] = useState("")
  

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


  
  return (
    <div>
      <h1>Backend Data</h1>
   {typeof backendData.users !== 'undefined' ? backendData.users.map(user => <div key={user}>{user}</div>) : null}

    {/* create input form to send to the backend that consists of a ciphered sentence */}
    {/* <form action="/api" method="post" >
      <label for="sentence">Enter a sentence to be ciphered:</label><br></br>
      <input type="text" id="sentence" name="sentence" value="Enter a sentence to be ciphered"></input><br></br>
      <input type="submit" value="Submit"></input>
    </form> */}

    {/* Make a hard coded post request on the press of a button that sends the sentences RPTHPG */}
    <button onClick = {logData()}> Send RPTHPG to the backend</button>
    <h1> {cipheredSentence}</h1>

  

    </div>

  )
}





export default App