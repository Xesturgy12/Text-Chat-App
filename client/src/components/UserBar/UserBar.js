import React from 'react'
import './UserBar.css'

export default function UserBar({name ,username, theme}) {
  let IsUser = false
  
  if(username === name)  IsUser = true
  const sendUsr = `user-bar sndr-${theme}`
  
  return (
    IsUser?
    (
      null
    )
    :
    (
      <div className={sendUsr}>
      {username}
      </div>
    )

  )
}
