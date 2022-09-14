import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className={classes.green}>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default Counter