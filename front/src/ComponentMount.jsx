import React from "react";
import Options from "./Opciones";
import './App.css';

class ComponentDidMount extends React.Component {
    constructor(props) {
      super(props);
      console.log(props);
      console.log('Constructor called');
      this.state = {
        count: 0
      };
    }
  
    static getDerivedStateFromProps(props, state) {
      console.log('getDerivedStateFromProps called');
      return null;
    }
  
    componentDidMount() {
      console.log('componentDidMount called');
    }
  
    incrementCount = () => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    };
  
    render() {
      console.log('render called');
      return (
        <div>
          <h1>Counter App</h1>
          <p>Count: {this.state.count}</p>
          <button onClick={this.incrementCount}>Increment</button>
        <Options></Options>
        </div>      
      );
    }
  }
  
  export default ComponentDidMount
