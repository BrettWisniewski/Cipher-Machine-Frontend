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
// import css file
import './App.css'





//  import React, { useEffect, useState, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'gltf-loader-three';
// import JSZip from 'jszip';
// import CubeCanvas from './CubeCanvas';
function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null} scale = {2.1} position={[0, 1.5, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, -0.82, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Part2} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Part1} />
        </group>
      </group>
     
    </group>
  )
}

// function Model2(props) {
//   const { nodes, materials } = useGLTF('/emachine.gltf')
//   return (
//     <group {...props} dispose={null}>
//       <group rotation={[1.576, 0, 0]}>
//         <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
//           <mesh geometry={nodes.part001_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[6.298, 0, 9.668]} scale={100} />
//           <mesh geometry={nodes.part004_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[-8.352, 0, 8.84]} scale={100} />
//           <mesh geometry={nodes.part005_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[6.73, 0, 11.292]} scale={100} />
//           <mesh geometry={nodes.part006_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[-8.493, 0.005, 10.407]} scale={100} />
//           <mesh geometry={nodes.part008_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[-13.307, 0, 5.496]} scale={100} />
//           <mesh geometry={nodes.part009_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[9.837, 1.92, 12.457]} scale={100} />
//           <mesh geometry={nodes.part010_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[0.875, -0.313, 12.18]} scale={100} />
//           <mesh geometry={nodes.part011_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[8.523, -0.169, 12.631]} scale={100} />
//           <mesh geometry={nodes.part012_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[-10.421, -9.889, 9.404]} scale={100} />
//           <mesh geometry={nodes.part013_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[-4.977, -10.442, 10.279]} scale={100} />
//           <mesh geometry={nodes.part014_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[-7.742, -9.049, 9.863]} scale={100} />
//           <mesh geometry={nodes.part015_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[14.77, 1.92, 12.595]} scale={100} />
//           <mesh geometry={nodes.part016_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[8.524, 2.72, 12.247]} scale={100} />
//           <mesh geometry={nodes.part017_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[14.144, 1.923, 12.773]} scale={100} />
//           <mesh geometry={nodes.part018_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[-1.212, 0, 12.802]} scale={100} />
//           <mesh geometry={nodes.part020_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[-13.622, 0, 5.815]} scale={100} />
//           <mesh geometry={nodes.part021_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[14.144, 1.923, 12.773]} scale={100} />
//           <mesh geometry={nodes.part022_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[14.144, 1.923, 12.773]} scale={100} />
//           <mesh geometry={nodes.part029_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[1.622, 0, 12.699]} scale={100} />
//           <mesh geometry={nodes.part030_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[1.622, 0, 13.143]} scale={100} />
//           <mesh geometry={nodes.part031_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[1.622, -11.747, 12.719]} scale={100} />
//           <mesh geometry={nodes.part032_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[5.14, 1.919, 12.687]} scale={100} />
//           <mesh geometry={nodes.part033_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[6.026, 1.919, 13.122]} scale={100} />
//           <mesh geometry={nodes.part034_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[5.606, -3.199, 12.69]} scale={100} />
//           <mesh geometry={nodes.part045_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[6.39, -6.976, 12.418]} scale={100} />
//           <mesh geometry={nodes.part046_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[5.206, 0, 12.61]} scale={100} />
//           <mesh geometry={nodes.part047_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[5.206, 0, 13.109]} scale={100} />
//           <mesh geometry={nodes.part048_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[6.454, 0, 13.68]} scale={100} />
//           <mesh geometry={nodes.part049_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[6.543, -11.937, 13.751]} scale={100} />
//           <mesh geometry={nodes.part050_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[7.705, -0.001, 12.61]} scale={100} />
//           <mesh geometry={nodes.part051_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[7.705, -11.977, 12.738]} scale={100} />
//           <mesh geometry={nodes.part052_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[6.39, -6.976, 12.451]} scale={100} />
//           <mesh geometry={nodes.part053_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[6.39, -6.976, 13.265]} scale={100} />
//           <mesh geometry={nodes.part054_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[-14.3, 0.014, 5.677]} scale={100} />
//           <mesh geometry={nodes.part060_low_w2_low_mec_0.geometry} material={materials.w2_low_mec} position={[-14.626, -8.055, 4.815]} scale={100} />
//           <mesh geometry={nodes.part067_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[-12.253, 0, 10.144]} scale={100} />
//           <mesh geometry={nodes.part072_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[13.734, 1.678, 12.725]} scale={100} />
//           <mesh geometry={nodes.part073_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[14.588, 2.086, 12.725]} scale={100} />
//           <mesh geometry={nodes.part074_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[8.525, 2.787, 12.689]} scale={100} />
//           <mesh geometry={nodes.part075_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[-12.253, 0, 10.258]} scale={100} />
//           <mesh geometry={nodes.part076_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[-13.446, -12.852, 5.668]} scale={100} />
//           <mesh geometry={nodes.part086_low_low_mec002_0.geometry} material={materials['low_mec.002']} position={[-13.27, -5.385, 3.349]} scale={100} />
//           <mesh geometry={nodes.part078_low_low_box001_0.geometry} material={materials['low_box.001']} position={[17.5, 0, 9.694]} scale={100} />
//           <mesh geometry={nodes.part077_low_low_box001_0.geometry} material={materials['low_box.001']} position={[17.5, 0, 9.694]} scale={100} />
//           <mesh geometry={nodes.part035_low_low_box001_0.geometry} material={materials['low_box.001']} position={[22.823, 0, 43.453]} scale={100} />
//           <mesh geometry={nodes.part003_low_low_box001_0.geometry} material={materials['low_box.001']} position={[17.219, 0, 44.249]} scale={100} />
//           <mesh geometry={nodes.part037_low_low_box001_0.geometry} material={materials['low_box.001']} position={[21.972, 0, 33.663]} scale={100} />
//           <mesh geometry={nodes.part038_low_low_box001_0.geometry} material={materials['low_box.001']} position={[22.576, 0, 33.663]} scale={100} />
//           <mesh geometry={nodes.part036_low_low_box001_0.geometry} material={materials['low_box.001']} position={[22.536, 0, 33.663]} scale={100} />
//           <mesh geometry={nodes.part023_low_low_box001_0.geometry} material={materials['low_box.001']} position={[22.132, 0.001, 15.069]} scale={100} />
//           <mesh geometry={nodes.part056_low_w1_low_box_0.geometry} material={materials.w1_low_box} position={[22.133, -9.685, 14.308]} scale={100} />
//           <mesh geometry={nodes.part044_low_low_box001_0.geometry} material={materials['low_box.001']} position={[22.604, 0, 14.835]} scale={100} />
//           <mesh geometry={nodes.part040_low_low_box001_0.geometry} material={materials['low_box.001']} position={[22.132, 0, 15.152]} scale={100} />
//           <mesh geometry={nodes.part039_low_low_box001_0.geometry} material={materials['low_box.001']} position={[22.132, 0, 15.152]} scale={100} />
//           <mesh geometry={nodes.part041_low_low_box001_0.geometry} material={materials['low_box.001']} position={[22.132, 0, 15.072]} scale={100} />
//           <mesh geometry={nodes.part042_low_low_box001_0.geometry} material={materials['low_box.001']} position={[22.132, 0, 15.074]} scale={100} />
//           <mesh geometry={nodes.part043_low_low_box001_0.geometry} material={materials['low_box.001']} position={[22.132, 0, 15.074]} scale={100} />
//           <mesh geometry={nodes.part079_low_low_box001_0.geometry} material={materials['low_box.001']} position={[17.5, 0, 9.694]} scale={100} />
//           <mesh geometry={nodes.part080_low_low_box001_0.geometry} material={materials['low_box.001']} position={[17.5, 0, 9.694]} scale={100} />
//           <mesh geometry={nodes.part081_low_low_box001_0.geometry} material={materials['low_box.001']} position={[17.5, 0, 9.694]} scale={100} />
//           <mesh geometry={nodes.part007_low_low_box001_0.geometry} material={materials['low_box.001']} position={[18.616, -0.014, 6.627]} scale={100} />
//           <mesh geometry={nodes.part002_low_low_box001_0.geometry} material={materials['low_box.001']} position={[17.77, 0, 6.627]} scale={100} />
//           <mesh geometry={nodes.part019_low_low_box001_0.geometry} material={materials['low_box.001']} position={[17.5, 0, 9.694]} scale={100} />
//           <mesh geometry={nodes.part069_low_low_box001_0.geometry} material={materials['low_box.001']} position={[15.645, 0, 15.855]} scale={100} />
//           <mesh geometry={nodes.part071_low_low_box001_0.geometry} material={materials['low_box.001']} position={[13.093, 0, 13.795]} scale={100} />
//           <mesh geometry={nodes.part070_low_low_box001_0.geometry} material={materials['low_box.001']} position={[11.422, 0, 11.45]} scale={100} />
//           <mesh geometry={nodes.part082_low_low_box001_0.geometry} material={materials['low_box.001']} position={[17.5, 0, 9.694]} scale={100} />
//           <mesh geometry={nodes.part024_low_low_box001_0.geometry} material={materials['low_box.001']} position={[-16.821, 0.566, -8.073]} rotation={[Math.PI, 0, Math.PI]} scale={100} />
//           <mesh geometry={nodes.part084_low_low_box001_0.geometry} material={materials['low_box.001']} position={[-17.214, -1.048, -8.073]} rotation={[Math.PI, 0, Math.PI]} scale={100} />
//           <mesh geometry={nodes.part083_low_low_box001_0.geometry} material={materials['low_box.001']} position={[-17.137, 0, -0.008]} rotation={[Math.PI, 0, Math.PI]} scale={100} />
//           <mesh geometry={nodes.part085_low_low_box001_0.geometry} material={materials['low_box.001']} scale={100} />
//           <mesh geometry={nodes.part028_low_low_box001_0.geometry} material={materials['low_box.001']} position={[-17.137, 0, -0.008]} rotation={[Math.PI, 0, Math.PI]} scale={100} />
//           <mesh geometry={nodes.part025_low_low_box001_0.geometry} material={materials['low_box.001']} position={[-17.137, 0, -0.008]} rotation={[Math.PI, 0, Math.PI]} scale={100} />
//           <mesh geometry={nodes.part027_low_low_box001_0.geometry} material={materials['low_box.001']} position={[-17.137, 0, -0.008]} scale={100} />
//           <mesh geometry={nodes.part068_low_low_box001_0.geometry} material={materials['low_box.001']} position={[-14.829, 0, 8.873]} scale={100} />
//           <mesh geometry={nodes.part_low_low_box001_0.geometry} material={materials['low_box.001']} position={[-18.22, 0, -8.754]} rotation={[Math.PI, 0, Math.PI]} scale={100} />
//           <mesh geometry={nodes.part066_low_low_box001_0.geometry} material={materials['low_box.001']} position={[-15.459, 0, 6.71]} scale={100} />
//           <mesh geometry={nodes.part026_low_low_box001_0.geometry} material={materials['low_box.001']} position={[-18.645, 0, -6.726]} rotation={[Math.PI, 0, Math.PI]} scale={100} />
//           <mesh geometry={nodes.part087_low_glass_0.geometry} material={materials.glass} position={[8.545, 2.715, 12.578]} scale={100} />
//         </group>
//       </group>
//     </group>
//   )
// }


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

    {/* <Canvas><ambientLight/> <spotLight intensity={0.9} angle = {0.1}  penumbra = {1}  position = {[10,15,20]} castShadow /> <Model/> <OrbitControls enablePan ={true} enableRotate = {true} enableZoom = {true}/></Canvas> */}

    <div className="flex-container">
  <div className="left-section">
    <div className="button-container">
      <button className="circle-button">Start</button>
      <button className="circle-button">About</button>
      <button className="circle-button">Credits</button>
    </div>
  </div>
  <div class="right-section">
  <Canvas><ambientLight/> <spotLight intensity={0.9} angle = {0.9}  penumbra = {1}  position = {[10,115,20]} castShadow /> <Model/> <OrbitControls enablePan ={true} enableRotate = {true} enableZoom = {true}/></Canvas>
   {/* <h1>PLEASE WORK</h1>
   <h1> Making </h1> */}
  </div>
</div>
{/* <Canvas><ambientLight/> <spotLight intensity={0.9} angle = {0.1}  penumbra = {1}  position = {[10,15,20]} castShadow /> <Model2/> <OrbitControls enablePan ={true} enableRotate = {true} enableZoom = {true}/></Canvas> */}


    

  

    </div>

  )
}

export default App;




