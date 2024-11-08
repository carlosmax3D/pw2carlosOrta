import {useState, useEffect} from 'react';
import axios from 'axios';
import ResponsiveAppBar from './components/Menu'
const Usuarios = (props) => {
    return <>
    {props.data.map((value,index) =>(<div key={index}>
        <div>ID: {value.id}</div>
        <br></br>
        <div>Name: {value.Name}</div>
        <br></br>
    </div>
    ))}
    </>
}
export default function  PageUsuario()  {
    const  [inputValue, setInputValue] =  useState('');
    const  [data, setData] =  useState(null);
    const  handleChange = (event) => {
        setInputValue(event.target.value);
    };
  useEffect(() => {
    axios.get('/api/users/users')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
return <div>
    <ResponsiveAppBar/>
    {data ? <Usuarios data={data}/> : "Loading...."}
</div>
};