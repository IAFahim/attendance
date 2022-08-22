import * as THREE from 'three';
import {createRoot} from 'react-dom/client'
import React, {useRef, useState} from 'react'
import {Canvas, useFrame, ThreeElements} from '@react-three/fiber'
import {Plane} from '@react-three/drei';

const MainScreen = () => {
    return (
        <Canvas>
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
            <Plane args={[2, 4]} position={[-1,0,0]} rotation={[0,Math.PI/6,0]}>
                <meshBasicMaterial color="hotpink"/>
            </Plane>
            <Plane args={[2, 4]} position={[1,0,0]} rotation={[0,-Math.PI/6,0]}>
                <meshBasicMaterial color="black"/>
            </Plane>
        </Canvas>
    );
};

export default MainScreen;
