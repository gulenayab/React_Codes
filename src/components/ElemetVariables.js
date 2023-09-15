import React , {Component} from 'react'
class ElementVariables extends Component
{
    constructor(props)
    {
        super(props)
        
            this.state = {
                isLoggedIn : true
            }
        
    }
    
    render()
    {
        let message 
        if(this.state.isLoggedIn){
        message = <h1>Hello Gul-e-ada</h1>
        }
        else
        {
            message = <div>Hello Guest</div>
        }
        return <div>{message}</div>
        
    }
    
    
}
export default ElementVariables