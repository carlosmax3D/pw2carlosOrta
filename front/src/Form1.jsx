import {useState} from 'react';
import ResponsiveAppBar from './components/Menu'
export default function  ControlledComponent()  {
    const  [inputValue, setInputValue] =  useState('');
    const  handleChange = (event) => {
        setInputValue(event.target.value);
    };
return <div>
    <ResponsiveAppBar/>
    <label>Input Value:
    <input  type="text" value={inputValue} onChange={handleChange} />
    </label>
    <p>Input Value: {inputValue}</p>
</div>
};