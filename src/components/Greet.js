//Functional Component in React

import React from 'react';

// function Greet()
// {
//     return <h1>Hello Gul-e-Ada</h1>
// }


//function in ES6 form
const Greet = ( props)=> {
    console.log(props)
return (
<div><h1> Hello {props.name} aka {props.heroName}</h1>
{props.children}
</div>
)
}
  
// export const Greet = () => <h1>Gul-e-Ada</h1>    // this is a named export
export default Greet;    //default export



//we are having two ways of exporting 
//one is default export , which we can import in other documents by any name
//other is named export , and it is only exported in the other documents using the exact name