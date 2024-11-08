import { useRef } from "react";
import ResponsiveAppBar from './components/Menu'
export default function Uncontrolled() {
  const selectRef = useRef(null);
  const checkboxRef = useRef(null);
  const inputRef = useRef(null);
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Input value:", inputRef.current.value);
    console.log("Select value:", selectRef.current.value);
    console.log("Checkbox value:", checkboxRef.current.checked);
  }
  function onChangeTest(event){
    console.dir(event)
  }
  return (
    <form onSubmit={handleSubmit}>
    <ResponsiveAppBar/>
      <label>
        <p>Name:</p>
        <input ref={inputRef} type="text"  onChange={onChangeTest}/>
      </label>
      <label>
        <p>Favorite color:</p>
        <select ref={selectRef} onChange={onChangeTest}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </label>
      <label>
        Do you like React?
        <input type="checkbox" ref={checkboxRef}  onChange={onChangeTest}/>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}