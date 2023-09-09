//CLASS Component in React
//for class component we required import of react and react components

import React , { Component } from 'react';
 
class Welcome extends Component{
    render()
    {
        return(
            <div>
             <h1>Best of Luck {this.props.name}</h1>
             {this.props.children}
             </div>
             )

    }
}

export default Welcome;