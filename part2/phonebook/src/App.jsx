import { useState,useEffect } from 'react'
import axios from 'axios'
import Personforms from './components/Phonebook'
import Persons from './components/Persons'
import Filter from './components/Filter'
import contacts from './services/contacts'
import Notification from './components/Notification'

function App() {
  const [persons,setPersons] = useState([])
  const [newPerson,setNewPerson] = useState({})
  const [newNumber, setNewNumber] = useState({})
  const [filter,setFilter] = useState([])
  const [message, setMessage] = useState(null)
  
    const addPerson =(e)=>{
        e.preventDefault()
        const p = {
          name:'',
          number:'',
          id:''
      }       
      const edit = persons.find(person => person.name === newPerson) 
      if (newPerson =="" || newNumber=="") {
        alert("enter data") 
        return 
      }
        else if(edit) {
          if(window.confirm(`${newPerson} is already added to phonebook, replace the old number with new one`)){
            edit.number = newNumber
            contacts.update(edit.id, edit)
            .then(editedPerson =>{ 
              // console.log(data)
              setPersons(Persons.map(person => person.id !== id ? person : editedPerson))  
              setMessage(
                `Edited ${editedPerson.name} number`
              )
              setTimeout(() => {
                setMessage(null)
              }, 3000)
              setNewNumber('')
              setNewPerson('')
            })
            .catch(error => {
              // console.log(error)
              setMessage(
                `Information of '${edit.name}' was already removed from server`
              )
              setTimeout(() => {
                setMessage(null)
              }, 5000)
              setPersons(persons.filter(person => person.id !== edit.id)) 
            })
          }
        }
        else{
            p.name = newPerson
            p.number = newNumber
            p.id = `${Math.floor(Math.random() * 101)}`
            contacts.create(p)
            .then(data =>{
                // console.log(data)
                setPersons(persons.concat(data))
                setMessage(
                  `Added ${data.name} `
                )
                setTimeout(() => {
                  setMessage(null)
                }, 3000)
                setNewNumber('')
                setNewPerson('')
            })
        }         
    }

    const handleChangeName = (e) =>{
       setNewPerson(e.target.value)         
    }

    const handleChangeNumber = (e) =>{
        setNewNumber(e.target.value)     
    }

  
  useEffect(()=>{
    contacts.getAll()
    .then(data => setPersons(data))
  }, [])
 


  const del = (id) => { 
    contacts.remove(id)
    .then(data => {
        // console.log(data)
        setPersons(persons.filter(person => person.id !== data.id))
    })
}

const filterNames = (e) => {
  const keyword = e.target.value
  const nameArray = persons.filter(person => person.name.includes(keyword))
  setFilter(nameArray)
}

  return (
    <>
      <Notification message={message} />
      <h2>Search</h2>
      <Filter filterNames={filterNames}/>
      <Persons persons={filter} handleDelete={del} />
      <h2>Phonebook</h2>
      <Personforms handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons} handleDelete={del}/>
    </>
  )
}

export default App
