import {Plane, Text} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import {Box, Flex} from '@react-three/flex';
import React, {useEffect, useRef, useState} from 'react';
import THREE from 'three';

const Card = () => {
    // const ref = useRef<THREE.Mesh>(null!);
    // const mouse = {x: 0, y: 0};
    //
    // function mousemove(event: MouseEvent) {
    //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    //     mouse.y = 1 - (event.clientY / window.innerHeight) * 2;
    //     console.log(mouse.x, mouse.y);
    // }
    //
    // useEffect(() => {
    //     window.addEventListener("mousemove", mousemove);
    // })
    //
    //
    // const [isClicked, setIsClicked] = useState(false);
    // const handleClick = () => {
    //     setIsClicked(!isClicked)
    // }
    //
    // useFrame((state) => {
    //     if (!isClicked) {
    //         ref.current.rotation.x = mouse.y / 6;
    //         ref.current.rotation.y = -mouse.x / 6;
    //     } else {
    //         ref.current.rotation.y = 0;
    //     }
    // })

    const box = <Box width="50" height="50">
        {(width, height) =>
            <Plane args={[width, height]} scale={1}>
                <meshBasicMaterial color={"#"+Math.floor(Math.random()*16777215).toString(16)}/>
            </Plane>
        }
    </Box>


    function oneRow(width_str: string) {
        let width = parseInt(width_str);
        let segment = window.outerWidth / width + 2;
        const boxes = [];
        for (let i = 0; i < segment; i++) {
            boxes.push(box);
        }
        return (<Flex justify={"center"} justifyContent={"space-between"} position={[-.25, 0, 0]}
                      flexDirection={"row"}>{boxes}</Flex>)
    }


    return (
        <>
            <Flex flexDirection={"column"} justifyContent={"space-between"}>
                <Box>
                    {oneRow("50")}
                </Box>
                <Box>
                    {oneRow("50")}
                </Box>
                <Box>
                    {oneRow("50")}
                </Box>

            </Flex>
        </>

    )

};

export default Card;
