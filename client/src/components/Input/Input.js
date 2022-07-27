import React from 'react'
import './Input.css'

export default function Input({ message, sendMessage , setMessage , theme }) {

  const btn = `sendButton sendButton-${theme}`
  const Ip = `input input-${theme}`

  return (
    <div>
        <form className='form'>
            <input 
                className={Ip}
                type="text"
                placeholder = "Type a message ... "
                autoComplete='off'
                value={message} 
                onChange={(event)=> setMessage(event.target.value)}
                onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null }
            />
            <button className={btn} onClick={(event) => sendMessage(event)}>Send</button>
        </form>

        {/* <input  value={message} 
          onChange={(event)=> setMessage(event.target.value)}
          onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null }
        />*/}
    </div>
  )
}
