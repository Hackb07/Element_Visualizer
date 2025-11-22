import React, { useMemo } from 'react';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Nucleus = ({ protons, neutrons }) => {
    const particles = useMemo(() => {
        const temp = [];
        const total = protons + neutrons;

        // Simple packing algorithm: Fibonacci sphere or random packing with repulsion could be better,
        // but for simplicity and "messy nucleus" look, we'll use a random distribution inside a sphere
        // and then relax them (or just simple random for now).
        // Better: Fibonacci sphere for even distribution.

        const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle

        for (let i = 0; i < total; i++) {
            const y = 1 - (i / (total - 1)) * 2; // y goes from 1 to -1
            const radius = Math.sqrt(1 - y * y); // radius at y
            const theta = phi * i; // golden angle increment

            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;

            // Scale it up slightly so they don't overlap too much
            const scale = Math.pow(total, 1 / 3) * 0.8;

            const isProton = i < protons;

            temp.push({
                pos: [x * scale, y * scale, z * scale],
                color: isProton ? "#FF3333" : "#AAAAAA", // Red for Proton, Grey for Neutron
                type: isProton ? 'proton' : 'neutron'
            });
        }
        return temp;
    }, [protons, neutrons]);

    if (protons === 0 && neutrons === 0) return null;

    return (
        <group>
            {particles.map((p, i) => (
                <Sphere key={i} args={[0.4, 32, 32]} position={p.pos}>
                    <meshStandardMaterial color={p.color} roughness={0.3} metalness={0.2} />
                </Sphere>
            ))}
        </group>
    );
};

export default Nucleus;
