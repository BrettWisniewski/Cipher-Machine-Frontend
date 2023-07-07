// import React, {useEffect, useState} from 'react'
// want to import cube canvas here 
// threedimensional2011
// "Enigma Machine" (https://skfb.ly/oBwzU) by ASHISH is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
 import CubeCanvas from './CubeCanvas'
 import MyScene from './MyScene';
  import BitcoinLogo from './BitLogo';
import SketchfabModel from './SketchfabModel';
import { Canvas } from '@react-three/fiber';  
import { OrbitControls, useGLTF } from '@react-three/drei';
import GLTFLoaderComponent from './GLTFLoaderComponent';

import ComputerModel from './ComputerModel';




//  import React, { useEffect, useState, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'gltf-loader-three';
// import JSZip from 'jszip';
// import CubeCanvas from './CubeCanvas';
function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null} scale = {7}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Part2} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Part1} />
        </group>
      </group>
    </group>
  )
}

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

    {/* // individual scenes that are not needed
    <CubeCanvas/>
    <BitcoinLogo/>
    <MyScene/> */}
    {/* <ComputerModel/> */}
    
    {/* <Canvas>
        <ambientLight intensity={0.5} />
        <ComputerModel />
      </Canvas> */}


    {/* <ComputerModel/> */}
    {/* <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SketchfabModel />
      <OrbitControls />
    </Canvas> */}

    <Canvas><ambientLight/> <spotLight intensity={0.9} angle = {0.1}  penumbra = {1}  position = {[10,15,20]} castShadow /> <Model/> <OrbitControls enablePan ={true} enableRotate = {true} enableZoom = {true}/></Canvas>

    
    

  

    </div>

  )
}





export default App