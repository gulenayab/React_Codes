// React with JSX 
import React from 'react' ;
// const Hello = () => 
// {
//     return (
//     <div>
//         <h1>Hello Gul-e-</h1>
//     </div>
//     )
// }


//React without JSX

const Hello = ()=>
{
    //the createElement method takes three parameters 
    // 1:  Html attribute
    // 2: object -:> key value pair
    // 3:  the body / content
    return React.createElement('div' ,
    {id: 'hello' , className : 'dummyText'} ,
     //null ,  // {id: 'hello' , className : 'dummyText'}
     React.createElement('h1' , null , 'I am candy'))
}


export default Hello;