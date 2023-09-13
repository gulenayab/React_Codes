import React , {Component} from 'react'
class ConditionalComponent extends Component
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
        if(this.state.isLoggedIn)
    {
        return(
            <div>Hello gul-e-</div>
        )
    }
    else
    {
        return(
            <div>hello guest</div>
        )
    }
        
    }
}
export default ConditionalComponent