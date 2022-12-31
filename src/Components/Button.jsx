import React from 'react'

export default function Button(props) {
  return (
    <div onClick={props.event} className='bg-red-500 text-3xl m-4 px-3 py-2 text-white rounded '>{props.data}</div>
  )
}
