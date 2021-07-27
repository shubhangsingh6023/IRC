import React,{Component}from 'react'
import './App.css';
import {Headingbar} from './heading';
import Card from './Addcard/Addcard'

class App extends Component {
  render(){
    
  return (
    <div>
      <Headingbar/>
      <Card/>
    </div>
  );
}}

export default App;
