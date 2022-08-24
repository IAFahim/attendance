import {Plane, Text} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import React, {useEffect, useRef, useState} from 'react';
import THREE from 'three';

const Card = () => {
    const ref = useRef<THREE.Mesh>(null!);
    const mouse = {x: 0, y: 0};

    function mousemove(event: MouseEvent) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = 1 - (event.clientY / window.innerHeight) * 2;
        console.log(mouse.x, mouse.y);
    }

    useEffect(() => {
        window.addEventListener("mousemove", mousemove);
    })


    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    useFrame((state) => {
        if (!isClicked) {
            ref.current.rotation.x = mouse.y / 6;
            ref.current.rotation.y = -mouse.x / 6;
        } else {
            ref.current.rotation.y = 0;
        }
    })
    return (
        <>
            <Plane ref={ref} args={[2, 2.5]} position={[0, 1, 0]} onClick={handleClick} scale={isClicked ? 1.618 : 1}>
                <meshBasicMaterial color={isClicked ? "#37b24d" : "#51cf66"}/>
                <Text color="black" anchorX="center" anchorY="middle" scale={[5,5,5]} position={[0,-1.5,.5]}>
                    Boo scared?
                </Text>
            </Plane>

        </>

    )

};

export default Card;
