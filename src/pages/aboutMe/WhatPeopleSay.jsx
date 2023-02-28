import React from 'react'
import CommentCard from "./CommentCard";

const WhatPeopleSay = () => {
  return (
    <section className="max-w-screen-lg m-auto my-20">
    <h3 className="text-5xl text-center text-s-dark drop-shadow-[0_0_3px_rgba(0,0,0,0.25)] my-6 max-w-md leading-relaxed mx-auto mb-16 max-sm:text-4xl max-sm:mx-8">
      What People say about me
    </h3>
    <div className="flex max-md:flex-col max-md:items-center gap-10 m-auto">
      <CommentCard
        comment={
          "Working with Ada is a rewarding experience, she is always looking to do a good job and make improvements in whatever she does."
        }
        author={"Humberto Rocha"}
        rol={"former employer"}
      />
      <CommentCard
        comment={
          "She has clear and concise proposals on how to support and make any project grow."
        }
        author={"Guillermo Vidal"}
        rol={"former coworker"}
      />
      <CommentCard
        comment={
          "Miss Adashi has leadership characteristics, needs-solving skills, punctuality and is characterized by her communication skills."
        }
        author={"Jonnathan Salas"}
        rol={"former coworker"}
      />
    </div>
  </section>
  )
}

export default WhatPeopleSay