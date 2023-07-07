import React from 'react';
import { useGLTF } from '@react-three/drei';

const GLTFLoaderComponent = ({ url }) => {
  const gltf = useGLTF(url, true);
  return <primitive object={gltf.scene} />;
};

export default GLTFLoaderComponent;