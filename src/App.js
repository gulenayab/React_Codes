// import logo from './logo.svg';
import './App.css';
import React , { Component } from 'react';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Hello from './components/Hello'
//functional components
class App extends Component { 
  render (){
    return (
    <div className="App">
      
       <Greet name = "gull"  heroName = "candy" >
        <p>This is a child element</p>
       </Greet>
       <Greet name = "Ada"  heroName = "nyb">
        <button>Learn more</button>
</Greet>
       <Greet name = "candy" heroName ="dear" />


       <Hello /> 
<Welcome name = "Ada">
     <button>View Grade</button>
</Welcome>
<Welcome name = "Gul-e-">
     <p>Work hard and you will be successful
     </p>
</Welcome>
    </div>
    ); 
}
} 


export default App;
