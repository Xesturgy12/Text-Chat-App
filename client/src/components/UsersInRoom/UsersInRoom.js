import React from 'react'
import './UsersInRoom.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import UserBar from '../UserBar/UserBar'

export default function UsersInRoom({ userslist , name , theme }) {

  var divClass = `${theme}-div  users-list`
  var hdnclass = `list-txt list-${theme}`
  var usrClass = `user-block usr-${theme}`

  return (
    
    <ScrollToBottom className={divClass}>
      <div className={hdnclass}>List of users in room</div>
      <div className={usrClass}>{name}</div>
      {userslist.map((username, i) => <div key={i}> <UserBar name={name} username={username} theme={theme}/> </div>)}
    </ScrollToBottom>
  )
}
