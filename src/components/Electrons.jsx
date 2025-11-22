import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Electron = ({ radius, speed, offset, color }) => {
    const ref = useRef();
    // Initialize with random rotation once on mount
    const [rotation] = useState(() => [Math.random() * Math.PI, Math.random() * Math.PI, 0]);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed + offset;
        if (ref.current) {
            ref.current.position.x = Math.cos(t) * radius;
            ref.current.position.z = Math.sin(t) * radius;
            // Add some wobble
            ref.current.position.y = Math.sin(t * 2) * (radius * 0.2);
        }
    });

    return (
        <group rotation={rotation}>
            <mesh ref={ref}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshBasicMaterial color={color} />
                <pointLight distance={3} intensity={2} color={color} />
            </mesh>
        </group>
    );
};

const Electrons = ({ count }) => {
    // Organize electrons into shells (simplified 2, 8, 18, 32...)
    const shells = [2, 8, 18, 32, 32, 18, 8];

    const electrons = [];
    let remaining = count;
    let shellIndex = 0;

    while (remaining > 0 && shellIndex < shells.length) {
        const inShell = Math.min(remaining, shells[shellIndex]);
        const radius = 3 + shellIndex * 1.5;

        for (let i = 0; i < inShell; i++) {
            electrons.push({
                radius: radius,
                speed: 1.5 - (shellIndex * 0.2),
                offset: (i / inShell) * Math.PI * 2,
                key: `e-${shellIndex}-${i}`
            });
        }

        remaining -= inShell;
        shellIndex++;
    }

    return (
        <group>
            {electrons.map((e) => (
                <Electron key={e.key} radius={e.radius} speed={e.speed} offset={e.offset} color="#44AAFF" />
            ))}
        </group>
    );
};

export default Electrons;
