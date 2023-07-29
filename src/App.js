
import React, { useEffect, useState, memo} from 'react';
import { Canvas } from '@react-three/fiber';  
import { OrbitControls, useGLTF } from '@react-three/drei';
import './App.css'

import DatabaseSubmitter from './DatabaseSubmitter';

import DatabaseRetriever from './DatabaseRetriever';

import ThreeButtons from './ThreeButtons';




// Memoized Model component
const Model = memo((props) => {
  const { nodes, materials } = useGLTF('/scene.gltf');
  return (
    <group {...props} dispose={null} scale={2.1} position={[0, 1.5, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, -0.72, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Part2} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Part1} />
        </group>
      </group>
    </group>
  );
});



function App() {
  // add a state to determine cipher requests
  const [backendData, setBackendData] = useState([{}])
  const [cipheredSentence, setCipheredSentence] = useState("")

  // this one will be used for changing the cipher sentences
  const [sentence, setSentence] = useState("")

  // new state components
  const [toggler, setToggler] = useState(0)
  const [displayedSentence, setDisplayedSentence] = useState("")

 
  
  

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
  const mainButtons =  (value) => {
    setToggler(value);
  };
  const caesarSumbit =  (event) => {
    //  alert('A name was submitted: ' + event.state.value);
  
    event.preventDefault();
  
    // Send the form data to the Express backend
    fetch('/api/submitcaesar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sentence: sentence })
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend if needed
        setDisplayedSentence(data.sentence);
      })
      // .catch((error) => {
      //   console.error('Error:', error);
      // });
  
  
    }

    const concealmentSumbit =  (event) => {
  
      event.preventDefault();

      // remove all spaces from sentence
      const sentenceNoSpaces = sentence.replace(/\s/g, '');
    
      // Send the form data to the Express backend
      fetch('/api/submitconcealment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sentence: sentenceNoSpaces })
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the backend if needed
          setDisplayedSentence(data.sentence);
        })
        // .catch((error) => {
        //   console.error('Error:', error);
        // });
    
    
      }

      const transpotionSumbit =  (event) => {
        //  alert('A name was submitted: ' + event.state.value);
      
        event.preventDefault();
  
        // remove all spaces from sentence
        const sentenceNoSpaces = sentence.replace(/\s/g, '');

        console.log("OKAY")
      
        // Send the form data to the Express backend

        
          
        fetch('/api/submittransposition', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sentence: sentenceNoSpaces })
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the backend if needed
            setDisplayedSentence(data.sentence);
          })
          // .catch((error) => {
          //   console.error('Error:', error);
          // });
      
      
        
      }



    const buttonData1 = [
      { name: 'Start', value: 1 },
      { name: 'About', value: 8 },
      { name: 'Credits', value: 9 }
    ];

    const buttonData2 = [
      { name: 'Classical Ciphers', value: 2 },
      { name: 'Create', value: 6 },
      { name: 'Interact', value: 7 }
    ];


    const buttonData3 = [
      { name: 'Substitution Cipher', value: 3 },
      { name: 'Null Cipher', value: 4 },
      { name: 'Transpostion Cipher', value: 5 }
    ];

   


  if (toggler == 0){
  return (
    <div>

      <h1 className = "trueheader">Cipher Machine</h1>

    

<div style={{ display: 'flex' }}>
<ThreeButtons toggler={toggler} setToggler={setToggler} buttons={buttonData1} />
<div class="right-section">
  <Canvas><ambientLight/> <spotLight intensity={0.9} angle = {0.9}  penumbra = {1}  position = {[10,115,20]} castShadow /> <Model/> <OrbitControls enablePan ={true} enableRotate = {true} enableZoom = {true}/></Canvas>
   {/* <h1>PLEASE WORK</h1>
   <h1> Making </h1> */}
  </div>
  


    </div>
    </div>
    

  )
}


if(toggler == 1){
  return( 
      <div>
       <h1 className = "trueheader">Cipher Machine</h1>
    
  <div style={{ display: 'flex' }}>
  <ThreeButtons toggler={toggler} setToggler={setToggler} buttons={buttonData2} />
  <div class="right-section">
  <Canvas><ambientLight/> <spotLight intensity={0.9} angle = {0.9}  penumbra = {1}  position = {[10,115,20]} castShadow /> <Model/> <OrbitControls enablePan ={true} enableRotate = {true} enableZoom = {true}/></Canvas>
   {/* <h1>PLEASE WORK</h1>
   <h1> Making </h1> */}
   </div>
  </div>
  <button  onClick= {mainButtons.bind(null, 0)}>Back</button>
</div>
    
  )
}
if(toggler == 2){
  return(
    <div>
      
  
   <h1 className = "trueheader">Cipher Machine</h1>
  <div style={{ display: 'flex' }}>
  <ThreeButtons toggler={toggler} setToggler={setToggler} buttons={buttonData3} />
  <div class="right-section">
  <Canvas><ambientLight/> <spotLight intensity={0.9} angle = {0.9}  penumbra = {1}  position = {[10,115,20]} castShadow /> <Model/> <OrbitControls enablePan ={true} enableRotate = {true} enableZoom = {true}/></Canvas>
   {/* <h1>PLEASE WORK</h1>
   <h1> Making </h1> */}
   </div>
  </div>
  <button  onClick= {mainButtons.bind(null, 1)}>Back</button>
</div>
    
  )
}

if(toggler == 3){
  return(
    <div className = 'cipher-flex-container'>
      <div className = 'cipher-flex-left'>
        <h1 className = 'ciphertext'>SUBSTITUTION CIPHER</h1>
        <p className = 'ciphertext'>A subsitution cipher is when each letter is replaced by another letter. A famous one was
          used by Julius Caesar in which each letter was replaced by the letter 3 letters after it. 
          Try it out below!
        </p>
        <form onSubmit={caesarSumbit} method="POST">
          <h3 className = "ciphertext" >Enter your cipher name</h3>
          <label>
            Enter your cipher name:
            <input type="text" value={sentence} onChange={handleChange} className = "cipherinput" />
          </label>
         
          <input type="submit" className = "ciphersubmit" />
        </form>
        <h1 className = "displayedcipher">{displayedSentence}</h1>
        <button onClick={() => {mainButtons(2); setDisplayedSentence(""); setSentence("")}}>Back</button>
      </div>
      <div className = "cipheright">
        <img className = "cipherimage" src="images/julius-caesar-bust-3d-2.png" alt="Image failed to load" />
        <p >Your text paragraph goes here...</p>
      </div>
    </div>
    
  )
}
if(toggler == 6){
  return(
    <div>
    <div style = {{display: 'flex'}}>
   <DatabaseSubmitter/>
   <div class="right-section">
  <Canvas style = {{marginTop: '6rem', marginleft: '3rem'}}><ambientLight/> <spotLight intensity={0.9} angle = {0.9}  penumbra = {1}  position = {[10,115,20]} castShadow /> <Model/> <OrbitControls enablePan ={true} enableRotate = {true} enableZoom = {true}/></Canvas>
  
   </div>
   </div>
   <button  onClick= {mainButtons.bind(null, 1)}>Back</button>
   </div>
    
  )
}
if(toggler == 7){
  return(
    <div>
      <div style = {{display: 'flex'}}>
   <DatabaseRetriever/>
   <div class="right-section">
  <Canvas style = {{marginTop: '6rem', marginleft: '3rem'}}><ambientLight/> <spotLight intensity={0.9} angle = {0.9}  penumbra = {1}  position = {[10,115,20]} castShadow /> <Model/> <OrbitControls enablePan ={true} enableRotate = {true} enableZoom = {true}/></Canvas>
 
   </div>
  
   </div>

   <button  onClick= {mainButtons.bind(null, 1)}>Back</button>
  
   </div>
    
  )
}
if(toggler == 4){
  return(
  <div>
    <div className = 'cipher-flex-container'>
      <div className = 'cipher-flex-left'>
        <h1 className = 'ciphertext'>NULL CIPHER</h1>
        <p className = 'ciphertext'>A null cipher is when the letters from the message are mixed with non cipher-letter. A famous one was
          used during the English Civil War in which each letter from the cipher could be found at the third letter after each punctuation. 
          Try it out below!
        </p>
        <form onSubmit={concealmentSumbit} method="POST">
          <h3 className = "ciphertext" >Enter your cipher name</h3>
          <label>
            Enter your cipher name:
            <input type="text" value={sentence} onChange={handleChange} className = "cipherinput" />
          </label>
         
          <input type="submit" className = "ciphersubmit" />
        </form>
        <h1 className = "displayedcipher">{displayedSentence}</h1>
        <button onClick={() => {mainButtons(2); setDisplayedSentence(""); setSentence("")}}>Back</button>
      </div>
      <div className = "cipheright">
        <img className = "cipherimage" style = {{maxWidth: '55%'}} src="images/portrait-of-oliver-cromwell-1599-1658-lord-protector-of-england-by-studio-of-rob-md.jpg" alt="Image failed to load" />
        <p >Your text paragraph goes here...</p>
      </div>
    </div>

    
  </div>
  )
}

if(toggler === 5){

  return(
    <div>
      <div className = 'cipher-flex-container'>
        <div className = 'cipher-flex-left'>
          <h1 className = 'ciphertext'>TRANSPOSITION CIPHER</h1>
          <p className = 'ciphertext'>A transpotion cipher is when the letters from the message are rearanged. A famous variation of this one was
            used during the USA's Civil War by the Union in which each letter is rearanged so that the letters of each word so that the first letter of each word is the first three letters. This continues down the line.
            Try it out below!
          </p>
          <form onSubmit={transpotionSumbit} method="POST">
            <h3 className = "ciphertext" >Enter your cipher name</h3>
            <label>
              Enter your cipher name:
              <input type="text" value={sentence} onChange={handleChange} className = "cipherinput" />
            </label>
           
            <input type="submit" className = "ciphersubmit" />
          </form>
          <h1 className = "displayedcipher">{displayedSentence}</h1>
          <button onClick={() => {mainButtons(2); setDisplayedSentence(""); setSentence("")}}>Back</button>
        </div>
        <div className = "cipheright">
          <img className = "cipherimage" style = {{maxWidth: '95%'}} src="images/Union_Forces_35_Star_Flag.gif" alt="Image failed to load" />
          <p >Your text paragraph goes here...</p>
        </div>
      </div>
 
      
    </div>
    )
    
  }

  if(toggler === 8){
      return(
        <div>
         <h1 className = "trueheader">Cipher Machine</h1>
  
  <div style={{ display: 'flex' }}>
    
  <p className= "lefthandtext">
  Welcome to the Full Stack Cipher Machine, a web application that allows users to explore, create, and solve custom ciphers all in one unified platform. Created by a computer science student, this project leverages React for an intuitive frontend, Express for a robust backend, and PostgreSQL for efficient database management. Engage with the cryptography community by sharing your ciphers, solving others', and exploring classical algorithms. The application also boasts an immersive 3D model of the Cipher Machine, heightening the visual experience. I hope you enjoy this journey of encrypton and decryption!
</p>





  <div class="right-section">
  <Canvas><ambientLight/> <spotLight intensity={0.9} angle = {0.9}  penumbra = {1}  position = {[10,115,20]} castShadow /> <Model/> <OrbitControls enablePan ={true} enableRotate = {true} enableZoom = {true}/></Canvas>

   </div>
          </div>
          <button  onClick= {mainButtons.bind(null, 0)}>Back</button>

          
          </div>
      )
  }

  if(toggler === 9){
    return(
      <div>
       <h1 className = "trueheader">Cipher Machine</h1>
   
<div style={{ display: 'flex' }}>
  
<p className= "lefthandtext">
Here are the sources for this project (free use with cc license):

<br/> 
<br/>3D Model: "Retro computer" by Urpo

: https://sketchfab.com/3d-models/retro-computer-f844c0357d284fd8baa1435e9ff31bb2
License: CC-BY-4.0
Creator: Urpo

<br/> 
<br/>
Caesar Pic:

 https://freesvg.org/julius-caesar-bust-3d-statue

 <br/> 
<br/>
Cromwell Pic:

https://creazilla.com/nodes/7327637-portrait-of-oliver-cromwell-1599-1658-lord-protector-of-england-by-studio-of-rob

<br/> 
<br/>
Union Flag Pic:

https://en.wikipedia.org/wiki/File:Union_Forces_35_Star_Flag.gif
</p>





<div class="right-section">
<Canvas><ambientLight/> <spotLight intensity={0.9} angle = {0.9}  penumbra = {1}  position = {[10,115,20]} castShadow /> <Model/> <OrbitControls enablePan ={true} enableRotate = {true} enableZoom = {true}/></Canvas>

 </div>
        </div>
        <button  onClick= {mainButtons.bind(null, 0)}>Back</button>

        
        </div>
    )
}


}

export default App;




