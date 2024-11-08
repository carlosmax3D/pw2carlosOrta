import React from "react";
import { Link, Navigate } from "react-router-dom";

const fun = () =>{
    return <>
    <div>
        <h1>404 - Not Found</h1>
        <p>Buen intento, vas al home jeje</p>
        <br></br>
        <Link to="/">Go Home</Link>
        <Navigate to="/" replace/>
    </div>
    </>
}

export default fun;