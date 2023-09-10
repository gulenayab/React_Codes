// state in React

import React , {Component} from 'react' ; 
class Message extends Component{
    constructor(){
        super()   //is a class
        this.state = {
             message : 'Welcome to myChannel'
        }
    }
    changeMessage()
    {
        this.setState({
         message : 'Thank you for subscribing :)'
        })
    }
    render()
    {
        return(
            <div>
             <h1>{this.state.message}</h1>
             <button onClick = {()=>this.changeMessage()}>Subscribe</button>.
             </div>
             )

    }
}

export default Message ;