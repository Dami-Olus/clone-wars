import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Posts.css"

function Posts({name, description, message, photoUrl}) {
  return (
    <div className = 'posts'>
      <div className="posts__header">
        <Avatar />
        <div className="posts__info">
          <h2>Damola Olusakin</h2>
          <p>Description</p>
        </div>
      </div>
      <div className="posts__body">
        <p>Message goes here</p>
      </div>
    </div>
  )
}

export default Posts
