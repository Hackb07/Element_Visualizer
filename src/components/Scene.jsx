import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Atom from './Atom';
import CrystalLattice from './CrystalLattice';
import { getElement } from '../data/elements';

const Scene = ({ protons, neutrons, electrons, viewMode, showBonds }) => {
    const element = getElement(protons);

    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {viewMode === 'crystal' ? (
                <CrystalLattice
                    structure={element.structure}
                    color={element.cpk}
                    protons={protons}
                    neutrons={neutrons}
                    electrons={electrons}
                    showBonds={showBonds}
                />
            ) : (
                <Atom protons={protons} neutrons={neutrons} electrons={electrons} />
            )}

            <OrbitControls enablePan={false} />

            <EffectComposer>
                <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={0.5} />
            </EffectComposer>
        </Canvas>
    );
};

export default Scene;
