import React from 'react';
import {BrandGithub, Send} from "tabler-icons-react";
import MainScreen from "./componet/MainScreen/MainScreen";

function App() {
    return (
        <>
            <div style={{width: "100vm", height: "100vh", padding: 0, margin: 0}}>
                <header
                    style={{fontSize: "xx-large", position: "absolute", left: 5, padding: 8, zIndex: 1}}>
                    Attendance
                </header>
                <BrandGithub style={{position: "absolute", right: 5, padding: 10, paddingTop: 16, zIndex: 1}}
                             onClick={() => {
                                 window.open("https://github.com/IAFahim/attendance")
                             }} size={32}/>

                <MainScreen/>
                <img style={{position: "absolute", bottom: 5, padding: 5, width: 192}}
                     src={require("./img/nsudc-logo.png")} alt={"logo"}/>
            </div>
            <div style={{width: "100vm", height: "100vh"}}>
                <input/>
            </div>
        </>
    );
}

export default App;
