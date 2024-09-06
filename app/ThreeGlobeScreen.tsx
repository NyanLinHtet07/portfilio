// components/Globe.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GlobeTestScreen: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const width = mountRef.current?.clientWidth || window.innerWidth;
    const height = mountRef.current?.clientHeight || window.innerHeight;

    // Create a scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current?.appendChild(renderer.domElement);

    // Load the Earth texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/earth.jpg'); // Ensure you have this texture in the public directory

    // Create a globe with the Earth texture
    const globeGeometry = new THREE.SphereGeometry(5, 50, 50);
    const globeMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    camera.position.z = 10;

    // Add animation
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.01; // Rotate the globe
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default GlobeTestScreen;
