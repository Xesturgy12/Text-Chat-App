import React , { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import DefaultPic from '../../icons/pfp.jpg'
import './Join.css'
import io from 'socket.io-client'

const maxnamelength = 25
const maxroomnamelength = 10

let socket
const loc = document.location



export default function Join() {

  const ENDPOINT = 'http://localhost:5000/'
  
  socket = io(ENDPOINT , {transports: ['websocket', 'polling', 'flashsocket']})

  const [name,setName] = useState('')
  const [room,setRoom] = useState('')
  const [avatarsrc, setAvatar] = useState(DefaultPic)
  const [rndm , setrndm] = useState()


  
  useEffect(()=>{
    socket.on('random', (rm)=>setrndm(rm))
    return()=>{
      socket.disconnect()
      socket.off()
    }
  }, [ENDPOINT , loc.search])



  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
      <img className='joinInnerPic' src={avatarsrc}  alt="avatar"></img>
      </div>

      <div className='joinInnerContainer'>
        <h1 className='heading'>Join / Create</h1>
        <div><input placeholder='Name' className='joinInput' id="namelength" autoComplete='off' maxLength={maxnamelength} type="text" 
        onChange={
          (event)=>{
            
            if(event.target.value === 'admin')  {alert('This name is restricted!'); event.target.value = ''; setAvatar(DefaultPic)}
            else{
             if(event.target.value === '')    setAvatar(DefaultPic)
             else     setName(event.target.value)
            } 
          }
        }
        onInput={(event) =>{ 
          setAvatar(`https://avatars.dicebear.com/api/bottts/:${event.target.value}.svg`)
          }} onEmptied={()=>setAvatar(DefaultPic)} /></div>
        
        <div><input placeholder='Join' maxLength={maxroomnamelength} className='joinInput mt-20' autoComplete='off' type="text" onChange={(event)=>{setRoom(event.target.value)}} /></div>
        
        <Link onClick={event =>( !name || !room ) ? event.preventDefault() : null } to ={`/chat?name=${name}&room=${room}&avatarsrc=${avatarsrc}`}>
          <button className='button mt-20' type='submit'>Create / Join Room</button>
        </Link>
        <Link onClick={ event =>( !name ) ? event.preventDefault() : null} to ={`/chat?name=${name}&room=${rndm}&avatarsrc=${avatarsrc}`}>
          <button className='randombutton mt-20' type='submit'>Join Random Room</button>
        </Link>
      </div>
    </div>
  )
}

