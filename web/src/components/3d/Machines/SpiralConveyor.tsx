"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export const SpiralConveyor = (props: any) => {
  const groupRef = useRef<THREE.Group>(null);
  const conveyorRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Animation Loop to simulate living factory environment
  useFrame((state, delta) => {
    if (conveyorRef.current) {
      // Simulate spinning motion of the spiral conveyor
      conveyorRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {/* 
        PERFORMANCE GUIDELINE FOR REAL MODELS:
        Instead of primitive geometry, you would load compressed .glb files here:
        
        const { nodes, materials } = useGLTF('/models/spiral_conveyor-transformed.glb')
        return <mesh geometry={nodes.Conveyor.geometry} material={materials.Metal} />

        * Always use glTF-Transform or Draco compression on models.
        * Reuse materials and geometries by using clone() or instancing if rendering multiple.
      */}

      <mesh 
        ref={conveyorRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
      >
        <cylinderGeometry args={[2, 2, 8, 32, 1, false, 0, Math.PI * 2]} />
        <meshStandardMaterial 
          color={hovered ? "#6366F1" : "#E2E8F0"} 
          metalness={0.8}
          roughness={0.2}
          wireframe={hovered}
        />

        {/* Floating HTML Specs Overlay */}
        {hovered && (
          <Html position={[2.5, 0, 0]} center zIndexRange={[100, 0]}>
            <div className="w-64 p-4 bg-bg-surface-alt/90 backdrop-blur-md border border-border-light rounded-xl shadow-2xl pointer-events-none transform translate-y-[-50%]">
              <h3 className="text-text-high font-bold font-barlow-condensed text-xl mb-2 uppercase tracking-wide border-b border-border-light pb-2">
                Spiral Conveyor
              </h3>
              <ul className="text-text-medium font-barlow text-sm space-y-1">
                <li className="flex justify-between">
                  <span className="font-semibold text-accent-primary">Load:</span> Up to 100 Kg
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-accent-primary">Speed:</span> 4.5 m/s
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-accent-primary">Footprint:</span> 4x4m
                </li>
              </ul>
            </div>
          </Html>
        )}
      </mesh>

      {/* Decorative center support */}
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 9, 16]} />
        <meshStandardMaterial color="#64748B" metalness={0.9} roughness={0.5} />
      </mesh>
    </group>
  );
};

// Preload the GLTF model in a real scenario
// useGLTF.preload('/models/spiral_conveyor-transformed.glb');
