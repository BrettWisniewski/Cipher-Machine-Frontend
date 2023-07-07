import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BitcoinLogo = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;

    const init = () => {
      // Create a scene
      scene = new THREE.Scene();
      sceneRef.current = scene;

      // Create a camera
      camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Create a renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      containerRef.current.appendChild(renderer.domElement);

      // Create a geometry for the Bitcoin logo
      const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);

      // Create a material for the Bitcoin logo
      const material = new THREE.MeshBasicMaterial({
        color: 0xF7931A, // Bitcoin orange
        wireframe: true,
      });

      // Create a mesh using the geometry and material
      const bitcoinLogo = new THREE.Mesh(geometry, material);

      // Add the mesh to the scene
      scene.add(bitcoinLogo);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        bitcoinLogo.rotation.x += 0.01;
        bitcoinLogo.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();
    };

    init();

    // Clean up on component unmount
    return () => {
      const disposeNode = (node) => {
        if (node instanceof THREE.Mesh) {
          if (node.geometry) {
            node.geometry.dispose();
          }
          if (node.material) {
            node.material.dispose();
          }
        }
      };

      sceneRef.current.traverse(disposeNode);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '400px', height: '400px' }} />;
};

export default BitcoinLogo;