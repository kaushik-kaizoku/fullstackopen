import contacts from '../services/contacts'

const Personforms = (props) => {
    const {addPerson,handleChangeName,handleChangeNumber} = props
    

    return(
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name:<input onChange={handleChangeName}/>
                </div>
                <div>
                    number:<input onChange={handleChangeNumber}/>
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}


export default Personforms