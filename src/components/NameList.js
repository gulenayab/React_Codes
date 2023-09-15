import React from 'react'
function NamedList()
{
// const names = ['Gul-e-' , 'Candy' , 'Ada']

const persons = 
[
   {
    age : 18 ,
    name : 'Gul',
    dep : 'DCSE'
   }
   ,
   {
    age : 19 ,
    name : 'Gul',
    dep : 'CS'
   },{
    age : 22 ,
    name : 'nyb',
    dep : 'CSE'
   },{
    age: 30 ,
    name : 'candy',
    dep : 'EE'
   },
   {
    age : 40,
    name : 'Sudais',
    dep : 'EE'
   }
]
const personsList =  persons.map(person => <h2 key = {person.age}> I am {person.name}. I am {person.age} years old. And I am in {person.dep}</h2>)
return(
    <div>
{
    personsList
    // names.map(name =><h2>{name}</h2>)
}


    {/* <h1>{names[0]}</h1>
    <h1>{names[1]}</h1>
    <h1>{names[2]}</h1> */}
    </div>

)
}
export default NamedList