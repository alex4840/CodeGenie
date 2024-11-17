// client/src/components/SpaceObjects.js
import React from 'react';
import { useGLTF } from '@react-three/drei';

// Load the Robot model
export const Robot = (props) => {
  const { scene } = useGLTF('/models/robot.glb'); // Path to robot model
  return <primitive object={scene} {...props} />;
};

// Load the Planet model
export const Planet = (props) => {
  const { scene } = useGLTF('/models/planet.glb'); // Path to planet model
  return <primitive object={scene} {...props} />;
};
