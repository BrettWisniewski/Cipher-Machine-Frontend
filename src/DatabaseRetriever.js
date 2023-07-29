import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import HintButton from './HintButton';



const  DatabaseRetriever = () => { 
    const [letter, setLetter] = useState('');
    const [results, setResults] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const [twoOptionToggler , setTwoOptionToggler] = useState(0);
    const [showDiv , setShowDiv] = useState(false);

    const [userAnswers, setUserAnswers] = useState({});
  const [showCorrect, setShowCorrect] = useState(false);

  // beginning of current hint

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const [showItems , setShowItems] = useState(false);

  const handleNextHint = () => {
    if (currentIndex < results.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Restart from the beginning
      setCurrentIndex(0);
    }
    setShowHint(true);
  };

  const handleToggleHint = () => {
    setShowHint(!showHint);
  };

  // end of hints
  
    useEffect(() => {
      const delayedFetchResults = debounce(fetchResults, 300);
  
      if (letter.length >= 1 && !showAll) {
        delayedFetchResults();
      } else if (showAll) {
        fetchAllResults();
      } else {
        setResults([]);
      }
  
      return () => {
        delayedFetchResults.cancel();
      };
    }, [letter, showAll]);
  
    const fetchResults = () => {
      fetch(`/data/results?letter=${letter}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data);
        })
        .catch((error) => {
          console.error('Error fetching results:', error);
        });
    };
    // the commented code retrieves full database
    // const fetchAllResults = () => {
    //   fetch(`/data/allResults`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setResults(data);
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching all results:', error);
    //     });
    // };
    const fetchAllResults = () => {
        const queryParams = new URLSearchParams();
        queryParams.append('name', letter);
      
        fetch(`/data/allResults?${queryParams}`)
          .then((response) => response.json())
          .then((data) => {
            setResults(data);
           // setAllResults(data);
           console.log(data) 

          })
          .catch((error) => {
            console.error('Error fetching all results:', error);
          });
      };
      
      
      
      
      
      
  
    const handleInputChange = (event) => {
      const inputLetter = event.target.value;
      setLetter(inputLetter);
      setShowAll(false);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      setShowAll(true);
      setTwoOptionToggler(1);
    };

    const handleShowDiv = (event) => {
        event.preventDefault();
        setShowDiv(true);
    }
    // new hint button code

    // end of hint button code

    // beginning of question/answer button code
   
      
    // const handleAnswerInputChange = (e, question) => {
    //     setUserAnswers((prevAnswers) => ({ ...prevAnswers, [question]: e.target.value }));
    //     setShowCorrect(false);
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const currentResult = results[0]; // Assuming there's only one result
    //     const correctAnswers = currentResult.answer;
    
    //     for (const question in correctAnswers) {
    //       if (userAnswers[question] === correctAnswers[question]) {
    //         setShowCorrect(true);
    //       } else {
    //         setShowCorrect(false);
    //         break;
    //       }
    //     }
    //   };

    const handleAnswerInputChange = (e, question) => {
        setUserAnswers((prevAnswers) => ({
          ...prevAnswers,
          [question]: e.target.value
        }));
      };
    
      const handleSubmit = (e, question) => {
        e.preventDefault();
        const currentResult = results[0]; // Assuming there's only one result
        const correctAnswers = currentResult.answer;
        const isCorrect = userAnswers[question] === correctAnswers[question];
    
        setShowCorrect((prevShowCorrect) => ({
          ...prevShowCorrect,
          [question]: isCorrect
        }));
    }

      // end of question/answer button code
    
   
    
    //   const handleNextHint = () => {
    //     if (currentIndex < hints.length - 1) {
    //       setCurrentIndex(currentIndex + 1);
    //     } else {
    //       // Restart from the beginning
    //       setCurrentIndex(0);
    //     }
    //   }; 
    
  if(twoOptionToggler == 0){
    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <input  className = "inputdata" style = {{marginLeft: '1.4rem'}}type="text" value={letter} onChange={handleInputChange} placeholder="Enter letter" />
          <div></div>
          <button className = "firstsubmit" type="submit">Submit</button>
        </form>

        {/* // beginning of how to show results from array on page */}
        {/* <ul style = {{color:"white"}}>
          {results.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.rules}</li>
          ))}
        </ul> */}

        <ul style = {{color:"green"}}>
          {results.map((result) => (
            <div>
                <div style={{ margin: "0.5rem" }}>
            <button  key={result.id} onClick = {() => setLetter(result.name)}>{result.name}</button>
            </div>
            </div>
            
          ))}
        </ul>
        {/* <ul>
          {results.map((result) => (
            <li key={result.id}>{result.rules}</li>
          ))}
        </ul> */}
        {/* // want to show the results.hints which is an array which will require looping  */}

       {/* <ul>
            {results.map((result) => (
                <li key={result.id}>{result.hints}</li>
            ))}
       </ul> */}

       {/* <ul>
  {results.map((result) => (
    <li key={result.id}>
      <ul>
        {Object.entries(result.answer).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </li>
  ))}
</ul> */}
{/* // end of demonstration of how to show results from array on page */}
{/* <ul>
          {results.map((result) => (
            <li  key={result.id}>{result.name}</li>
          ))}
        </ul> */}



       
        {/* want to show every single item in results */}
       
       
      </div>
    );
}
if(twoOptionToggler == 1){
    return (
        <div>
            <HintButton hint={results.hints} showItems = {showItems} setShowItems = {setShowItems}/>
             <div>
          {results.map((result) => (
            <h1 className = "cipherheader" key={result.id}>{result.name}</h1>
          ))}
        </div>

        {/* <p>Current Hint: {currentHint}</p>
      <button onClick={handleNextHint}>Next Hint</button> */}

        
        
        {/* // want to show the results.hints which is an array which will require looping  */}

       {/* <ul>
            {results.map((result) => (
                <li key={result.id}>{result.hints}</li>
            ))}
       </ul> */}

       {/* <ul>
  {results.map((result) => (
    <li key={result.id}>
      <ul>
        {Object.entries(result.answer).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </li>
  ))}
</ul> */}

{/* <button onClick={handleNextHintClick}>Next Hint</button>
      {currentHint && <div>{currentHint}</div>} */}
      
      {/* supposed to be the hint button, will come back to that */}

      <button className = "retrieverhints" onClick={handleNextHint}>Show Hints</button>
          {showHint && (
            <div className = "retireverview">
              {results[currentIndex]?.hints} {/* Show current hint */}
            </div>
)}


{/* <form onSubmit={handleSubmit}>
        <ul>
          {Object.entries(results[0].answer).map(([question, answer]) => (
            <li key={question}>
              {question}: 
              <input type="text" value={userAnswers[question] || ''} onChange={(e) => handleAnswerInputChange(e, question)} />
            </li>
          ))}
        </ul>
        <button type="submit">Submit</button>
      </form>
      {showCorrect && <div>Correct answer!</div>} */}
      
            <ul>
        {Object.entries(results[0].answer).map(([question, answer]) => (
          <li key={question}className = "retrieverinput">
            {question}: 
            <input 
              type="text"
              value={userAnswers[question] || ''}
              onChange={(e) => handleAnswerInputChange(e, question)}
            />
            <button onClick={(e) => handleSubmit(e, question)}>Submit</button>
            {showCorrect[question] && <div style = {{color:'green'}}>Good Job!</div>}
          </li>
        ))}
      </ul>
{/* hints code */}
     


{showDiv ? (
        <div>
          {results.map((result) => (
            <h2 style = {{color:'white'}} key={result.id}>{result.rules}</h2>
          ))}
          <button className = "retrieverhints" onClick={() => setShowDiv(false)}>Close Answer</button>
        </div>
      ) : (
        <button className = "retrieverhints" onClick={() => setShowDiv(true)}>Show Answer</button>
      )}

      <div> </div>

      {/* div that creates whitepsace */}




      



      

{/* // build previous button to reverse to previous state */}
<button className = "retrieverhints"  onClick = {() => {setTwoOptionToggler((prevToggle) => prevToggle - 1); setShowDiv(false)}}> Previous </button>
{/* // show div is the button for when rules are pressed */}
        </div>
    )

}
}

export default DatabaseRetriever;