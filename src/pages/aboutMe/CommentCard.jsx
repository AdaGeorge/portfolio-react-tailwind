import React from 'react'

const CommentCard = ({comment, author, rol}) => {
  return (
    <article className='bg-p-clear-2 p-10 w-80 max-sm:w-screen flex flex-col justify-center items-center rounded-md drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]' >
        <blockquote className='mb-4'>{comment}</blockquote>
        <cite>~ {author}</cite>
        <p className='text-sm'>{rol}</p>
    </article>
  )
}

export default CommentCard