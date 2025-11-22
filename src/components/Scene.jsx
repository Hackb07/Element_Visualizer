import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import Atom from './Atom';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const Scene = ({ protons, neutrons, electrons }) => {
    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <color attach="background" args={['#050510']} />

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4400ff" />

            <Atom protons={protons} neutrons={neutrons} electrons={electrons} />

            <OrbitControls enablePan={false} minDistance={5} maxDistance={50} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Post Processing for Glow */}
            <EffectComposer>
                <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1.5} />
            </EffectComposer>
        </Canvas>
    );
};

export default Scene;
