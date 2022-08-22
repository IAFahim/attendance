import {Plane} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import React, {useRef, useState} from 'react';
import THREE from 'three';

const Card = () => {
    const ref = useRef<THREE.Mesh>(null!);

    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    let flip=true;
    useFrame((state) => {
        if(!isClicked){
        if(ref.current.rotation.y>=Math.PI/6){
             flip=false;
         }else if(ref.current.rotation.y<=-Math.PI/6){
             flip=true;
         }
         if(flip){
             ref.current.rotation.y+=0.002;
         }else {
             ref.current.rotation.y-=0.002;
         }
        }else{
            ref.current.rotation.y=0;
        }
    })
    return (
        <Plane ref={ref} args={[2, 2.5]} position={[0, 1, 0]} onClick={handleClick} scale={isClicked ? 1.618 : 1}>
            <meshBasicMaterial color={isClicked ? "#37b24d" : "#51cf66"}/>
        </Plane>
    )

};

export default Card;
