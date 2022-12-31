import React from 'react'
import Button from './Button'
import { useContext } from 'react'
import { CounterContext } from '../Context/CounterHolder'

export default function Counter() {
  const {count, changeHandler} = useContext(CounterContext);
  return (
    <>
    <Button data='-' event = {() => changeHandler(count-1)}/>
        <div className='text-5xl'>{count}</div>
    <Button data='+' event = {() => changeHandler(count+1)}/>
    </>
  )
}
