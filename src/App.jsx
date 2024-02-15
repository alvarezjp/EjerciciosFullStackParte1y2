import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Button texto={"Good"} variable={good} activador={setGood} />
    </div>
  )
}

const Button = ({texto,variable,activador}) => {
  return (
    <button onClick={{activador}}>
      {texto} 
    </button>
  )
}

export default App