import THREE from 'three';
import {createRoot} from 'react-dom/client'
import React, {useRef, useState} from 'react'
import {Canvas, useFrame, ThreeElements} from '@react-three/fiber'
import {Lightformer, Plane, PointMaterial, SpotLight} from '@react-three/drei';
import Card from '../Card/Card';

const MainScreen = () => {
    return (
        <Canvas>
            <Card/>
        </Canvas>
    );
};

export default MainScreen;
