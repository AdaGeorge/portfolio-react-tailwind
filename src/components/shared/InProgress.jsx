import React from 'react'
import {GrInProgress} from 'react-icons/gr'

const InProgress = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-9'>
        <GrInProgress className='text-8xl'/>
        <p className='text-4xl'>In Progress...</p>
    </div>
  )
}

export default InProgress