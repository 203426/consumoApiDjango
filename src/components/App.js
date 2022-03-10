import React from "react";
import Register from "./register/Register";
import Login from "../components/login/LoginV2";
// import Prueba from "./Prueba";
import Profile from "./profile/Profile"


import {BrowserRouter,Link,Route,Routes, Navigate} from "react-router-dom";

function App(){
    return(

            <BrowserRouter>
                
                <Routes>


                {/* <Route path="/"  element={<Navigate to="/Login"/>}/>  */}
                <Route path="/Login" element={<Login/>} />
                <Route path="/Register" element={<Register/>} />
                <Route path="/Profile"  element={<Profile/>} />

                <Route
                    path="*"
                    element={<Navigate to="/login" />}
                />


                </Routes>
            
            </BrowserRouter>
        

        

    )
    
}

export default App;