import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';



function CubeCanvas() {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      // Set up the scene, camera, and renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      canvasRef.current.appendChild(renderer.domElement);
  
      // Add a cube to the scene
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
  
      // Add a light source for the shadow
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(0, 10, 0);
      light.castShadow = true;
      scene.add(light);
  
      // Set up shadow properties for the cube
      cube.castShadow = true;
      cube.receiveShadow = true;
      light.shadow.mapSize.width = 512;
      light.shadow.mapSize.height = 512;
      light.shadow.camera.near = 0.5;
      light.shadow.camera.far = 500;
  
      // Position the camera
      camera.position.z = 5;
  
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
  
        // Rotate the cube
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
  
        // Render the scene with the camera
        renderer.render(scene, camera);
      };
  
      animate();
  
      // Clean up the Three.js objects when the component unmounts
      return () => {
        scene.remove(cube);
        renderer.dispose();
      };
    }, []);
  
    return <div ref={canvasRef}></div>;
  }

  export default CubeCanvas;