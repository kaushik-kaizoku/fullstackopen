import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback setGood={setGood} setNeutral={setNeutral} setBad={setBad}/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Feedback = (props) => {
  const {setGood,setNeutral,setBad} = props
  

  return(
    <>
    <h1>Give Feedback</h1>
    <Button onClick={() => setGood(c => c + 1)} text="good"/>
    <Button onClick={() => setNeutral(c => c + 1)} text='neutral'/>
    <Button onClick={() => setBad(c =>c + 1)} text='bad'/>
    </>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  const {good , neutral ,bad} = props
  if (good == 0 && neutral == 0 && bad == 0)
    return <h3>No feedback given</h3>
  else
    return(
    
    <table> 
    <tbody>   
    <StatisticLine text="good" value ={good} />
    <StatisticLine text="neutral" value ={neutral} />
    <StatisticLine text="bad" value ={bad} />
    <StatisticLine text="all" value ={good + neutral + bad} />
    <StatisticLine text="Average" value ={(good*1 + neutral*0 - bad*1)/(good + neutral + bad)} />
    <StatisticLine text="Positive" value ={`${(good*100)/(good + neutral + bad)} %`} />
    </tbody>
    </table>
  )
}

const StatisticLine = ({text, value}) =>{
  return (
    <tr> 
    <td>{text}</td>
    <td> {value}
    </td>
    </tr>

  )
}
export default App