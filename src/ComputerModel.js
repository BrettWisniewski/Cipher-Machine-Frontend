import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ComputerModel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a cube geometry
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Create a white material
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // Create a cube mesh using the geometry and material
    const cube = new THREE.Mesh(geometry, material);

    // Adjust the position of the cube along the z-axis
    cube.position.x = -2; // Move the cube closer to the camera
   // cube.position.z = 6; // Move the cube down

    // Add the cube to the scene
    scene.add(cube);

    // Render the scene with the camera
    renderer.render(scene, camera);

    // Clean up the Three.js objects on unmount
    return () => {
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ComputerModel;