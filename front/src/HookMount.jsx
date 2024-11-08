import React, { useEffect, useState } from 'react'
import Options from './Opciones';

const MountingPhase = (props) =>{
    const [data, setData] = useState(null);
    useEffect(() => {
        console.dir(props);
        const timer = setInterval(()=>{
            const d = new Date().toString()
            console.dir(d)
            setData(d)
        }, 1000);
        return () => clearInterval(timer);
    },[])
    return <div><br/><br/><br/><br/>
        {data ? data : 'Loading....'}
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <Options></Options>
    </div>
}

export default MountingPhase