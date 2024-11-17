import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SpaceScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;

    // Create the scene
    const scene = new THREE.Scene();

    // Create the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    // Create the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountNode.appendChild(renderer.domElement);

    // Add stars to the background
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xaaaaaa, size: 0.1 });
    const starCount = 10000;
    const starPositions = [];

    for (let i = 0; i < starCount; i++) {
      starPositions.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      );
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Add small planets
    const planets = [];
    const planetMaterial = new THREE.MeshStandardMaterial({ color: 0x8888FF });
    for (let i = 0; i < 50; i++) {
      const planetGeometry = new THREE.SphereGeometry(Math.random() * 0.5 + 0.2, 32, 32);
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);

      planet.position.set(
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300
      );

      scene.add(planet);
      planets.push(planet);
    }

    // Add slightly larger planets
    const bigPlanets = [];
    const bigPlanetMaterial = new THREE.MeshStandardMaterial({ color: 0xFF5722 });
    for (let i = 0; i < 10; i++) {
      const bigPlanetGeometry = new THREE.SphereGeometry(Math.random() * 1 + 1.5, 32, 32);
      const bigPlanet = new THREE.Mesh(bigPlanetGeometry, bigPlanetMaterial);

      bigPlanet.position.set(
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300
      );

      scene.add(bigPlanet);
      bigPlanets.push(bigPlanet);
    }

    // Add asteroids
    const asteroids = [];
    const asteroidMaterial = new THREE.MeshStandardMaterial({ color: 0xAAAAAA });
    for (let i = 0; i < 30; i++) {
      const asteroidGeometry = new THREE.DodecahedronGeometry(Math.random() * 0.5 + 0.1);
      const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);

      asteroid.position.set(
        (Math.random() - 0.5) * 500,
        (Math.random() - 0.5) * 500,
        (Math.random() - 0.5) * 500
      );

      scene.add(asteroid);
      asteroids.push(asteroid);
    }

    // Add galaxies
    const galaxyMaterial = new THREE.PointsMaterial({ color: 0x888888, size: 0.5 });
    const galaxyGeometry = new THREE.BufferGeometry();
    const galaxyPositions = [];
    const galaxyCount = 5000;

    for (let i = 0; i < galaxyCount; i++) {
      galaxyPositions.push(
        (Math.random() - 0.5) * 1000,
        (Math.random() - 0.5) * 1000,
        (Math.random() - 0.5) * 1000
      );
    }

    galaxyGeometry.setAttribute('position', new THREE.Float32BufferAttribute(galaxyPositions, 3));
    const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
    scene.add(galaxy);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft white light
    scene.add(ambientLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the stars for depth effect
      stars.rotation.x += 0.0001;
      stars.rotation.y += 0.0001;

      // Move small planets slightly
      planets.forEach((planet, index) => {
        planet.position.x += Math.sin(Date.now() * 0.001 + index) * 0.001;
        planet.position.y += Math.cos(Date.now() * 0.001 + index) * 0.001;
      });

      // Move big planets in a subtle orbit
      bigPlanets.forEach((planet, index) => {
        planet.position.x += Math.sin(Date.now() * 0.001 + index) * 0.002;
        planet.position.z += Math.cos(Date.now() * 0.001 + index) * 0.002;
      });

      // Rotate asteroids for dynamic effect
      asteroids.forEach((asteroid) => {
        asteroid.rotation.x += 0.01;
        asteroid.rotation.y += 0.01;
      });

      // Rotate the galaxy
      galaxy.rotation.y += 0.0005;

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resizing
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', onWindowResize);
      mountNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default SpaceScene;
