import React from 'react'
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, timer: null };
  }

  componentDidMount() {
    // Código para ejecutar cuando se monta el componente
    setInterval(()=>this.setState({...this.state, count: this.state.count + 1 }), 1000);

  }
  componentWillUnmount(){
    clearInterval();
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

export default MyComponent