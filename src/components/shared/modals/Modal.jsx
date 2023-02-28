import React from 'react'

const Modal = ({isOpen, setIsOpen, infoModal}) => {

  return (
    isOpen &&
    <div className='w-screen h-screen fixed top-0 left-0 z-50 flex items-center justify-center bg-s-dark bg-opacity-70'>
    <div className='bg-s-clear rounded-md shadow-lg border-m-clear border-2 border-solid relative top-50 left-auto right-auto z-20 w-[600px] max-w-screen min-h-[10rem] text-black'>
        <div className='flex justify-between mx-7 mt-6 border-b-2 border-y-p-dark border-solid'>
            <h2 className='font-bold text-2xl'>{infoModal.value}</h2>
            <p className='text-xl'>{infoModal.percent}</p>
        </div>
        <p className='text-center my-4 p-5'>{infoModal.description}</p>
        <div className='p-4 flex justify-end'>
        <button
        className=' text-p-clear bg-m-clear p-2 px-4 rounded-sm mx-2 my-1 hover:opacity-70'
        onClick={()=>setIsOpen(false)}
        >
          Ok
        </button>
        </div>
    </div>
    </div>
  )
}

export default Modal