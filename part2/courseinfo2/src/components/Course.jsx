const Course = ({course}) =>{
    const {id,name,parts} = course
    return (<div>
        <Header heading={name}></Header>
        <Content parts={parts}></Content>
        <Total parts={parts}></Total>
    </div>

    )
}

const Header = ({heading}) => {
    return <h1>{heading}</h1>
}

const Content = ({parts}) => {
    return(<div>
        {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}></Part>)} 
        </div>
    )
}

const Part =(props)=>{
    return(<p>{props.name} {props.exercises}</p>)
}

const Total = ({parts}) =>{
    const sum = parts.reduce((s,p)=>{
        
        return s + p.exercises
    },0)

    return(
      <p>total of {sum} exercises</p>
    )
  }
export default Course