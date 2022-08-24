import React from 'react';
import {BrandGithub} from "tabler-icons-react";
import MainScreen from "./componet/MainScreen/MainScreen";

function App() {
    return (
        <>
            <div style={{width: "100vm", height: "100vh"}}>
                <header style={{fontSize: "xx-large", position: "absolute", left: 10, padding: 10}}>Attendance</header>
                <BrandGithub style={{position: "absolute", right: 10, padding: 10, paddingTop: 20, zIndex: 1}}
                             onClick={() => {
                                 window.open("https://github.com/IAFahim/attendance")
                             }} size={32}/>
                <MainScreen/>
                <img style={{position: "absolute", bottom: 5, padding: 10, width: 192}}
                     src={require("./img/nsudc-logo.png")} alt={"logo"}/>
            </div>
            <div style={{width: "100vm", height: "100vh"}}>
                <input/>
            </div>
        </>
    );
}

export default App;
