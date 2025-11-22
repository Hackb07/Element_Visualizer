import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';
import Atom from './Atom';

const Bond = ({ start, end, color }) => {
    const ref = useRef();
    const direction = new THREE.Vector3().subVectors(end, start);
    const length = direction.length();
    const position = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    const orientation = new THREE.Matrix4();
    orientation.lookAt(start, end, new THREE.Object3D().up);
    const rotation = new THREE.Euler().setFromRotationMatrix(orientation);

    useFrame(({ clock }) => {
        if (ref.current) {
            // Pulsing effect
            ref.current.material.opacity = 0.3 + Math.sin(clock.getElapsedTime() * 3) * 0.15;
        }
    });

    return (
        <mesh ref={ref} position={position} rotation={rotation}>
            <cylinderGeometry args={[0.08, 0.08, length, 8]} />
            <meshStandardMaterial color={color} transparent emissive={color} emissiveIntensity={0.5} />
        </mesh>
    );
};

const CrystalLattice = ({ structure, color, protons, neutrons, electrons, showBonds }) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1; // Slow rotation
        }
    });

    const { atoms, bonds } = useMemo(() => {
        const atoms = [];
        const bonds = [];
        const spacing = 4;

        // Helper to add atom and bonds to neighbors
        const addAtom = (x, y, z) => {
            const pos = new THREE.Vector3(x, y, z);
            atoms.push(pos);
            // Simple distance-based bonding
            atoms.forEach(other => {
                const dist = pos.distanceTo(other);
                if (dist > 0.1 && dist < spacing * 1.5) { // Connect nearest neighbors
                    bonds.push({ start: pos, end: other });
                }
            });
        };

        // Limit grid size for performance
        const range = 1;

        if (structure.includes("Face-Centered")) {
            // FCC Unit Cell
            for (let x = -range; x <= range; x++) {
                for (let y = -range; y <= range; y++) {
                    for (let z = -range; z <= range; z++) {
                        const ox = x * spacing;
                        const oy = y * spacing;
                        const oz = z * spacing;
                        addAtom(ox, oy, oz); // Corners
                        if (x < range && y < range) addAtom(ox + spacing / 2, oy + spacing / 2, oz);
                        if (x < range && z < range) addAtom(ox + spacing / 2, oy, oz + spacing / 2);
                        if (y < range && z < range) addAtom(ox, oy + spacing / 2, oz + spacing / 2);
                    }
                }
            }
        } else if (structure.includes("Body-Centered")) {
            // BCC
            for (let x = -range; x <= range; x++) {
                for (let y = -range; y <= range; y++) {
                    for (let z = -range; z <= range; z++) {
                        const ox = x * spacing;
                        const oy = y * spacing;
                        const oz = z * spacing;
                        addAtom(ox, oy, oz);
                        if (x < range && y < range && z < range) {
                            addAtom(ox + spacing / 2, oy + spacing / 2, oz + spacing / 2);
                        }
                    }
                }
            }
        } else if (structure.includes("Hexagonal")) {
            // Hexagonal
            addAtom(0, 0, 0);
            for (let i = 0; i < 6; i++) {
                const angle = (i / 6) * Math.PI * 2;
                addAtom(Math.cos(angle) * spacing, 0, Math.sin(angle) * spacing);
                addAtom(Math.cos(angle) * spacing, spacing, Math.sin(angle) * spacing);
                addAtom(Math.cos(angle) * spacing, -spacing, Math.sin(angle) * spacing);
            }
            addAtom(0, spacing, 0);
            addAtom(0, -spacing, 0);
        } else {
            // Simple Cubic
            for (let x = -range; x <= range; x++) {
                for (let y = -range; y <= range; y++) {
                    for (let z = -range; z <= range; z++) {
                        addAtom(x * spacing, y * spacing, z * spacing);
                    }
                }
            }
        }

        return { atoms, bonds };
    }, [structure]);

    return (
        <group ref={groupRef} rotation={[0.5, 0.5, 0]}>
            {atoms.map((pos, i) => (
                <group key={i} position={pos} scale={0.3}>
                    <Atom protons={protons} neutrons={neutrons} electrons={electrons} />
                </group>
            ))}
            {showBonds && bonds.map((bond, i) => (
                <Bond key={`bond-${i}`} start={bond.start} end={bond.end} color={color} />
            ))}
        </group>
    );
};

export default CrystalLattice;
