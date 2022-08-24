import THREE from 'three';
import {createRoot} from 'react-dom/client'
import React, {useRef, useState} from 'react'
import {Canvas, useFrame, ThreeElements} from '@react-three/fiber'
import {Lightformer, Plane, Cloud, Stars, Text, CameraShake, Sky} from '@react-three/drei';
import Card from '../Card/Card';

const MainScreen = () => {

    return (
        <Canvas>

            <Card/>
        </Canvas>
    );
};

export default MainScreen;
