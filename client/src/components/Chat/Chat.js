import React , { useState , useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'

import './Chat.css'
import UsersInRoom from '../UsersInRoom/UsersInRoom'


let socket

export default function Chat() {


  const [name,setName] = useState('')
  const [room,setRoom] = useState('')
  const [message,setMessage] = useState('')
  const [messages,setMessages] = useState([])
  const [avatarsrc, setAvatarsrc] = useState('')
  const [theme,setTheme] = useState('light')
  const [userslist,setUserslist] = useState([])


  const ENDPOINT = 'http://localhost:5000/'
  const loc = document.location
// whenever need to use location , add 'dcoument.location' in its place


  useEffect(()=>{

      const {name, room , avatarsrc } = queryString.parse(loc.search)

      socket = io(ENDPOINT , {transports: ['websocket', 'polling', 'flashsocket']})

      setName(name)
      setRoom(room)
      setAvatarsrc(avatarsrc)

      

      socket.emit('join', {name,room, avatarsrc}, ()=>{   })
      return()=>{
        socket.emit('disconnect')
        socket.off()
      }

  },[ENDPOINT, loc.search])



  useEffect(() =>{
    socket.on('message', (message)=>{

      setMessages([...messages, message])
    })
  },[messages])



  const sendMessage = (event) =>{
    event.preventDefault()

    if(message) {
      socket.emit('sendMessage', message , ()=> setMessage(''))
                }
    }

  // console.log(message , messages)
    
    var cntnr = `container ${theme}-div`

  useEffect(()=>{
    socket.on('userslist',(data)=>{
      setUserslist(data)
    })
  },[])
    

    return (
        <div className='outerContainer'>
        
        <div className='menu'>
        <UsersInRoom userslist={userslist} name={name} theme= {theme} />
        </div>

        <div className={cntnr}>
          <InfoBar room={room} theme={theme} setTheme={setTheme} />
          <Messages messages={messages} name = {name}  theme={theme} />
          <Input message={message} setMessage={setMessage} sendMessage ={sendMessage}  theme={theme} />
        </div>
      </div>
      )
}
