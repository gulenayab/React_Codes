//class component and state
import React , { Component } from 'react';
 
class Counter extends Component{

constructor(props){
    super(props)
        this.state = {
         count : 0
        }
}
increment()
{
    // this.setState(
    // {
    //     count :  this.state.count + 1
    // } , () =>
    // {
    //     console.log("count : ", this.state.count)
    // })
    this.setState((prevState)=> ({
           count : prevState.count + 5
    })
    )
    console.log(this.state.count)
}
incrementFive()
{
    this.increment();
    
}
    render()
    {
        return(
            <div>
           <div>Count - {this.state.count}</div> 
           <button onClick = {()=> this.incrementFive()}>Increment</button>
             </div>
             )

    }
}

export default Counter;