import React, { useState } from 'react';

const  DatabaseSubmitter = () => {

   const [insideData, setInsideData] = useState({});
  const [key, setKey] = useState('');
  const [cName, setCName] = useState('');
  // all of this is what the object decipher requires


  const [miniToggler, setMiniToggler] = useState(0);
  // 0 is for the name, 1 is for the key and value

  // name sentence state
  const [nameSetence, setNameSentence] = useState('');

  // next is cipher rules

  const [theCipherRule , setTheCipherRule] = useState('');

  //let toggleSetter = 0;

  const [responses, setResponses] = useState([]);

  // make previous button





  const handleNameSentenceChange = (event) => {
    setNameSentence(event.target.value);
  };
  // function for the name sentence

  const handleTheCipherRuleChange = (event) => {
    setTheCipherRule(event.target.value);
  };


  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  const handleNameChange = (event) => {
    setCName(event.target.value);
  };


  const handleOnNameSubmit = (event) => {
    event.preventDefault();
  setMiniToggler((prevToggle) => prevToggle + 1);
  }

  const handleAddToData = () => {
    setInsideData((prevData) => ({
      ...prevData,
      [key]: cName
    }));
   

    setKey('');
    setCName('');
    //console.log(insideData);
  };

  const handleSendToBackend = () => {
    fetch('/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(insideData)
    })
      .then(() => {
        setInsideData({});
        setKey('');
        setCName('');
        setMiniToggler(0)
        setResponses([]);
        setNameSentence('');
        setTheCipherRule('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    //console.log(insideData);
  };

  const handleAddToArray = () => {
    setResponses((prevResponses) => [...prevResponses, cName]);
    setCName(' ');
  };

  const handleReset2 = () => {
    setMiniToggler(0);
    setResponses([]);
  };

  const handleReset = () => {
    const resetData = {
      insideData,
      nameSetence,
      theCipherRule,
      responses
    };
    fetch('/data/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resetData)
    })
      .then(() => {
        setInsideData({});
        setKey('');
        setCName('');
        setResponses([]);
        setMiniToggler(0);
        setNameSentence('');
        setTheCipherRule('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const stateLogger = (event) => {
    event.preventDefault();
    console.log(insideData);
    console.log(nameSetence);
    console.log(theCipherRule);
    console.log(responses);
  };






  if(miniToggler === 2){

  return (
    <div>

      
      <input className = "inputdata" type="text" value={key} onChange={handleKeyChange} placeholder="Enter ciphered text" />
      <div> content</div>
      <input className = "keyinput" type="text" value={cName} onChange={handleNameChange} placeholder="Enter solution" />
      <div> content</div>
      <button className = "objectadder" onClick={handleAddToData}>Add to Answers</button>
      <div>content</div>
      <button className = "objectadder"onClick={handleOnNameSubmit}>Submit</button>
      <div>content</div>
      
      <button onClick = {() => setMiniToggler((prevToggle) => prevToggle - 1)}> Previous </button>
    </div>
  );
  }
  if(miniToggler === 0){
    return(
      <div >
        <form  onSubmit={handleOnNameSubmit} method = "POST">
        <label>
          Name:
          <input className = "inputdata" type="text" value={nameSetence} onChange={handleNameSentenceChange} />
        </label>
        <div></div>
        <input className = "submitdata" type="submit"/>
      </form>
      </div>
    )
  }
  if(miniToggler == 1){
    return(
      <div>
        <form onSubmit={handleOnNameSubmit} method = "POST">
        <label>
          Name:
          <input className = "inputdata" type="text" value={theCipherRule} onChange={handleTheCipherRuleChange} />
        </label>
        <input className = "submitdata" type="submit"/>
      </form>
      {/* // previous button  */}
      <button onClick = {() => setMiniToggler((prevToggle) => prevToggle - 1)}> Previous </button>
      </div>
    )
  }

  if (miniToggler === 3) {
    return (
      <div> 
        <input className = "inputarraydata" type="text" value={cName} onChange={handleNameChange} placeholder="Enter response" />
        <div style = {{display: 'flex'}}> 
        <button className = "inputsubmitdata"onClick={handleAddToArray}>Add to Hints</button>
       
        </div>
        <div style = {{marginLeft: '1.25rem'}}></div>
        <button className = "inputsubmitdata" onClick={handleReset}>Send to database</button>
        <ul>
          {responses.map((response, index) => (
            <li key={index}>{response}</li>
          ))}
        </ul>
        <button onClick = {() => setMiniToggler((prevToggle) => prevToggle - 1)}> Previous </button>
        <button onClick = {stateLogger}> Log State </button>
      </div>
    );
  }


}

export default DatabaseSubmitter;