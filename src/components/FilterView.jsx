import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const FilterViewer = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Créez une scène Three.js
        const scene = new THREE.Scene();

        // Créez une caméra
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Créez un moteur de rendu
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Créez un cube pour représenter votre filtre
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Animation de la scène
        const animate = () => {
            requestAnimationFrame(animate);

            // Faites tourner le cube
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        // Nettoyage à la sortie du composant
        return () => {
            containerRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef}></div>;
};

export default FilterViewer;
