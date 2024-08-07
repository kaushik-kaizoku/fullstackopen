import contacts from '../services/contacts'

const Persons = ({persons,handleDelete}) => {
    // const del = (id) => {
    //     contacts.remove(id)
    //     .then(data => {
    //         console.log(data)
    //         setPersons(persons.filter(person => person.id !== data.id))
    //     })
    // }
    

    return <ul>
        {persons.map(person =>
         <li key={person.id} >
           {person.name} {person.number}
           <button onClick={()=>{window.confirm(`Delete ${person.name}`)?handleDelete(person.id):alert("not deleted")}}>
            Delete
            </button>
         </li>
         )}
    </ul>
}

// const Single = (props)=> {
    
//     return <li>
//         {props.name} {props.number} <button onClick={() => props.del(props.listId)}>Delete</button>
//         </li>
// }

export default Persons