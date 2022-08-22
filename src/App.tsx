import React from 'react';
import {BrandGithub} from "tabler-icons-react";
import MainScreen from "./componet/MainScreen/MainScreen";

function App() {
    return (
        <>
            <div style={{width: "100vm", height: "100vh"}}>
                <header style={{fontSize: "x-large", position: "absolute", left: 10, padding: 10}}>Attendance</header>
                <BrandGithub style={{position: "absolute", right: 10, padding: 12}} size={32}/>
                <MainScreen/>

                <img style={{position: "absolute", bottom: 10, padding: 12, width:200}} src={require("./img/nsudc-logo.png")}/>
            </div>
            <input/>
        </>
    );
}

export default App;
