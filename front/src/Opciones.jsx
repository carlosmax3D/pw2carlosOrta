import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Options = (props) =>{
    return <div>
        <Link to="/">Home page</Link>
        <br/>
        <Link to="/test">Component Mount component</Link>
        <br/>
        <Link to="/test1">Component Update component</Link>
        <br/>
        <Link to="/test2">Component Umount component</Link>
        <br/>
        <Link to="/test3">Hook mount/update/umount</Link>
        <br/>
    </div>
}

export default Options