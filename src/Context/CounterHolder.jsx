import React,{useState} from 'react'
import { createContext } from 'react'
const CounterContext = createContext()

export default function CounterHolder(props) {
    const [count, setCounter] = useState(20);

    const changeHandler = (newCount) => {
        setCounter(newCount);
    }

  return (
    <CounterContext.Provider value={{count, changeHandler}}>
            {props.children}
    </CounterContext.Provider>
  )
}

export {CounterContext}
