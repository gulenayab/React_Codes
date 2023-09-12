import React , {Component} from 'react'
class EventBind extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            message: 'Hello'
        }
        
    }
    eventBind()
    {
        this.setState({
        
            message : 'Welcome here'
        })
        console.log(this)
    }
    render()
    {
        return(
            <div>
                 <div>{this.state.message}</div>
              <button onClick = {this.eventBind.bind(this)}>Click</button>
            </div>
        )
    }
}
export default EventBind