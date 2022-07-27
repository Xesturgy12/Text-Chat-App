import React from 'react'
import './Message.css'
import ReactEmoji from 'react-emoji'

export default function Message({ message:{user , text , avatarsrc}, name , theme}) {
    
    let IsSentByCurrentUser = false

    const TrimmedName = name.trim().toLowerCase()

    if(user === TrimmedName) IsSentByCurrentUser = true

    const user_msg = `messageBox ${theme}-user-box`
    const sender_msg = `messageBox ${theme}-sender-box`
    const sender_txt = `messageText ${theme}-sender`

  return (
      IsSentByCurrentUser
      ?(
        <div className= "messageContainer justifyEnd">
          <p className='sentText pr-10'>{TrimmedName}</p>
          <div className={user_msg}>
            <p className='messageText user-text'>{ReactEmoji.emojify(text)}</p>
          </div>
          <img src={avatarsrc} alt='pfp' className='pfp'></img> 
        </div>
      )
      :(
          <div className= "messageContainer justifyStart">
            <img src={avatarsrc} alt='pfp' className='pfp'></img>
            <div className={sender_msg}>
            <p className={sender_txt}>{ReactEmoji.emojify(text)}</p>
            </div>
            <p className='sentText pl-10'>{user}
            </p>
        </div>       
      )
  )
}
