import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Nucleus from './Nucleus';
import Electrons from './Electrons';

const Atom = ({ protons, neutrons, electrons }) => {
    const group = useRef();

    useFrame((state, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.1;
            group.current.rotation.z += delta * 0.05;
        }
    });

    return (
        <group ref={group}>
            <Nucleus protons={protons} neutrons={neutrons} />
            <Electrons count={electrons} />
        </group>
    );
};

export default Atom;
