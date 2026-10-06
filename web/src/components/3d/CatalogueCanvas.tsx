"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, Html } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { SpiralConveyor } from "./Machines/SpiralConveyor";
import * as THREE from "three";

// A dynamic camera rig that listens to window scroll
const CameraRig = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    // Interpolate camera position based on scroll
    // 1 viewport height (window.innerHeight) roughly equals moving down by a certain Y distance in 3D space
    const targetY = -(scrollY / window.innerHeight) * 10;
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.1);
  });

  return null;
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-10, 10, -5]} intensity={0.5} color="#6366F1" />
      <Environment preset="city" />

      <CameraRig />

      {/* Machine 1: Rotary Indexing Systems */}
      <group position={[0, 0, 0]}>
        <mesh position={[-3, 0, -2]}>
          <cylinderGeometry args={[2, 2, 1, 32]} />
          <meshStandardMaterial color="#E2E8F0" />
        </mesh>
        <mesh position={[-3, 1, -2]}>
          <boxGeometry args={[0.5, 2, 4]} />
          <meshStandardMaterial color="#6366F1" />
        </mesh>
      </group>

      {/* Machine 2: Continuous Motion */}
      <group position={[2, -10, -3]}>
        <mesh position={[2, 0, 0]}>
          <boxGeometry args={[6, 0.5, 2]} />
          <meshStandardMaterial color="#E2E8F0" />
        </mesh>
        <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[1, 1, 2, 32]} />
          <meshStandardMaterial color="#64748B" />
        </mesh>
        <mesh position={[4, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[1, 1, 2, 32]} />
          <meshStandardMaterial color="#64748B" />
        </mesh>
      </group>

      {/* Machine 3: Robotic Integration */}
      <group position={[-2, -20, -2]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1, 1.5, 1]} />
          <meshStandardMaterial color="#1E293B" />
        </mesh>
        <mesh position={[0, 2, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 3]} />
          <meshStandardMaterial color="#6366F1" />
        </mesh>
        <mesh position={[0, 4, 1]} rotation={[Math.PI / 4, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 3]} />
          <meshStandardMaterial color="#E2E8F0" />
        </mesh>
      </group>

      {/* Machine 4: Vision Inspection (using SpiralConveyor as an interactive demo piece) */}
      <SpiralConveyor position={[2, -30, -4]} />

      <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={50} blur={2} far={4} />
      <ContactShadows position={[0, -12, 0]} opacity={0.4} scale={50} blur={2} far={4} />
      <ContactShadows position={[0, -22, 0]} opacity={0.4} scale={50} blur={2} far={4} />
      <ContactShadows position={[0, -32, 0]} opacity={0.4} scale={50} blur={2} far={4} />
    </>
  );
};

export const CatalogueCanvas = () => {
  return (
    <div className="fixed inset-0 z-0 bg-bg-surface overflow-hidden pointer-events-none">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }} className="pointer-events-auto">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};
