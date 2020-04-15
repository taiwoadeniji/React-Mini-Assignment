import React from 'react';
import logo from './logo.svg';


export interface myAppProps {
}

interface myState {
  sentence:string;
  colors: any;

}


export default class App extends React.Component<myAppProps, myState> {
    constructor(props: myAppProps) {
        super(props);

        this.state = {
          sentence: '',
          colors: ''
          
        }
      

    }
    componentDidMount() {
      this.setState( { colors:'red'} )
      this.setState( {sentence:'React mini assignment in progress'} )
  
    }
  

     myColors = () => {
      this.setState( { colors:'violet' } )
    }

   render() {
    return (

      <div style = { {backgroundColor: this.state.colors} }>
        <h1> {this.state.sentence} </h1>
        <button  onClick ={this.myColors} > Click Button </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      </div>
    );
  }
}
